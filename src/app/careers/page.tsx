import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { contact } from "@/data/firm";

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
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone-dark">Index 05 · Careers</span>
            <span className="folio text-stone-dark">05 / 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div>
                <p className="mono-label text-stone-dark mb-4">Joining the firm</p>
                <p className="margin-note text-charcoal">
                  A calm, factual note for those interested in joining the practice.
                </p>
              </div>
            </div>
            <div className="md:col-span-9">
              <div>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  Joining the{" "}
                  <span className="serif-italic">practice</span>
                </h1>
              </div>
              <div>
                <p className="lead mt-6 md:mt-8 measure text-charcoal">
                  Saransh Raj &amp; Associates is a boutique practice that welcomes
                  enquiries from advocates and support staff who share its commitment
                  to integrity, precision and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factual body — simple, no exaggerated claims */}
      <section className="bg-porcelain py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3">
              <div>
                <p className="mono-label text-stone-dark mb-4">§ Overview</p>
                {/* Supporting image — document detail, single, sparingly used */}
                <div className="mt-6 relative aspect-[4/3] w-full max-w-xs overflow-hidden bg-stone">
                  <Image
                    src="/images/document-detail.png"
                    alt="Document detail — layered legal papers reflecting the firm's archival practice"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                    <div className="h-3 w-3 border-l border-t border-copper" aria-hidden="true" />
                    <span className="mono-label text-copper">Archive · 03</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div>
                <div className="space-y-6 measure text-charcoal leading-relaxed">
                  <p className="lead">
                    The firm is small by design. It does not operate a structured
                    recruitment calendar or advertise positions. When a role opens,
                    it is filled through direct enquiry and referral.
                  </p>
                  <p className="body-condensed">
                    Advocates with experience in corporate advisory, commercial
                    contracts, mergers and acquisitions, dispute resolution,
                    regulatory compliance or insolvency are welcome to introduce
                    themselves. Internship and junior enquiries from law students
                    and recent graduates are also considered.
                  </p>
                  <p className="body-condensed">
                    The firm does not respond to generic applications. Please
                    include a brief note on your background and the area of practice
                    you are drawn to.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to reach — simple contact block */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-line pt-10 md:pt-12">
            <div className="md:col-span-3">
              <div>
                <p className="mono-label text-stone-dark mb-4">§ How to reach</p>
              </div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div>
                <div className="space-y-4 measure">
                  <p className="lead text-charcoal">
                    Write to the firm with a short introduction. Email is preferred.
                  </p>
                  <div className="space-y-2">
                    <a href={contact.emailHref} className="link-underline text-ink hover:text-copper transition-colors">
                      {contact.email}
                    </a>
                    <p className="body-condensed text-charcoal">{contact.address.full}</p>
                    <p className="mono-label text-stone-dark">{contact.hours}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-3 bg-oxblood text-ivory text-sm font-medium hover:bg-ink transition-colors duration-300"
                  >
                    <span>Visit contact page</span>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
