import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Expertise — Practice Areas",
  description:
    "Six practice areas of corporate and commercial law at Saransh Raj & Associates: Corporate Advisory, Commercial Contracts, Mergers & Acquisitions, Dispute Resolution, Regulatory & Compliance, and Insolvency & Recovery.",
  alternates: { canonical: "/expertise" },
};

/**
 * Expertise index — server component (static). Renders the hero, a colour
 * legend, and six individually-laid-out practice cards (the layout varies
 * per card to avoid a templated feel). The ExpertiseAccordion client
 * component remains available in the codebase for downstream use.
 */
export default function ExpertisePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone-dark">Index 02 · Expertise</span>
            <span className="folio text-stone-dark">02 / 07</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">Practice Areas</p>
              <p className="margin-note">
                Six areas, each colour-coded and individually authored.
                Select any area to read its full scope.
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-ink max-w-[14ch]">
                A focused{" "}
                <span className="serif-italic">index</span> of practice
              </h1>
              <p className="lead mt-6 md:mt-8 measure text-charcoal">
                The firm&apos;s practice is organised across six areas of
                corporate and commercial law. Each area below opens to a page
                written on its own terms — not to a template.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== COLOUR LEGEND ============== */}
      <section className="bg-ivory pt-8 md:pt-12 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-6 mb-2 border-b border-line">
            <span className="mono-label text-stone-dark">Legend</span>
            {practiceAreas.map((area) => (
              <a
                key={area.slug}
                href={`#${area.slug}`}
                className="flex items-center gap-2 group"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full transition-transform group-hover:scale-125"
                  style={{ background: accentHex[area.accent] }}
                  aria-hidden="true"
                />
                <span className="mono-label text-stone-dark group-hover:text-ink transition-colors">
                  {area.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PRACTICE CARDS — varied layouts ============== */}
      <section className="bg-ivory pb-12 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <PracticeCardCorporateAdvisory />
          <PracticeCardCommercialContracts />
          <PracticeCardMAndA />
          <PracticeCardDisputeResolution />
          <PracticeCardRegulatoryAndCompliance />
          <PracticeCardInsolvencyAndRecovery />
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------
   Shared card chrome — accent dot + mono-label header strip.
   --------------------------------------------------------------- */
function CardHeaderStrip({
  area,
  hex,
  variant,
}: {
  area: (typeof practiceAreas)[number];
  hex: string;
  variant: "even" | "odd";
}) {
  return (
    <div
      className={`flex items-center justify-between border-t border-line pt-5 mb-6 ${
        variant === "odd" ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div className={`flex items-center gap-3 ${variant === "odd" ? "flex-row-reverse" : ""}`}>
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: hex }}
          aria-hidden="true"
        />
        <span className="mono-label text-stone-dark">
          Practice Area · {area.index}
        </span>
      </div>
      <span className="mono-num text-stone-dark">
        {area.index} / 06
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------
   01 — Corporate Advisory
   Full-bleed left rail with oversized accent number; content
   arranged to the right in a stacked column. Services as an
   annotated list with mono-num markers.
   --------------------------------------------------------------- */
function PracticeCardCorporateAdvisory() {
  const area = practiceAreas[0];
  const hex = accentHex[area.accent];
  return (
    <article
      id={area.slug}
      className="relative scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 py-10 md:py-14 border-b border-line"
    >
      {/* left rail — oversized accent number */}
      <div className="md:col-span-3">
        <CardHeaderStrip area={area} hex={hex} variant="even" />
        <span
          className="font-display leading-none select-none block"
          style={{ fontSize: "clamp(5rem, 8vw, 8rem)", color: hex, opacity: 0.85 }}
          aria-hidden="true"
        >
          {area.index}
        </span>
        <p className="margin-note mt-4 max-w-[28ch]">
          Entity formation, governance, restructuring — the corporate spine of a business.
        </p>
      </div>

      {/* right column — title, summary, services */}
      <div className="md:col-span-9">
        <h2 className="display-2 text-ink max-w-[16ch]">{area.title}</h2>
        <p className="lead mt-4 max-w-2xl text-charcoal measure">
          Structuring, governance and ongoing advisory across the business
          lifecycle — from entity formation and shareholder arrangements
          through to board governance, regulatory compliance and corporate
          restructuring.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-px">
          {area.services.map((s, i) => (
            <div
              key={s}
              className="flex items-baseline gap-4 py-3 border-t border-line"
            >
              <span className="mono-num text-stone-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-base md:text-lg text-ink">
                {s}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={`/expertise/${area.slug}`}
            className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
          >
            <span>Read the area</span>
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
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------
   02 — Commercial Contracts
   Stacked layout with accent rule on top; services rendered as
   a horizontal comma-separated key-areas string. Title at full
   width with a strong summary below.
   --------------------------------------------------------------- */
function PracticeCardCommercialContracts() {
  const area = practiceAreas[1];
  const hex = accentHex[area.accent];
  return (
    <article
      id={area.slug}
      className="relative scroll-mt-24 py-10 md:py-14 border-b border-line"
    >
      <CardHeaderStrip area={area} hex={hex} variant="odd" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 md:col-start-3 text-center md:text-left">
          <h2 className="display-2 text-ink max-w-[20ch] mx-auto md:mx-0">
            {area.title}
          </h2>
          <p
            className="mt-4 font-display text-xl md:text-2xl italic leading-snug max-w-2xl mx-auto md:mx-0"
            style={{ color: hex }}
          >
            Contracts are business architecture.
          </p>
          <p className="lead mt-5 max-w-2xl text-charcoal measure mx-auto md:mx-0">
            Drafting and review of commercial agreements — supply,
            distribution, service, licensing and technology contracts —
            with attention to scope, risk allocation, enforceability and
            commercial alignment.
          </p>
        </div>
      </div>

      {/* key areas — inline chips */}
      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 md:pl-[calc(16.666%)]">
        <span className="mono-label text-stone-dark">Key areas</span>
        {area.services.map((s) => (
          <span
            key={s}
            className="mono-label border border-line px-3 py-1.5 text-stone-dark"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-8 md:pl-[calc(16.666%)]">
        <Link
          href={`/expertise/${area.slug}`}
          className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
        >
          <span>Read the area</span>
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
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------
   03 — Mergers & Acquisitions
   Reverse-split layout — accent number watermark right,
   content left. Transaction-focused language.
   --------------------------------------------------------------- */
function PracticeCardMAndA() {
  const area = practiceAreas[2];
  const hex = accentHex[area.accent];
  return (
    <article
      id={area.slug}
      className="relative scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 py-10 md:py-14 border-b border-line"
    >
      {/* content (left) */}
      <div className="md:col-span-8 md:order-1 order-2">
        <CardHeaderStrip area={area} hex={hex} variant="even" />
        <h2 className="display-2 text-ink max-w-[16ch]">{area.title}</h2>
        <p className="lead mt-4 max-w-2xl text-charcoal measure">
          Transaction structuring, documentation and due diligence across
          the M&amp;A lifecycle — from initial structuring and legal due
          diligence through to negotiation, regulatory approvals and
          post-closing integration.
        </p>

        <ol className="mt-8 space-y-px">
          {area.services.map((s, i) => (
            <li
              key={s}
              className="grid grid-cols-12 gap-4 items-baseline py-3 border-t border-line"
            >
              <span
                className="col-span-2 md:col-span-1 mono-num"
                style={{ color: hex }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 md:col-span-11 font-display text-base md:text-lg text-ink">
                {s}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <Link
            href={`/expertise/${area.slug}`}
            className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
          >
            <span>Read the area</span>
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
        </div>
      </div>

      {/* watermark number (right) */}
      <div className="md:col-span-4 md:order-2 order-1 relative">
        <span
          className="font-display leading-none select-none block md:absolute md:right-0 md:top-0"
          style={{ fontSize: "clamp(7rem, 12vw, 13rem)", color: hex, opacity: 0.18 }}
          aria-hidden="true"
        >
          {area.index}
        </span>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------
   04 — Dispute Resolution
   Compact three-column treatment — narrow left rail
   (number + label), middle column (summary),
   right column (services as a tight definition-list).
   --------------------------------------------------------------- */
function PracticeCardDisputeResolution() {
  const area = practiceAreas[3];
  const hex = accentHex[area.accent];
  return (
    <article
      id={area.slug}
      className="relative scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 border-b border-line"
    >
      <div className="md:col-span-12">
        <CardHeaderStrip area={area} hex={hex} variant="even" />
      </div>

      {/* left rail — number + label */}
      <div className="md:col-span-3">
        <span
          className="font-display leading-none select-none block"
          style={{ fontSize: "clamp(4rem, 6vw, 6rem)", color: hex }}
          aria-hidden="true"
        >
          {area.index}
        </span>
        <p className="mono-label mt-4" style={{ color: hex }}>
          Litigation &amp; Arbitration
        </p>
      </div>

      {/* middle — title + summary */}
      <div className="md:col-span-5">
        <h2 className="display-2 text-ink max-w-[12ch]">{area.title}</h2>
        <p className="lead mt-4 text-charcoal measure">
          Commercial litigation and arbitration — representation in
          commercial disputes before arbitrations, the National Company
          Law Tribunal and the commercial courts, with attention to
          efficient resolution and the preservation of commercial
          positions.
        </p>
        <div className="mt-6">
          <Link
            href={`/expertise/${area.slug}`}
            className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
          >
            <span>Read the area</span>
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
        </div>
      </div>

      {/* right — services definition list */}
      <div className="md:col-span-4">
        <p className="mono-label text-stone-dark mb-3">Scope</p>
        <dl className="space-y-3">
          {area.services.map((s, i) => (
            <div
              key={s}
              className="grid grid-cols-12 gap-3 items-baseline border-t border-line pt-3"
            >
              <dt
                className="col-span-2 mono-num"
                style={{ color: hex }}
              >
                {String(i + 1).padStart(2, "0")}
              </dt>
              <dd className="col-span-10 text-sm text-charcoal">{s}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------
   05 — Regulatory & Compliance
   Numbered manifesto block — title flush left, then a 4-up
   grid of key areas with accent rule on each.
   --------------------------------------------------------------- */
function PracticeCardRegulatoryAndCompliance() {
  const area = practiceAreas[4];
  const hex = accentHex[area.accent];
  return (
    <article
      id={area.slug}
      className="relative scroll-mt-24 py-10 md:py-14 border-b border-line"
    >
      <CardHeaderStrip area={area} hex={hex} variant="odd" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 md:col-start-8 md:order-2">
          <span
            className="font-display leading-none select-none block text-right md:text-left"
            style={{ fontSize: "clamp(5rem, 7vw, 7rem)", color: hex, opacity: 0.55 }}
            aria-hidden="true"
          >
            {area.index}
          </span>
        </div>
        <div className="md:col-span-7 md:order-1">
          <h2 className="display-2 text-ink max-w-[14ch]">{area.title}</h2>
          <p className="lead mt-4 max-w-2xl text-charcoal measure">
            Business and sector-specific regulatory advice — support in
            understanding and complying with applicable laws and
            regulations, from SEBI and RBI frameworks to sector-specific
            compliance, with a proactive approach that seeks to identify
            risk before it becomes liability.
          </p>
        </div>
      </div>

      {/* key areas — 4-up grid with accent top rule */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
        {area.services.map((s, i) => (
          <div key={s} className="bg-ivory p-5 md:p-6">
            <span
              className="block h-px w-10 mb-4"
              style={{ background: hex }}
              aria-hidden="true"
            />
            <span
              className="mono-num block mb-2"
              style={{ color: hex }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-display text-base md:text-lg text-ink leading-snug">
              {s}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={`/expertise/${area.slug}`}
          className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
        >
          <span>Read the area</span>
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
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------
   06 — Insolvency & Recovery
   Centered narrow column, large accent index in background.
   Services as numbered marginal annotations.
   --------------------------------------------------------------- */
function PracticeCardInsolvencyAndRecovery() {
  const area = practiceAreas[5];
  const hex = accentHex[area.accent];
  return (
    <article
      id={area.slug}
      className="relative scroll-mt-24 py-10 md:py-14"
    >
      <CardHeaderStrip area={area} hex={hex} variant="even" />

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* watermark number */}
        <span
          className="absolute top-0 right-0 font-display leading-none select-none pointer-events-none hidden md:block"
          style={{ fontSize: "clamp(8rem, 14vw, 16rem)", color: hex, opacity: 0.1 }}
          aria-hidden="true"
        >
          {area.index}
        </span>

        <div className="md:col-span-7">
          <h2 className="display-2 text-ink max-w-[14ch]">{area.title}</h2>
          <p className="lead mt-4 max-w-2xl text-charcoal measure">
            Insolvency proceedings and recovery matters — advice to
            creditors, debtors and resolution professionals on
            proceedings under the Insolvency and Bankruptcy Code, from
            initiating proceedings to resolution plan negotiations and
            asset recovery.
          </p>
        </div>

        <div className="md:col-span-5 md:col-start-8 relative">
          <p className="mono-label text-stone-dark mb-3">Scope</p>
          <ol className="space-y-2">
            {area.services.map((s, i) => (
              <li
                key={s}
                className="grid grid-cols-12 gap-3 items-baseline py-2 border-t border-line"
              >
                <span
                  className="col-span-2 mono-num"
                  style={{ color: hex }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 text-sm text-charcoal">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href={`/expertise/${area.slug}`}
          className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
        >
          <span>Read the area</span>
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
      </div>
    </article>
  );
}
