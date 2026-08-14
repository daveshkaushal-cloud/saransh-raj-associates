"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/**
 * Neutral contact form. Submits to an API route.
 * Uses neutral language only — no lead-generation framing.
 * Editorial document-style fields with mono labels.
 */
export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      area: String(data.get("area") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Thank you. Your message has been received.");
      form.reset();
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full name" name="name" required />
        <Field label="Email address" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Phone number" name="phone" type="tel" />
        <div>
          <label htmlFor="area" className="block mono-label text-ink/55 mb-2">
            Area of interest
          </label>
          <select
            id="area"
            name="area"
            defaultValue=""
            className="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:border-ink outline-none transition-colors"
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
        <label htmlFor="message" className="block mono-label text-ink/55 mb-2">
          Message <span className="text-ink/40">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:border-ink outline-none transition-colors resize-y"
          placeholder="Please share a brief, neutral description of your enquiry."
        />
      </div>

      <p className="text-xs text-ink/50 leading-relaxed">
        Submitting this form does not create a lawyer-client relationship. The
        information you share should not be confidential. By submitting, you
        acknowledge that you have read and agree to the{" "}
        <a href="/disclaimer" className="link-underline text-ink/70">disclaimer</a>.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-porcelain text-sm font-semibold tracking-wide hover:bg-electric transition-colors duration-300 disabled:opacity-50"
      >
        {submitting ? "Sending…" : "Send message"}
        {!submitting && (
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block mono-label text-ink/55 mb-2">
        {label} {required && <span className="text-ink/40">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-paper border border-line px-4 py-3 text-sm text-ink focus:border-ink outline-none transition-colors"
      />
    </div>
  );
}
