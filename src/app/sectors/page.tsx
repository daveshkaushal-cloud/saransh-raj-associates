import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { accentHex, type Accent } from "@/lib/accents";
import { FadeUp, SheetReveal, RuleDraw } from "@/components/motion/editorial";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Ten industries served by Saransh Raj & Associates — from alcoholic beverages and FMCG to technology, renewable energy and hospitality.",
  alternates: { canonical: "/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-porcelain pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-ink/50">Chapter 03 · Sectors</span>
            <span className="folio text-ink/45">004 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-4">Industry Atlas</p>
                <p className="margin-note">
                  Ten sectors, each given its own colour marker. Select a sector
                  to anchor its scope.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  A visual{" "}
                  <span className="serif-italic text-jade">atlas</span> of sectors
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-ink/70">
                  The firm advises across ten of India&apos;s dynamic industries.
                  Each sector below carries its own colour identity and a note on
                  the firm&apos;s work within it.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Sector index — compact annotated list ============== */}
      <section className="bg-porcelain py-16 md:py-24 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          {/* header row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-4">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-3">§ The index</p>
                <h2 className="display-2 max-w-[14ch]">
                  Ten sectors, one integrated practice
                </h2>
              </FadeUp>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <FadeUp delay={0.1}>
                <p className="body-condensed text-ink/60 max-w-md">
                  Each sector is colour-coded to the practice area most active
                  within it. The notes below describe the type of work the firm
                  carries — specific engagements are not published on this page.
                </p>
              </FadeUp>
            </div>
          </div>

          {/* colour legend */}
          <FadeUp>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 pb-6 border-b border-line">
              <span className="mono-label text-ink/55">Legend</span>
              {sectors.map((sector) => {
                const hex = accentHex[sector.accent as Accent];
                return (
                  <a
                    key={sector.slug}
                    href={`#${sector.slug}`}
                    className="flex items-center gap-2 group"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full transition-transform group-hover:scale-125"
                      style={{ background: hex }}
                      aria-hidden="true"
                    />
                    <span className="mono-label text-ink/70 group-hover:text-ink transition-colors">
                      {sector.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </FadeUp>

          {/* annotated rows — uniform, compact, scannable */}
          <div className="border-t border-line">
            {sectors.map((sector, i) => {
              const hex = accentHex[sector.accent as Accent];
              const num = String(i + 1).padStart(2, "0");
              return (
                <FadeUp key={sector.slug} delay={i * 0.04}>
                  <a
                    id={sector.slug}
                    href={`#${sector.slug}`}
                    className="group relative grid grid-cols-12 gap-4 items-center border-b border-line py-5 md:py-6 hover:bg-paper transition-colors scroll-mt-24"
                    aria-label={`${sector.name} — ${sector.note}`}
                  >
                    {/* index */}
                    <span className="col-span-2 md:col-span-1 mono-num text-sm text-ink/45 transition-colors group-hover:text-ink/70">
                      {num}
                    </span>

                    {/* colour marker + name */}
                    <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full shrink-0 transition-transform group-hover:scale-125"
                        style={{ background: hex }}
                        aria-hidden="true"
                      />
                      <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                        {sector.name}
                      </h3>
                    </div>

                    {/* note */}
                    <p className="col-span-12 md:col-span-5 text-[0.92rem] leading-relaxed text-ink/65 md:col-start-7">
                      {sector.note}
                    </p>

                    {/* arrow affordance */}
                    <span className="hidden md:flex col-span-1 items-center justify-end">
                      <svg
                        className="h-4 w-4 text-ink/35 transition-all duration-300 group-hover:text-ink group-hover:translate-x-1"
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
                  </a>
                </FadeUp>
              );
            })}
          </div>
          <RuleDraw className="mt-8 max-w-md" />
        </div>
      </section>

      {/* ============== How the firm serves sectors ============== */}
      <section className="bg-paper py-16 md:py-24 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-3">§ Approach</p>
                <h2 className="display-2 max-w-[14ch]">
                  How the firm serves its sectors
                </h2>
              </FadeUp>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeUp delay={0.1}>
                <div className="space-y-5 max-w-2xl">
                  <p className="lead text-ink/75">
                    Sector knowledge sits alongside, not in place of, legal
                    discipline. The firm&apos;s sector work is grounded in the
                    corporate and commercial practice that carries across every
                    industry it serves.
                  </p>
                  <p className="text-[0.95rem] leading-relaxed text-ink/65">
                    What changes from one sector to the next is the regulatory
                    regime, the commercial conventions, and the counterparties
                    a client is likely to encounter. The firm carries an
                    integrated view — corporate structuring, contracting,
                    regulatory compliance and, where required, dispute resolution
                    — calibrated to the sector the client operates within.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* three short notes */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            {[
              {
                title: "Sector-aware, not sector-bound",
                body: "The firm brings the same legal discipline to every sector. Sector context informs the advice; it does not replace the analysis.",
              },
              {
                title: "Connected to the practice areas",
                body: "Each sector maps to the practice areas most active within it — corporate advisory, contracts, regulatory and disputes work.",
              },
              {
                title: "Regulatory at the core",
                body: "Several of the sectors the firm serves are heavily regulated. Regulatory familiarity is woven into the commercial advice, not bolted on.",
              },
            ].map((note, i) => (
              <FadeUp key={note.title} delay={i * 0.08}>
                <div className="bg-paper p-6 md:p-8 h-full">
                  <span className="mono-num text-sm text-ink/35 block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg md:text-xl text-ink mb-2 leading-tight">
                    {note.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-ink/65">
                    {note.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============== Cross-link to practice areas ============== */}
      <section className="bg-porcelain py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <FadeUp>
            <h2 className="display-2 text-ink max-w-[20ch]">
              The practice behind{" "}
              <span className="serif-italic text-jade">the sectors</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/expertise"
              className="group inline-flex items-center gap-2 mono-label text-ink hover:text-electric transition-colors"
            >
              <span>View the expertise index</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
