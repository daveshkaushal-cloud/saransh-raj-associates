import { NextResponse } from "next/server";

/**
 * Neutral contact-form endpoint.
 * Attempts to store the enquiry in the database, but always returns a calm
 * response so the public interface remains non-promotional.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const name = String(body.name || "").slice(0, 200);
    const email = String(body.email || "").slice(0, 200);
    const phone = String(body.phone || "").slice(0, 60);
    const area = String(body.area || "").slice(0, 100);
    const message = String(body.message || "").slice(0, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Persist if the database layer is available.
    try {
      const { db } = await import("@/lib/db");
      await db.contactEnquiry.create({
        data: { name, email, phone, area, message },
      });
    } catch {
      // Database optional — the public response stays calm.
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
