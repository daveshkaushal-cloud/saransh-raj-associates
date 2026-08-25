"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/**
 * Neutral contact form. Submits via POST (never GET — submitted
 * information never appears in the URL).
 *
 * Features:
 *  - method="post" on the form element (progressive enhancement: works
 *    even if JS fails, posting to /api/contact).
 *  - Client-side validation (required fields, email format, min length).
 *  - Honeypot field (hidden "company" field — bots fill it, humans don't).
 *  - Duplicate-submission prevention (submit button disabled while
 *    submitting; ref guard prevents double-submit race).
 *  - Accessible success/error messages via sonner toast.
 *  - No submitted information logged to the browser console.
 *  - Disclaimer that no lawyer-client relationship is created.
 */
export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submittingRef = useRef(false);

  function validate(payload: {
    name: string;
    email: string;
    message: string;
  }): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!payload.name || payload.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }
    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!payload.message || payload.message.trim().length < 10) {
      errs.message = "Please provide a message of at least 10 characters.";
    }
    return errs;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Guard against double-submit (rapid double-click, Enter key spam)
    if (submittingRef.current) return;
    submittingRef.current = true;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      area: String(data.get("area") || "").trim(),
      message: String(data.get("message") || "").trim(),
      // Honeypot — should always be empty
      company: String(data.get("company") || "").trim(),
    };

    const fieldErrors = validate(payload);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      submittingRef.current = false;
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }
      toast.success("Thank you. Your message has been received.");
      form.reset();
      setErrors({});
      router.refresh();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(msg || "Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
      submittingRef.current = false;
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      method="post"
      action="/api/contact"
      className="space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full name" name="name" required error={errors.name} />
        <Field
          label="Email address"
          name="email"
          type="email"
          required
          error={errors.email}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Phone number" name="phone" type="tel" />
        <div>
          <label
            htmlFor="area"
            className="block mono-label text-stone mb-2"
          >
            Area of interest
          </label>
          <select
            id="area"
            name="area"
            defaultValue=""
            className="w-full bg-porcelain border border-line px-4 py-3 text-sm text-espresso focus:border-rose-dark outline-none transition-colors"
          >
            <option value="">Select a practice area</option>
            <option>Corporate Advisory</option>
            <option>Commercial Contracts</option>
            <option>Mergers & Acquisitions</option>
            <option>Dispute Resolution</option>
            <option>Regulatory & Compliance</option>
            <option>Insolvency & Recovery</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mono-label text-stone mb-2"
        >
          Message <span className="text-rose-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`w-full bg-porcelain border px-4 py-3 text-sm text-espresso focus:border-rose-dark outline-none transition-colors resize-y ${
            errors.message ? "border-rose-dark" : "border-line"
          }`}
          placeholder="Please share a brief, neutral description of your enquiry."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-rose-dark" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field — hidden from humans, visible to bots. If filled,
          the server silently drops the submission. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      <p className="text-sm text-stone leading-relaxed measure">
        Submitting this form does not create a lawyer-client relationship.
        The information you share should not be confidential. By submitting,
        you acknowledge that you have read and agree to the{" "}
        <a
          href="/disclaimer"
          className="link-underline text-charcoal hover:text-rose-dark"
        >
          disclaimer
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-rose-dark text-white text-sm font-semibold tracking-wide hover:bg-burgundy transition-colors duration-300 disabled:opacity-50"
      >
        {submitting ? "Sending…" : "Send message"}
        {!submitting && (
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block mono-label text-stone mb-2">
        {label} {required && <span className="text-rose-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        className={`w-full bg-porcelain border px-4 py-3 text-sm text-espresso focus:border-rose-dark outline-none transition-colors ${
          error ? "border-rose-dark" : "border-line"
        }`}
      />
      {error && (
        <p className="mt-2 text-sm text-rose-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
