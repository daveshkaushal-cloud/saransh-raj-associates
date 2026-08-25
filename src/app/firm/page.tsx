import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { firm, contact } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";

export const metadata: Metadata = {
  title: "The Firm",
  description:
    "Saransh Raj & Associates is a New Delhi-based boutique corporate and commercial law firm built on integrity, precision, clarity and continuity.",
  alternates: { canonical: "/firm" },
};

export default function FirmPage() {
  return (
    <>
      {/* ============== HERO — manifesto opening (ivory) ============== */}
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone">Index 01 · The Firm</span>
            <span className="folio text-stone">01 / 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-rose" aria-hidden="true" />
                <span className="mono-label">Manifesto</span>
              </div>
              <p className="margin-note">
                A boutique corporate &amp; commercial law firm based in New Delhi, India.
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-espresso max-w-[16ch]">
                Counsel built on{" "}
                <span className="serif-italic">principle</span>
                <span className="text-espresso">.</span>
              </h1>
              <p className="lead mt-6 md:mt-8 measure text-charcoal">
                {firm.purpose} The firm advises companies, individuals and
                families on corporate and commercial law.
              </p>
              <div className="mt-8 max-w-md h-px bg-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== PHILOSOPHY & APPROACH — single cohesive section (porcelain) ============== */}
      <PhilosophyAndApproach />

      {/* ============== PRACTICE AREAS INDEX (ivory) ============== */}
      <section className="bg-ivory text-espresso py-12 md:py-20 lg:py-24 relative overflow-hidden border-y border-line">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-10">
            <div className="md:col-span-5">
              <p className="mono-label mb-3 text-rose-dark">§ Practice</p>
              <h2 className="display-2 text-espresso">
                Six practice areas
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <p className="body-condensed text-charcoal max-w-md measure">
                The firm&apos;s work is organised across six practice areas.
              </p>
            </div>
          </div>

          <div className="border-t border-line">
            {practiceAreas.map((area) => {
              const hex = accentHex[area.accent];
              return (
                <Link
                  key={area.slug}
                  href={`/expertise/${area.slug}`}
                  className="group relative grid grid-cols-12 gap-4 items-center py-5 md:py-6 border-b border-line hover:bg-porcelain transition-colors"
                >
                  <span className="col-span-2 md:col-span-1 mono-num text-sm text-stone group-hover:text-espresso transition-colors">
                    {area.index}
                  </span>
                  <span className="col-span-7 md:col-span-5">
                    <span className="font-display text-xl md:text-2xl text-espresso">
                      {area.title}
                    </span>
                  </span>
                  <span className="col-span-3 md:col-span-4 text-sm text-charcoal hidden sm:block">
                    {area.short}
                  </span>
                  <span className="col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                    <span className="h-2 w-2 rounded-full" style={{ background: hex }} aria-hidden="true" />
                    <svg
                      className="h-5 w-5 text-stone group-hover:text-rose-dark group-hover:translate-x-1 transition-all duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== CONTACT STRIP — burgundy, ivory text ============== */}
      <section className="bg-burgundy py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2
                className="display-2 max-w-[18ch]"
                style={{ color: "var(--color-on-burgundy-heading)" }}
              >
                Reach the{" "}
                <span className="serif-italic-on-burgundy">firm</span>
              </h2>
            </div>
            <div className="space-y-1">
              <p>
                <a
                  href={contact.emailHref}
                  className="link-underline break-all"
                  style={{ color: "var(--color-on-burgundy-body)" }}
                >
                  {contact.email}
                </a>
              </p>
              <p>
                <a
                  href={contact.phoneHref}
                  className="link-underline"
                  style={{ color: "var(--color-on-burgundy-body)" }}
                >
                  {contact.phone}
                </a>
              </p>
              <p
                className="mono-label"
                style={{ color: "var(--color-on-burgundy-label)" }}
              >
                {contact.hours}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------
   Philosophy & Approach — one cohesive section.
   Combines the firm's founding philosophy, principles, and approach
   into a single editorial narrative on porcelain, with one
   supporting image (document-detail.png) and a colour-blocked
   principles grid. No repeated firm descriptions.
   --------------------------------------------------------------- */
function PhilosophyAndApproach() {
  const principles = firm.principles;
  // Warm palette — alternate rose / burgundy / blush / espresso
  const fields = [
    { bg: "#B76E79", fg: "#FFFFFF" }, // rose
    { bg: "#603A40", fg: "#F7F1E8" }, // burgundy
    { bg: "#E3C8BE", fg: "#2B2422" }, // blush (dark text)
    { bg: "#2B2422", fg: "#F7F1E8" }, // espresso
  ];

  return (
    <section className="relative bg-porcelain py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-10">
          <div className="md:col-span-3">
            <p className="mono-label mb-4">§ Philosophy</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-2 text-espresso max-w-[16ch]">
              The firm&apos;s working philosophy
            </h2>
          </div>
        </div>

        {/* Narrative + supporting image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-7 md:col-start-1">
            <div className="space-y-6 measure">
              <p className="lead text-charcoal">
                Founded by Advocate Saransh Raj, Saransh Raj &amp; Associates
                is a boutique corporate and commercial law firm based in New
                Delhi. The firm advises companies, individuals and families on
                corporate structuring, commercial contracts, mergers and
                acquisitions, dispute resolution, regulatory compliance and
                insolvency proceedings.
              </p>
              <p className="body-condensed text-charcoal">
                Each engagement begins with understanding the objective, then
                moves through structured analysis toward clear, actionable
                counsel. The firm combines attention to legal detail with an
                understanding of commercial realities, and works methodically,
                attentively, and with consideration for the people it advises.
              </p>
              <p className="body-condensed text-charcoal">
                Integrity, precision, clarity and continuity shape how the firm
                works — ethically, with attention to detail, and in language
                that makes the law understandable.
              </p>
            </div>
          </div>

          {/* Supporting image — document detail, single, sparingly used */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-blush">
              <Image
                src="/images/document-detail.png"
                alt="Document detail — layered legal papers reflecting the firm's archival approach"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Rose-gold annotation bracket */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                <div className="h-3 w-3 border-l border-t border-rose" aria-hidden="true" />
                <span className="mono-label text-rose-dark">Archive · 01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Principles — colour-blocked cards */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-10">
            <div className="md:col-span-5">
              <p className="mono-label mb-3">§ Principles</p>
              <h3 className="display-3 text-espresso">
                Four principles shape every engagement
              </h3>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <p className="body-condensed text-charcoal max-w-md measure">
                From the first conversation through to the final document, the
                firm&apos;s work is shaped by four principles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {principles.map((p, i) => {
              const { bg, fg } = fields[i % fields.length];
              return (
                <div
                  key={p.title}
                  className="relative h-full min-h-[14rem] p-6 flex flex-col justify-between border border-line-strong"
                  style={{ background: bg, color: fg }}
                >
                  <div className="flex items-start justify-between">
                    <span className="mono-num opacity-80">
                      {String(i + 1).padStart(2, "0")} / 04
                    </span>
                    <span className="font-display text-4xl md:text-5xl opacity-25 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-xl md:text-2xl leading-tight">{p.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed opacity-90">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
