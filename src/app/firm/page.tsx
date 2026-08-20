import type { Metadata } from "next";
import Link from "next/link";
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
      {/* ============== HERO — manifesto opening ============== */}
      <section className="relative bg-surface pt-10 md:pt-16 pb-16 md:pb-24 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-fg-muted">Index 01 · The Firm</span>
            <span className="folio text-fg-subtle">002 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="mono-label text-fg-muted">Manifesto</span>
                </div>
                <p className="margin-note">
                  A boutique corporate &amp; commercial law firm based in New Delhi, India.
                </p>
              </div>
            </div>
            <div className="md:col-span-9">
              <div>
                <h1 className="display-1 text-fg max-w-[16ch]">
                  Counsel built on{" "}
                  <span className="serif-italic text-accent">principle</span>
                  <span className="text-fg">.</span>
                </h1>
              </div>
              <div>
                <p className="lead mt-8 max-w-2xl text-fg-muted">
                  {firm.purpose} The firm advises companies, individuals and
                  families on corporate and commercial law.
                </p>
              </div>
              <div className="mt-10 max-w-md h-px bg-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== PHILOSOPHY — scroll-driven manifesto ============== */}
      <PhilosophyManifesto />

      {/* ============== PRINCIPLES — colour-blocked ============== */}
      <section className="relative bg-surface py-20 md:py-32 border-y border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <div>
                <p className="mono-label text-fg-muted mb-3">§ Principles</p>
                <h2 className="display-2">
                  What the firm{" "}
                  <span className="serif-italic text-coral">stands for</span>
                </h2>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <div>
                <p className="body-condensed text-fg-muted max-w-md">
                  Four principles shape every engagement — from the first
                  conversation through to the final document.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* colour-blocked principle grid */}
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {firm.principles.map((p, i) => {
              const colours = ["#4169FF", "#FF6B5C", "#F0A050", "#0FA98C"];
              const hex = colours[i % colours.length];
              const isLight = hex === "#F0A050";
              const onHex = isLight ? "#080D18" : "#FFFFFF";
              return (
                <div key={p.title}>
                  <div
                    className="relative h-full min-h-[15rem] p-7 flex flex-col justify-between border border-line-strong"
                    style={{ background: hex, color: onHex }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="mono-num text-[0.7rem] opacity-75">
                        {String(i + 1).padStart(2, "0")} / 04
                      </span>
                      <span className="font-display text-5xl opacity-25 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                      <p className="mt-3 text-[0.85rem] leading-relaxed opacity-80">{p.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== APPROACH — asymmetric timeline ============== */}
      <ApproachTimeline />

      {/* ============== PRACTICE AREAS INDEX ============== */}
      <section className="bg-surface-soft text-fg py-20 md:py-32 relative overflow-hidden border-y border-line">
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <div>
                <p className="mono-label text-saffron mb-3">§ Practice</p>
                <h2 className="display-2 text-fg">
                  Six practice{" "}
                  <span className="serif-italic text-saffron">areas</span>
                </h2>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <div>
                <p className="body-condensed text-fg-muted max-w-md">
                  The firm&apos;s work is organised across six practice areas.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-line">
            {practiceAreas.map((area, i) => {
              const hex = accentHex[area.accent];
              return (
                <div key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group relative grid grid-cols-12 gap-4 items-center py-5 md:py-6 border-b border-line hover:bg-surface-elevated transition-colors"
                  >
                    <span className="col-span-2 md:col-span-1 mono-num text-sm text-fg-subtle group-hover:text-fg transition-colors">
                      {area.index}
                    </span>
                    <span className="col-span-7 md:col-span-5">
                      <span className="font-display text-xl md:text-3xl text-fg">
                        {area.title}
                      </span>
                    </span>
                    <span className="col-span-3 md:col-span-4 text-[0.8rem] text-fg-subtle hidden sm:block">
                      {area.short}
                    </span>
                    <span className="col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                      <span className="h-2 w-2 rounded-full" style={{ background: hex }} />
                      <svg className="h-5 w-5 text-fg-subtle group-hover:text-fg group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== CONTACT STRIP ============== */}
      <section className="bg-surface py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="display-2 text-fg max-w-[18ch]">
                Reach the <span className="serif-italic text-coral">firm</span>
              </h2>
            </div>
            <div>
              <div className="text-fg-muted space-y-1">
                <p><a href={contact.emailHref} className="link-underline break-all">{contact.email}</a></p>
                <p><a href={contact.phoneHref} className="link-underline">{contact.phone}</a></p>
                <p className="mono-label text-fg-muted">{contact.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------
   Philosophy Manifesto — scroll-driven pinned narrative
   --------------------------------------------------------------- */
function PhilosophyManifesto() {
  const steps = [
    {
      label: "§ 01 — Origin",
      title: "Founded on considered counsel",
      body: firm.purpose,
      hex: "#4169FF",
    },
    {
      label: "§ 02 — Approach",
      title: "Depth, diligence and clarity",
      body: "Based in New Delhi, the firm advises on corporate structuring, commercial contracts, mergers and acquisitions, dispute resolution, regulatory compliance and insolvency proceedings — combining attention to legal detail with an understanding of commercial realities.",
      hex: "#FF6B5C",
    },
    {
      label: "§ 03 — Principle",
      title: "Integrity, precision, clarity, continuity",
      body: "These principles shape how the firm works: ethically, with attention to detail, and in language that makes the law understandable.",
      hex: "#F0A050",
    },
  ];

  return (
    <section className="relative bg-surface-soft py-20 md:py-32 border-b border-line">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <div>
              <p className="mono-label text-fg-muted mb-4">§ Philosophy</p>
            </div>
          </div>
          <div className="md:col-span-9">
            <div>
              <h2 className="display-2 max-w-[16ch]">
                The firm&apos;s{" "}
                <span className="serif-italic text-violet">working</span> philosophy
              </h2>
            </div>
          </div>
        </div>

        <div id="philosophy" className="space-y-16 md:space-y-24">
          {steps.map((s, i) => {
            const isLight = s.hex === "#F0A050";
            const onHex = isLight ? "#080D18" : "#FFFFFF";
            return (
              <div key={s.label}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  {/* Left: oversized number + colour block */}
                  <div className="md:col-span-4">
                    <div
                      className="relative aspect-square max-w-[14rem] flex items-center justify-center overflow-hidden"
                      style={{ background: s.hex, color: onHex }}
                    >
                      <span className="font-display text-[8rem] leading-none opacity-90">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute top-4 left-4 mono-label opacity-80">{s.label}</span>
                      <span className="absolute bottom-4 right-4 mono-num text-[0.6rem] opacity-75">
                        PHIL/0{i + 1}
                      </span>
                    </div>
                  </div>
                  {/* Right: title + body */}
                  <div className="md:col-span-8 md:pl-6 flex flex-col justify-center">
                    <h3 className="display-3 text-2xl md:text-4xl max-w-[18ch]">{s.title}</h3>
                    <p className="lead mt-5 max-w-xl" style={{ color: "var(--text-secondary)" }}>{s.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Approach Timeline — asymmetric archival layout
   --------------------------------------------------------------- */
function ApproachTimeline() {
  const milestones = [
    {
      year: "Origin",
      title: "Founded by Advocate Saransh Raj",
      body: "Established to provide companies, individuals and families with considered corporate legal counsel.",
      hex: "#4169FF",
    },
    {
      year: "Practice",
      title: "Six areas of corporate & commercial law",
      body: "Corporate advisory, commercial contracts, M&A, dispute resolution, regulatory compliance and insolvency.",
      hex: "#FF6B5C",
    },
    {
      year: "Approach",
      title: "Methodical, attentive, considered",
      body: "Each engagement begins with understanding the objective, then moves through structured analysis toward clear, actionable counsel.",
      hex: "#0FA98C",
    },
    {
      year: "Sectors",
      title: "Ten industries, one integrated practice",
      body: "From alcoholic beverages and FMCG to technology, renewable energy and hospitality.",
      hex: "#8E7BFF",
    },
  ];

  return (
    <section className="relative bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5">
            <div>
              <p className="mono-label text-fg-muted mb-3">§ Approach</p>
              <h2 className="display-2">
                An{" "}
                <span className="serif-italic text-teal">archival</span> view of the firm
              </h2>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
            <div>
              <p className="body-condensed text-fg-muted max-w-md">
                A timeline of the firm&apos;s structure, practice and approach —
                set out as an archival record.
              </p>
            </div>
          </div>
        </div>

        {/* Asymmetric timeline */}
        <div className="relative">
          {/* central rule */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <div key={m.year}>
                  <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}>
                    {/* marker */}
                    <span
                      className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-surface-soft z-10"
                      style={{ background: m.hex }}
                      aria-hidden="true"
                    />
                    {/* content card */}
                    <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12 md:col-start-2 [direction:ltr]"}`}>
                      <div className="inline-block bg-surface-soft border border-line p-6 md:p-7 max-w-md [direction:ltr]">
                        <div className={`flex items-center gap-3 mb-3 ${left ? "md:justify-end" : ""}`}>
                          <span className="h-2 w-2 rounded-full" style={{ background: m.hex }} />
                          <span className="mono-label text-fg-muted">{m.year}</span>
                        </div>
                        <h3 className="display-3 text-xl md:text-2xl">{m.title}</h3>
                        <p className="mt-3 text-sm text-fg-muted leading-relaxed">{m.body}</p>
                      </div>
                    </div>
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
