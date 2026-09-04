import Link from "next/link";
import Image from "next/image";
import { firm, contact } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { sectors } from "@/data/sectors";
import { people } from "@/data/people";
import {
  getFeaturedPerspective,
  getLatestPerspectives,
} from "@/data/perspectives";
import { accentHex } from "@/lib/accents";

export default function HomePage() {
  const founder = people[0];
  const featured = getFeaturedPerspective();
  const latest = getLatestPerspectives(3);
  const selectedSectors = sectors.slice(0, 6);

  return (
    <>
      {/* ============== SECTION 01 — OPENING (HERO) ============== */}
      <section className="relative flex flex-col bg-ivory overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

        {/* Top meta bar */}
        <div className="relative z-20 mx-auto max-w-[1400px] w-full px-5 md:px-10 pt-6 md:pt-8">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="mono-label">{firm.basedIn} · India</span>
            <span className="mono-label hidden sm:inline">
              Corporate &amp; Commercial Law
            </span>
          </div>
        </div>

        {/* Hero grid */}
        <div className="relative z-10 flex-1 mx-auto max-w-[1400px] w-full px-5 md:px-10 pt-10 md:pt-14 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: headline */}
            <div className="lg:col-span-7">
              <p className="mono-label mb-5 md:mb-6">
                Corporate &amp; Commercial Legal Practice
              </p>

              <h1 className="display-mega">
                <span className="block">Legal counsel shaped</span>
                <span className="block">around business, risk</span>
                <span className="block">
                  and <span className="serif-italic">consequence</span>
                  <span className="text-ink">.</span>
                </span>
              </h1>

              <p className="lead mt-6 md:mt-8 measure">
                Saransh Raj &amp; Associates is a New Delhi–based corporate and
                commercial legal practice advising businesses, individuals and
                family-led enterprises across transactional, regulatory and
                dispute-related matters.
              </p>

              {/* Subtle navigation — three editorial pointers */}
              <nav
                aria-label="Sections"
                className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3"
              >
                <Link
                  href="/firm"
                  className="btn-magnetic group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
                >
                  <span className="mono-num text-copper">01</span>
                  <span>The Firm</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
                <Link
                  href="/expertise"
                  className="btn-magnetic group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
                >
                  <span className="mono-num text-copper">02</span>
                  <span>Expertise</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
                <Link
                  href="/perspectives"
                  className="btn-magnetic group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
                >
                  <span className="mono-num text-copper">03</span>
                  <span>Perspectives</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
              </nav>
            </div>

            {/* Right: architectural visual — 4:5, max 620px height */}
            <div className="lg:col-span-5 lg:pl-4">
              <div
                className="relative mx-auto"
                style={{ maxWidth: "min(100%, 480px)" }}
              >
                <div
                  className="relative w-full overflow-hidden bg-beige"
                  style={{ aspectRatio: "4 / 5", maxHeight: "620px" }}
                >
                  <Image
                    src="/images/practice-study-v2.webp"
                    alt="A refined legal study with mahogany bookshelves, working files and brass balance scales"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                    placeholder="empty"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="relative z-10 border-t border-line bg-paper">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
            <span className="mono-label">{firm.establishedNote}</span>
            <Link
              href="/contact"
              className="mono-label hover:text-copper link-underline"
            >
              {contact.address.line2}
            </Link>
          </div>
        </div>
      </section>

      {/* ============== SECTION 02 — THE FIRM ============== */}
      <section className="relative bg-sagewash py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label mb-3">§ 01 · The Firm</p>
              <p className="margin-note">
                A founder-led practice. New Delhi, India.
              </p>
            </div>
            <div className="md:col-span-9 md:pl-6">
              <h2 className="display-2 measure">Law rarely exists in isolation.</h2>
              <div className="mt-6 md:mt-8 space-y-5 measure">
                <p className="lead text-charcoal">
                  A decision to incorporate, to sign a distribution agreement, to
                  take on a strategic investor, to terminate a contract, or to
                  enforce a security is, on the surface, a single legal act.
                  Beneath the surface, each one touches regulation, governance,
                  ownership, the contracts already in force, the business&apos;s
                  exposure to dispute, and the long-term shape of the enterprise
                  itself. A clause drafted without context can become a liability;
                  a structure chosen without foresight can constrain a future
                  transaction.
                </p>
                <p className="body-condensed text-charcoal">
                  The firm&apos;s working method begins with the circumstances in
                  which the legal question has arisen — the commercial objective,
                  the regulatory environment, the people involved and the timeline
                  within which the business actually has to operate. Only then
                  does the work move to analysis, to strategy, and to the
                  documentation, negotiation or representation that the matter
                  requires. Law is most useful when it is grounded in the realities
                  of the people and the business it serves.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="/firm"
                  className="btn-magnetic group inline-flex items-center gap-2 mono-label text-charcoal hover:text-copper transition-colors"
                >
                  <span>Read about the firm</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
          </div>
        </div>
      </section>

      {/* ============== SECTION 03 — EXPERTISE ============== */}
      <section className="relative bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="md:col-span-8">
              <p className="mono-label mb-3">§ 02 · Expertise</p>
              <h2 className="display-2 measure">
                Six practice areas across the corporate and commercial spectrum
              </h2>
            </div>
            <div className="md:col-span-4 md:pl-4 lg:pl-6 md:self-end">
              <p className="body-condensed measure">
                Work is organised across six practice areas — each engaging
                several of the others on most matters. Select an area to read its
                scope and services.
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
                  className="group relative grid grid-cols-12 gap-4 items-start py-5 md:py-6 border-b border-line hover:bg-ivory transition-colors"
                >
                  <span
                    className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-0"
                    style={{ background: hex, opacity: 0.05 }}
                    aria-hidden="true"
                  />
                  <span className="relative col-span-2 md:col-span-1 mono-num text-stone-dark group-hover:text-ink">
                    {area.index}
                  </span>
                  <div className="relative col-span-10 md:col-span-4">
                    <span className="font-display text-xl md:text-2xl text-ink">
                      {area.title}
                    </span>
                  </div>
                  <p className="relative col-span-12 md:col-span-6 text-sm leading-relaxed text-charcoal measure">
                    {area.overview}
                  </p>
                  <span className="relative col-span-12 md:col-span-1 flex md:justify-end items-start gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: hex }}
                      aria-hidden="true"
                    />
                    <svg
                      className="h-5 w-5 text-stone-dark group-hover:text-copper group-hover:translate-x-1 transition-all duration-200"
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

      {/* ============== SECTION 04 — FEATURED PERSPECTIVE ============== */}
      <section className="relative bg-rosewash py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3">
              <p className="mono-label mb-3">§ 03 · Featured Perspective</p>
              <p className="margin-note">
                An explanatory note from the firm&apos;s working archive.
              </p>
            </div>
            <div className="md:col-span-9 md:pl-6">
              <Link
                href={`/perspectives/${featured.slug}`}
                className="group block"
              >
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="mono-label text-copper">{featured.type}</span>
                  <span className="mono-num text-stone-dark">
                    {featured.dateLabel}
                  </span>
                  <span className="mono-label text-stone-dark">
                    · {featured.practiceLabel}
                  </span>
                </div>
                <h2 className="display-3 text-ink max-w-[24ch] group-hover:text-oxblood transition-colors">
                  {featured.title}
                </h2>
                <p className="lead mt-5 measure text-charcoal">
                  {featured.abstract}
                </p>
                <div className="mt-6 flex items-center gap-2 mono-label text-charcoal group-hover:text-copper transition-colors">
                  <span>Read the note</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SECTION 05 — SECTORS ============== */}
      <section className="bg-bluewash py-12 md:py-20 lg:py-24 relative overflow-hidden border-y border-line">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
            <div>
              <p className="mono-label mb-3">§ 04 · Sectors</p>
              <h2 className="display-2 measure">
                Sector experience across India&apos;s commercial landscape
              </h2>
            </div>
            <Link
              href="/sectors"
              className="btn-magnetic group inline-flex items-center gap-2 mono-label hover:text-copper"
            >
              <span>All sectors</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

          <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 md:-mx-10 px-5 md:px-10 pb-3">
            {selectedSectors.map((sector, i) => {
              const hex = accentHex[sector.accent];
              return (
                <a
                  key={sector.slug}
                  href={`/sectors#${sector.slug}`}
                  className="group relative block shrink-0 snap-start bg-ivory border border-line overflow-hidden transition-colors duration-300 hover:border-copper w-[75vw] sm:w-[40vw] md:w-[22rem] lg:w-[20rem]"
                >
                  <div className="relative h-[11rem] md:h-[12rem] p-5 md:p-6 flex flex-col">
                    <span
                      className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-1.5"
                      style={{ background: hex }}
                      aria-hidden="true"
                    />
                    <div className="flex items-start justify-between">
                      <span className="mono-num text-stone-dark">
                        {String(i + 1).padStart(2, "0")} / 10
                      </span>
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: hex }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-display text-lg md:text-xl text-ink leading-tight">
                        {sector.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal line-clamp-2">
                        {sector.note}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== SECTION 06 — APPROACH ============== */}
      <section className="relative bg-sandwash py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-12">
            <div className="md:col-span-5">
              <p className="mono-label mb-3">§ 05 · Approach</p>
              <h2 className="display-2 measure">How we approach a matter</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <p className="body-condensed measure">
                Each engagement moves through four stages — from understanding the
                context to executing the strategy. The sequence is structured; the
                work within each stage is shaped by the matter at hand.
              </p>
            </div>
          </div>

          <div className="border-t border-line">
            {firm.approach.map((stage) => (
              <div
                key={stage.number}
                className="group relative grid grid-cols-12 gap-4 items-start py-6 md:py-7 border-b border-line"
              >
                <span className="col-span-2 md:col-span-1 mono-num text-stone-dark">
                  {stage.number}
                </span>
                <div className="col-span-10 md:col-span-3">
                  <h3 className="font-display text-xl md:text-2xl text-ink">
                    {stage.title}
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-7 text-sm md:text-base leading-relaxed text-charcoal md:pl-6">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SECTION 07 — FOUNDER ============== */}
      <section className="bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
            <div>
              <p className="mono-label mb-3">§ 06 · People</p>
              <h2 className="display-2 measure">The founder</h2>
            </div>
            <Link
              href="/people"
              className="btn-magnetic group inline-flex items-center gap-2 mono-label hover:text-copper"
            >
              <span>All people</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

          <Link
            href={`/people/${founder.slug}`}
            className="group relative block bg-ivory border border-line overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Founder portrait */}
              <div className="md:col-span-5 relative min-h-[16rem] md:min-h-[20rem] overflow-hidden bg-blush flex items-center justify-center">
                <Image
                  src="/images/saransh-raj-landscape.webp"
                  alt={`Portrait of ${founder.name}, Founder and Principal Advocate`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Details */}
              <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                <span className="mono-label">{founder.role}</span>
                <h3 className="display-3 mt-3 text-ink">{founder.name}</h3>
                <p className="lead mt-4 measure text-charcoal">
                  {founder.summary}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-copper transition-colors">
                  <span>View profile</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============== SECTION 08 — LATEST PERSPECTIVES ============== */}
      <section className="bg-sagewash py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
            <div>
              <p className="mono-label mb-3">§ 07 · Perspectives</p>
              <h2 className="display-2 measure">Latest perspectives</h2>
            </div>
            <Link
              href="/perspectives"
              className="btn-magnetic group inline-flex items-center gap-2 mono-label hover:text-copper"
            >
              <span>All perspectives</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

          <div className="border-t border-line">
            {latest.map((article) => (
              <Link
                key={article.slug}
                href={`/perspectives/${article.slug}`}
                className="group relative grid grid-cols-12 gap-4 items-start py-6 md:py-8 border-b border-line hover:bg-paper transition-colors"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="mono-label text-copper">{article.type}</span>
                  <span className="mono-num block text-stone-dark mt-2">
                    {article.dateLabel}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h3 className="font-display text-xl md:text-2xl text-ink leading-tight group-hover:text-oxblood transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal measure line-clamp-3">
                    {article.abstract}
                  </p>
                  <p className="mt-3 mono-label text-stone-dark">
                    {article.practiceLabel}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-2 flex md:justify-end items-start gap-2">
                  <span className="mono-label text-stone-dark">
                    {article.readTime}
                  </span>
                  <svg
                    className="h-5 w-5 text-stone-dark group-hover:text-copper group-hover:translate-x-1 transition-all duration-200"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SECTION 09 — NEW DELHI ============== */}
      <section className="bg-oxblood py-12 md:py-20 lg:py-24 relative overflow-hidden border-y border-line-on-dark">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              <p
                className="mono-label mb-4"
                style={{ color: "var(--color-on-burgundy-label)" }}
              >
                § 08 · New Delhi
              </p>
              <h2
                className="display-2 measure"
                style={{ color: "var(--color-on-burgundy-heading)" }}
              >
                Practising from New Delhi
              </h2>
              <p
                className="lead mt-6 measure"
                style={{ color: "var(--color-on-burgundy-body)" }}
              >
                The firm is based in Kalkaji, in the south of New Delhi, and
                serves clients across India. New Delhi is the seat of the Supreme
                Court of India, the High Court of Delhi, the National Company Law
                Tribunal and a concentration of regulatory authorities — a
                location that places the firm within reach of the forums where
                much of India&apos;s commercial law is shaped and enforced.
              </p>
              <p
                className="body-condensed mt-5 measure"
                style={{ color: "var(--color-on-burgundy-body)" }}
              >
                Engagements are taken on at the firm&apos;s office in Kalkaji and,
                where the matter requires, before the relevant court, tribunal or
                regulatory authority.
              </p>
            </div>
            <div className="md:col-span-5">
              <div
                className="relative w-full overflow-hidden bg-ink"
                style={{ aspectRatio: "4 / 5", maxHeight: "540px" }}
              >
                <Image
                  src="/images/new-delhi-office.webp"
                  alt="Institutional sandstone architecture and landscaped grounds in New Delhi"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SECTION 10 — CONTACT ============== */}
      <section className="bg-rosewash py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-6">
              <p className="mono-label mb-4">§ 09 · Contact</p>
              <h2 className="display-2 measure">Begin a professional enquiry.</h2>
              <p className="lead mt-6 measure text-charcoal">
                Engagements are formed upon a formal retainer. To discuss a
                matter, please write to the office or call during working hours;
                the firm will respond with the next steps and, where appropriate,
                a basis on which it can be engaged.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="btn-magnetic group inline-flex items-center gap-2 px-5 py-3 bg-oxblood text-ivory text-sm font-medium hover:bg-ink"
                >
                  <span>Visit contact page</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <div className="space-y-5">
                <div>
                  <p className="mono-label mb-2">Address</p>
                  <p className="leading-relaxed text-ink">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.country}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <p className="mono-label mb-2">Phone</p>
                    <a
                      href={contact.phoneHref}
                      className="link-underline text-ink"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div>
                    <p className="mono-label mb-2">Email</p>
                    <a
                      href={contact.emailHref}
                      className="link-underline break-words text-sm"
                      style={{
                        wordBreak: "keep-all",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mono-label mb-2">Office hours</p>
                  <p className="text-ink">{contact.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
