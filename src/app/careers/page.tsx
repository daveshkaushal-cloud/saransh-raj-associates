import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/data/firm";
import { FadeUp, SheetReveal } from "@/components/motion/editorial";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Information for those interested in joining Saransh Raj & Associates. The firm welcomes enquiries from advocates and support staff.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero — calm and factual */}
      <section className="relative bg-surface pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-fg-subtle">Index 06 · Careers</span>
            <span className="folio text-fg-subtle">007 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">Joining the firm</p>
                <p className="margin-note">
                  A calm, factual note for those interested in joining the practice.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-fg max-w-[14ch]">
                  Joining the{" "}
                  <span className="serif-italic text-jade">practice</span>
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-fg-muted">
                  Saransh Raj &amp; Associates is a boutique practice that welcomes
                  enquiries from advocates and support staff who share its commitment
                  to integrity, precision and clarity.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Factual body — simple, no exaggerated claims */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">§ Overview</p>
              </FadeUp>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <FadeUp delay={0.1}>
                <div className="space-y-6 max-w-2xl text-fg-muted leading-relaxed">
                  <p>
                    The firm is small by design. It does not operate a structured
                    recruitment calendar or advertise positions. When a role opens,
                    it is filled through direct enquiry and referral.
                  </p>
                  <p>
                    Advocates with experience in corporate advisory, commercial
                    contracts, mergers and acquisitions, dispute resolution,
                    regulatory compliance or insolvency are welcome to introduce
                    themselves. Internship and junior enquiries from law students
                    and recent graduates are also considered.
                  </p>
                  <p className="text-fg-muted text-sm">
                    The firm does not respond to generic applications. Please
                    include a brief note on your background and the area of practice
                    you are drawn to.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* How to reach — simple contact block */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-line pt-12">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">§ How to reach</p>
              </FadeUp>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <FadeUp delay={0.1}>
                <div className="space-y-4">
                  <p className="text-fg-muted">
                    Write to the firm with a short introduction. Email is preferred.
                  </p>
                  <div className="space-y-2">
                    <a href={contact.emailHref} className="link-underline text-fg hover:text-accent transition-colors">
                      {contact.email}
                    </a>
                    <p className="text-sm text-fg-muted">{contact.address.full}</p>
                    <p className="mono-label text-fg-subtle">{contact.hours}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm font-medium hover:bg-coral transition-colors duration-300"
                  >
                    <span>Visit contact page</span>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
