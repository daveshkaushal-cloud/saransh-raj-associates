import Link from "next/link";
import Image from "next/image";
import { firm, contact } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { sectors } from "@/data/sectors";
import { accentHex } from "@/lib/accents";

export default function HomePage() {
  return (
    <>
      {/* ============== HERO — warm ivory, compact, 4:5 image right ============== */}
      <section className="relative flex flex-col bg-ivory overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

        {/* Top meta bar */}
        <div className="relative z-20 mx-auto max-w-[1400px] w-full px-5 md:px-10 pt-6 md:pt-8">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="mono-label">{firm.basedIn} · India</span>
            <span className="mono-label hidden sm:inline">Corporate &amp; Commercial Law</span>
            <span className="folio">HOME</span>
          </div>
        </div>

        {/* Hero grid */}
        <div className="relative z-10 flex-1 mx-auto max-w-[1400px] w-full px-5 md:px-10 pt-10 md:pt-14 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: headline */}
            <div className="lg:col-span-7">
              <p className="mono-label mb-5 md:mb-6">
                Corporate &amp; Commercial Law Counsel
              </p>

              <h1 className="display-mega">
                <span className="block">Corporate &amp; Commercial</span>
                <span className="block">
                  <span className="serif-italic">Legal Counsel.</span>
                </span>
              </h1>

              <p className="lead mt-6 md:mt-8 measure">
                Saransh Raj &amp; Associates · New Delhi. A boutique law firm
                advising on corporate and commercial law.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/firm"
                  className="btn-magnetic group inline-flex items-center gap-2 px-5 py-3 bg-rose-dark text-white text-sm font-medium hover:bg-burgundy"
                >
                  <span className="mono-num text-white/70 group-hover:text-white">01</span>
                  <span>The Firm</span>
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/expertise"
                  className="btn-magnetic group inline-flex items-center gap-2 px-5 py-3 border border-line-strong text-espresso text-sm font-medium hover:border-rose-dark hover:text-rose-dark"
                >
                  <span className="mono-num text-stone group-hover:text-rose-dark">02</span>
                  <span>Expertise</span>
                </Link>
              </div>
            </div>

            {/* Right: architectural visual — 4:5, max 620px height, ~38% width */}
            <div className="lg:col-span-5 lg:pl-4">
              <div className="relative mx-auto" style={{ maxWidth: "min(100%, 480px)" }}>
                <div className="relative w-full overflow-hidden bg-beige" style={{ aspectRatio: "4 / 5", maxHeight: "620px" }}>
                  <Image
                    src="/images/hero-architecture-warm.jpg"
                    alt="Architectural detail reflecting the firm's New Delhi practice"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                    placeholder="empty"
                  />
                  {/* Rose-gold annotation overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                    <div className="h-3 w-3 border-l border-t border-rose" />
                    <span className="mono-label text-rose-dark">New Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="relative z-10 border-t border-line bg-ivory/80">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
            <span className="mono-label">{firm.establishedNote}</span>
            <Link href="/contact" className="mono-label hover:text-rose-dark link-underline">
              {contact.address.line2}
            </Link>
          </div>
        </div>
      </section>

      {/* ============== INTRODUCTION ============== */}
      <section className="relative bg-porcelain py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label mb-3">§ Introduction</p>
              <p className="margin-note">A boutique corporate &amp; commercial law firm.</p>
            </div>
            <div className="md:col-span-9 md:pl-6">
              <h2 className="display-2 measure">
                Counsel for companies, individuals and families.
              </h2>
              <p className="lead mt-6 md:mt-8 measure">
                {firm.summary} {firm.purpose}
              </p>
              <div className="mt-8 measure h-px bg-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRACTICE AREAS ============== */}
      <PracticeIndex />

      {/* ============== SELECTED SECTORS ============== */}
      <SelectedSectors />

      {/* ============== FIRM PRINCIPLES ============== */}
      <PrinciplesBlock />

      {/* ============== FOUNDER / PROFILE ============== */}
      <FounderPreview />

      {/* ============== CONTACT ============== */}
      <ContactPreview />
    </>
  );
}

/* ---------------------------------------------------------------
   Practice Index
   --------------------------------------------------------------- */
function PracticeIndex() {
  return (
    <section className="relative bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="md:col-span-8">
            <p className="mono-label mb-3">§ 02 · Expertise</p>
            <h2 className="display-2 measure">
              A focused practice across corporate &amp; commercial law
            </h2>
          </div>
          <div className="md:col-span-4 md:pl-4 lg:pl-6 md:self-end">
            <p className="body-condensed measure">
              Six practice areas. Select an area to read its scope and services.
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
                className="group relative grid grid-cols-12 gap-4 items-center py-4 md:py-5 border-b border-line hover:bg-porcelain transition-colors"
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-0"
                  style={{ background: hex, opacity: 0.05 }}
                  aria-hidden="true"
                />
                <span className="relative col-span-2 md:col-span-1 mono-num text-stone group-hover:text-espresso">
                  {area.index}
                </span>
                <span className="relative col-span-7 md:col-span-5">
                  <span className="font-display text-xl md:text-3xl text-espresso">
                    {area.title}
                  </span>
                </span>
                <span className="relative col-span-3 md:col-span-4 text-sm text-charcoal hidden sm:block">
                  {area.short}
                </span>
                <span className="relative col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: hex }} />
                  <svg className="h-5 w-5 text-stone group-hover:text-rose-dark group-hover:translate-x-1 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Selected Sectors — horizontal scroller
   --------------------------------------------------------------- */
function SelectedSectors() {
  const selected = sectors.slice(0, 6);
  return (
    <section className="bg-beige py-12 md:py-20 lg:py-24 relative overflow-hidden border-y border-line">
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <p className="mono-label mb-3">§ 03 · Sectors</p>
            <h2 className="display-2 measure">
              Sector knowledge across India&apos;s dynamic industries
            </h2>
          </div>
          <Link href="/sectors" className="btn-magnetic group inline-flex items-center gap-2 mono-label hover:text-rose-dark">
            <span>All sectors</span>
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 md:-mx-10 px-5 md:px-10 pb-3">
          {selected.map((sector, i) => {
            const hex = accentHex[sector.accent];
            return (
              <a
                key={sector.slug}
                href={`/sectors#${sector.slug}`}
                className="group relative block shrink-0 snap-start bg-porcelain border border-line overflow-hidden transition-colors duration-300 hover:border-rose-dark w-[75vw] sm:w-[40vw] md:w-[22rem] lg:w-[20rem]"
              >
                <div className="relative h-[11rem] md:h-[12rem] p-5 md:p-6 flex flex-col">
                  <span className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-1.5" style={{ background: hex }} aria-hidden="true" />
                  <div className="flex items-start justify-between">
                    <span className="mono-num text-stone">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                    <span className="h-2 w-2 rounded-full" style={{ background: hex }} aria-hidden="true" />
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display text-lg md:text-xl text-espresso leading-tight">
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
  );
}

/* ---------------------------------------------------------------
   Firm Principles
   --------------------------------------------------------------- */
function PrinciplesBlock() {
  const principles = firm.principles;
  return (
    <section className="relative bg-porcelain py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-10">
          <div className="md:col-span-5">
            <p className="mono-label mb-3">§ 04 · Principles</p>
            <h2 className="display-2 measure">
              What the firm stands for
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
            <p className="body-condensed measure">
              Four principles shape every engagement — from the first
              conversation through to the final document.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="relative bg-ivory border border-line p-5 md:p-6 flex flex-col justify-between min-h-[10rem]"
            >
              <div className="flex items-start justify-between">
                <span className="mono-num text-rose-dark">
                  {String(i + 1).padStart(2, "0")} / 04
                </span>
                <span className="font-display text-3xl text-blush leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-espresso">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal measure">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Founder / Profile preview
   --------------------------------------------------------------- */
function FounderPreview() {
  return (
    <section className="bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <p className="mono-label mb-3">§ 05 · People</p>
            <h2 className="display-2 measure">
              The founder
            </h2>
          </div>
          <Link href="/people" className="btn-magnetic group inline-flex items-center gap-2 mono-label hover:text-rose-dark">
            <span>All people</span>
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <Link href="/people/saransh-raj" className="group relative block bg-porcelain border border-line overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* SR monogram — elegant neutral editorial placeholder (no AI person) */}
            <div className="md:col-span-5 relative min-h-[16rem] md:min-h-[20rem] overflow-hidden bg-blush flex items-center justify-center">
              <Image
                src="/images/sr-monogram.png"
                alt="Saransh Raj monogram"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                <div className="h-3 w-3 border-l border-t border-rose-dark" />
                <span className="mono-label text-rose-dark">SR</span>
              </div>
            </div>
            {/* Details */}
            <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center">
              <span className="mono-label">Founder &amp; Principal Advocate</span>
              <h3 className="display-3 mt-3 text-espresso">Saransh Raj</h3>
              <p className="lead mt-4 measure">
                Advocate Saransh Raj is the founder and principal advocate of the
                firm, advising on corporate and commercial law.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-rose-dark transition-colors">
                <span>View profile</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Contact preview — burgundy with correct contrast
   --------------------------------------------------------------- */
function ContactPreview() {
  return (
    <section className="bg-burgundy py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-6">
            <p className="mono-label mb-4" style={{ color: "var(--color-on-burgundy-label)" }}>
              § 06 · Contact
            </p>
            <h2 className="display-2 measure" style={{ color: "var(--color-on-burgundy-heading)" }}>
              Reach the{" "}
              <span className="serif-italic-on-burgundy">firm</span>
            </h2>
            <p className="lead mt-6 measure" style={{ color: "var(--color-on-burgundy-body)" }}>
              The firm welcomes enquiries about its work. Please use the details
              below or the contact page to be in touch.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="space-y-5">
              <div>
                <p className="mono-label mb-2" style={{ color: "var(--color-on-burgundy-label)" }}>
                  Address
                </p>
                <p className="leading-relaxed" style={{ color: "var(--color-on-burgundy-body)" }}>
                  {contact.address.line1}<br />
                  {contact.address.line2}<br />
                  {contact.address.country}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p className="mono-label mb-2" style={{ color: "var(--color-on-burgundy-label)" }}>
                    Phone
                  </p>
                  <a
                    href={contact.phoneHref}
                    className="link-underline"
                    style={{ color: "var(--color-on-burgundy-body)" }}
                  >
                    {contact.phone}
                  </a>
                </div>
                <div>
                  <p className="mono-label mb-2" style={{ color: "var(--color-on-burgundy-label)" }}>
                    Email
                  </p>
                  <a
                    href={contact.emailHref}
                    className="link-underline break-words text-sm"
                    style={{ color: "var(--color-on-burgundy-body)", wordBreak: "keep-all", overflowWrap: "anywhere" }}
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              <div>
                <p className="mono-label mb-2" style={{ color: "var(--color-on-burgundy-label)" }}>
                  Office hours
                </p>
                <p style={{ color: "var(--color-on-burgundy-body)" }}>{contact.hours}</p>
              </div>
              <Link
                href="/contact"
                className="btn-magnetic group inline-flex items-center gap-2 px-5 py-3 bg-ivory text-espresso text-sm font-medium hover:bg-rose hover:text-white transition-colors duration-200"
              >
                <span>Visit contact page</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
