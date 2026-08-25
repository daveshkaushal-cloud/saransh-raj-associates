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
      {/* ============== HERO — manifesto opening (ivory) ============== */}
      <section className="relative bg-ivory pt-10 md:pt-16 pb-16 md:pb-24 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label">Index 01 · The Firm</span>
            <span className="folio">002 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-rose" />
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
              <p className="lead mt-8 max-w-2xl text-charcoal">
                {firm.purpose} The firm advises companies, individuals and
                families on corporate and commercial law.
              </p>
              <div className="mt-10 max-w-md h-px bg-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== PHILOSOPHY — manifesto (porcelain) ============== */}
      <PhilosophyManifesto />

      {/* ============== PRINCIPLES — colour-blocked cards (beige) ============== */}
      <section className="relative bg-beige py-20 md:py-32 border-y border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <p className="mono-label mb-3">§ Principles</p>
              <h2 className="display-2 text-espresso">
                What the firm{" "}
                <span className="serif-italic">stands for</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <p className="body-condensed text-charcoal max-w-md">
                Four principles shape every engagement — from the first
                conversation through to the final document.
              </p>
            </div>
          </div>
        </div>

        {/* colour-blocked principle grid */}
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {firm.principles.map((p, i) => {
              // Warm palette — alternate rose / burgundy / blush / espresso
              const fields = [
                { bg: "#B76E79", fg: "#FFFFFF" }, // rose
                { bg: "#603A40", fg: "#F7F1E8" }, // burgundy
                { bg: "#E3C8BE", fg: "#2B2422" }, // blush (dark text)
                { bg: "#2B2422", fg: "#F7F1E8" }, // espresso
              ];
              const { bg, fg } = fields[i % fields.length];
              return (
                <div
                  key={p.title}
                  className="relative h-full min-h-[15rem] p-7 flex flex-col justify-between border border-line-strong"
                  style={{ background: bg, color: fg }}
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
                    <p className="mt-3 text-[0.85rem] leading-relaxed opacity-85">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== APPROACH — asymmetric timeline (ivory) ============== */}
      <ApproachTimeline />

      {/* ============== PRACTICE AREAS INDEX (porcelain) ============== */}
      <section className="bg-porcelain text-espresso py-20 md:py-32 relative overflow-hidden border-y border-line">
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <p className="mono-label mb-3 text-rose">§ Practice</p>
              <h2 className="display-2 text-espresso">
                Six practice{" "}
                <span className="serif-italic">areas</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <p className="body-condensed text-charcoal max-w-md">
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
                  className="group relative grid grid-cols-12 gap-4 items-center py-5 md:py-6 border-b border-line hover:bg-ivory transition-colors"
                >
                  <span className="col-span-2 md:col-span-1 mono-num text-sm text-stone group-hover:text-espresso transition-colors">
                    {area.index}
                  </span>
                  <span className="col-span-7 md:col-span-5">
                    <span className="font-display text-xl md:text-3xl text-espresso">
                      {area.title}
                    </span>
                  </span>
                  <span className="col-span-3 md:col-span-4 text-[0.8rem] text-charcoal hidden sm:block">
                    {area.short}
                  </span>
                  <span className="col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                    <span className="h-2 w-2 rounded-full" style={{ background: hex }} />
                    <svg
                      className="h-5 w-5 text-stone group-hover:text-rose group-hover:translate-x-1 transition-all duration-300"
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
      <section className="bg-burgundy text-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="display-2 text-ivory max-w-[18ch]">
                Reach the <span className="serif-italic" style={{ color: "#E3C8BE" }}>firm</span>
              </h2>
            </div>
            <div className="space-y-1">
              <p>
                <a href={contact.emailHref} className="link-underline break-all text-ivory">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={contact.phoneHref} className="link-underline text-ivory">
                  {contact.phone}
                </a>
              </p>
              <p className="mono-label text-ivory/70">{contact.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------
   Philosophy Manifesto — warm editorial narrative (porcelain)
   --------------------------------------------------------------- */
function PhilosophyManifesto() {
  const steps = [
    {
      label: "§ 01 — Origin",
      title: "Founded on considered counsel",
      body: firm.purpose,
      bg: "#B76E79",   // rose
      fg: "#FFFFFF",
    },
    {
      label: "§ 02 — Approach",
      title: "Depth, diligence and clarity",
      body: "Based in New Delhi, the firm advises on corporate structuring, commercial contracts, mergers and acquisitions, dispute resolution, regulatory compliance and insolvency proceedings — combining attention to legal detail with an understanding of commercial realities.",
      bg: "#603A40",   // burgundy
      fg: "#F7F1E8",
    },
    {
      label: "§ 03 — Principle",
      title: "Integrity, precision, clarity, continuity",
      body: "These principles shape how the firm works: ethically, with attention to detail, and in language that makes the law understandable.",
      bg: "#2B2422",   // espresso
      fg: "#F7F1E8",
    },
  ];

  return (
    <section className="relative bg-porcelain py-20 md:py-32 border-b border-line">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <p className="mono-label mb-4">§ Philosophy</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-2 text-espresso max-w-[16ch]">
              The firm&apos;s{" "}
              <span className="serif-italic">working</span> philosophy
            </h2>
          </div>
        </div>

        <div id="philosophy" className="space-y-16 md:space-y-24">
          {steps.map((s, i) => (
            <div key={s.label}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {/* Left: oversized number on warm colour block */}
                <div className="md:col-span-4">
                  <div
                    className="relative aspect-square max-w-[14rem] flex items-center justify-center overflow-hidden"
                    style={{ background: s.bg, color: s.fg }}
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
                  <h3 className="display-3 text-2xl md:text-4xl text-espresso max-w-[18ch]">{s.title}</h3>
                  <p className="lead mt-5 max-w-xl text-charcoal">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Approach Timeline — asymmetric archival layout (ivory)
   --------------------------------------------------------------- */
function ApproachTimeline() {
  const milestones = [
    {
      year: "Origin",
      title: "Founded by Advocate Saransh Raj",
      body: "Established to provide companies, individuals and families with considered corporate legal counsel.",
      hex: "#B76E79", // rose
    },
    {
      year: "Practice",
      title: "Six areas of corporate & commercial law",
      body: "Corporate advisory, commercial contracts, M&A, dispute resolution, regulatory compliance and insolvency.",
      hex: "#603A40", // burgundy
    },
    {
      year: "Approach",
      title: "Methodical, attentive, considered",
      body: "Each engagement begins with understanding the objective, then moves through structured analysis toward clear, actionable counsel.",
      hex: "#2B2422", // espresso
    },
    {
      year: "Sectors",
      title: "Ten industries, one integrated practice",
      body: "From alcoholic beverages and FMCG to technology, renewable energy and hospitality.",
      hex: "#E3C8BE", // blush
    },
  ];

  return (
    <section className="relative bg-ivory py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5">
            <p className="mono-label mb-3">§ Approach</p>
            <h2 className="display-2 text-espresso">
              An{" "}
              <span className="serif-italic">archival</span> view of the firm
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
            <p className="body-condensed text-charcoal max-w-md">
              A timeline of the firm&apos;s structure, practice and approach —
              set out as an archival record.
            </p>
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
                  <div
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ${
                      left ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    {/* marker */}
                    <span
                      className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-ivory z-10"
                      style={{ background: m.hex }}
                      aria-hidden="true"
                    />
                    {/* content card */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        left
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:col-start-2 [direction:ltr]"
                      }`}
                    >
                      <div className="inline-block bg-porcelain border border-line p-6 md:p-7 max-w-md [direction:ltr]">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            left ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="h-2 w-2 rounded-full" style={{ background: m.hex }} />
                          <span className="mono-label">{m.year}</span>
                        </div>
                        <h3 className="display-3 text-xl md:text-2xl text-espresso">{m.title}</h3>
                        <p className="mt-3 text-sm text-charcoal leading-relaxed">{m.body}</p>
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
