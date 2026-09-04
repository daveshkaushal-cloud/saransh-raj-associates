import { NextResponse } from "next/server";

/**
 * Neutral contact-form endpoint. Accepts POST only (no GET — submitted
 * information never appears in URLs or query parameters).
 *
 * Security:
 *  - Server-side validation of all fields (required, type, length).
 *  - Email format validation.
 *  - Honeypot field: if the hidden "company" field is filled, the request
 *    is silently dropped as spam (returns ok:true to fool the bot).
 *  - Rate limiting: max 3 submissions per IP per 10 minutes via an
 *    in-memory Map (sufficient for a low-traffic firm site).
 *  - Field length caps to prevent payload abuse.
 *  - No submitted information is logged to the console.
 *
 * Valid enquiries are delivered to the firm's designated office inbox
 * through Resend. A success response is returned only after the email
 * provider accepts the message.
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 3; // 3 submissions per window per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  const xri = req.headers.get("x-real-ip");
  if (xri) return xri;
  return "unknown";
}

function isValidEmail(email: string): boolean {
  // RFC 5322 simplified pattern — sufficient for server-side validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

const CONTACT_EMAIL = "office@saranshrajassociates.co.in";
const CONTACT_FROM_EMAIL =
  "Saransh Raj & Associates Website <enquiries@contact.saranshrajassociates.co.in>";

async function deliverEnquiry({
  name,
  email,
  phone,
  area,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Email delivery is not configured.");
  }

  const safeArea = area.replace(/[\r\n]+/g, " ").trim();
  const subject = safeArea
    ? `Website enquiry — ${safeArea}`
    : "Website enquiry";
  const text = [
    "New website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Nature of enquiry: ${safeArea || "General enquiry"}`,
    "",
    "Message:",
    message,
    "",
    `Received: ${new Date().toISOString()}`,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject,
      text,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error("The email provider did not accept the enquiry.");
  }
}

export async function POST(req: Request) {
  try {
    // Rate limit check
    const ip = getClientIp(req);
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (entry) {
      if (now < entry.resetAt) {
        if (entry.count >= RATE_LIMIT_MAX) {
          // Return a calm 429 so the attacker doesn't learn the limit
          return NextResponse.json(
            { ok: false, error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        entry.count++;
      } else {
        // Window expired — reset
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }
    // Clean up old entries periodically
    if (rateLimitMap.size > 1000) {
      for (const [k, v] of rateLimitMap) {
        if (now >= v.resetAt) rateLimitMap.delete(k);
      }
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // Honeypot: if "company" is filled, it's a bot. Silently succeed.
    const honeypot = String(body.company || "").trim();
    if (honeypot) {
      // Pretend success to fool the bot — do not store or log
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim().slice(0, 200);
    const email = String(body.email || "").trim().slice(0, 254);
    const phone = String(body.phone || "").trim().slice(0, 60);
    const area = String(body.area || "").trim().slice(0, 100);
    const message = String(body.message || "").trim().slice(0, 5000);

    // Server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name." },
        { status: 400 }
      );
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (!message || message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please provide a message of at least 10 characters." },
        { status: 400 }
      );
    }

    try {
      await deliverEnquiry({ name, email, phone, area, message });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your enquiry. Please email office@saranshrajassociates.co.in directly.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// Explicitly reject GET — submitted information must never appear in URLs.
export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed. Use POST." },
    { status: 405 }
  );
}
