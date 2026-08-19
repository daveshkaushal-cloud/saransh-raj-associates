"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroVisual } from "@/components/site/hero-visual";
import { SectorGrid } from "@/components/site/sector-grid";
import { PeoplePreview } from "@/components/site/people-preview";
import { InsightsPreview } from "@/components/site/insights-preview";
import { SheetReveal, FadeUp, RuleDraw } from "@/components/motion/editorial";
import { useMountedReducedMotion } from "@/components/motion/use-mounted-reduced-motion";
import { firm, contact } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";

export default function HomePage() {
  const reduce = useMountedReducedMotion();

  return (
    <>
      {/* ============== HERO — dark two-column editorial opening ============== */}
      <section className="relative min-h-[100svh] flex flex-col bg-surface overflow-hidden">
        {/* subtle paper-grain texture */}
        <div
          className="grain pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        />

        {/* Top meta bar — document header */}
        <div className="relative z-20 mx-auto max-w-[1600px] w-full px-5 md:px-10 pt-6 md:pt-8">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="mono-label text-fg-muted">
              {firm.basedIn} · India
            </span>
            <span className="mono-label text-fg-subtle hidden sm:inline">
              Arguments in Colour
            </span>
            <span className="folio text-fg-subtle">001 / 018</span>
          </div>
        </div>

        {/* Hero grid: left text, right document visual */}
        <div className="relative z-10 flex-1 mx-auto max-w-[1600px] w-full px-5 md:px-10 pt-10 md:pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: editorial headline */}
            <div className="lg:col-span-7">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-6 md:mb-8">
                  CORPORATE &amp; COMMERCIAL LAW COUNSEL
                </p>
              </FadeUp>

              <h1
                className="display-mega text-fg"
                style={{ letterSpacing: "-0.04em" }}
              >
                <SheetReveal>
                  <span className="block">Corporate</span>
                </SheetReveal>
                <SheetReveal delay={0.08}>
                  <span className="block">
                    <span
                      className="serif-italic"
                      style={{ color: "var(--color-accent)" }}
                    >
                      &amp; Commercial
                    </span>
                  </span>
                </SheetReveal>
                <SheetReveal delay={0.16}>
                  <span className="block">Legal Counsel.</span>
                </SheetReveal>
              </h1>

              <FadeUp delay={0.24} className="mt-8 md:mt-10">
                <p className="lead max-w-xl text-fg-muted">
                  Saransh Raj &amp; Associates · New Delhi. A boutique law firm
                  advising on corporate and commercial law.
                </p>
              </FadeUp>

              <FadeUp delay={0.36} className="mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/firm"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-medium hover:bg-coral transition-colors duration-300"
                  >
                    <span className="mono-num text-[0.65rem] text-white/70 group-hover:text-white">
                      01
                    </span>
                    <span>The Firm</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  <Link
                    href="/expertise"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 border border-line-strong text-fg text-sm font-medium hover:border-fg hover:bg-surface-elevated transition-colors duration-300"
                  >
                    <span className="mono-num text-[0.65rem] text-fg-subtle group-hover:text-accent transition-colors">
                      02
                    </span>
                    <span>Expertise</span>
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Right: animated document layers */}
            <div className="lg:col-span-5 lg:pl-6">
              <motion.div
                className="relative h-[38vh] md:h-[52vh] lg:h-[60vh] w-full"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <HeroVisual />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip — office + founder */}
        <div className="relative z-10 border-t border-line bg-surface/80">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-4 flex flex-wrap items-center justify-between gap-3">
            <span className="mono-label text-fg-muted">
              {firm.establishedNote}
            </span>
            <Link
              href="/contact"
              className="mono-label text-fg-muted hover:text-accent link-underline transition-colors"
            >
              {contact.address.line2}
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PRACTICE-AREA INDEX BAR ============== */}
      <section className="bg-surface-soft text-fg py-3 md:py-4 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/expertise/${area.slug}`}
                className="group flex items-center gap-2.5 shrink-0"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: accentHex[area.accent] }}
                />
                <span className="mono-num text-[0.65rem] text-fg-subtle group-hover:text-fg transition-colors">
                  {area.index}
                </span>
                <span className="text-[0.82rem] text-fg-muted group-hover:text-fg transition-colors whitespace-nowrap">
                  {area.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== INTRODUCTION — editorial opening paragraph ============== */}
      <section className="relative bg-surface py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">§ Introduction</p>
                <p className="margin-note">
                  A boutique corporate &amp; commercial law firm.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9 md:pl-6">
              <FadeUp delay={0.1}>
                <h2 className="display-2 text-fg max-w-[18ch]">
                  Counsel for{" "}
                  <span className="serif-italic text-accent">companies</span>,{" "}
                  <span className="serif-italic text-coral">individuals</span> and{" "}
                  <span className="serif-italic text-violet">families</span>.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="lead mt-8 max-w-2xl text-fg-muted">
                  {firm.summary} {firm.purpose}
                </p>
              </FadeUp>
              <RuleDraw className="mt-10 max-w-md text-fg-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== EXPERTISE — interactive colour index ============== */}
      <PracticeIndex />

      {/* ============== SECTORS ============== */}
      <section className="bg-surface-soft py-20 md:py-32 relative overflow-hidden border-y border-line">
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <FadeUp>
                <p className="mono-label text-fg-muted mb-3">§ 03 · Sectors</p>
                <h2 className="display-2 max-w-[16ch] text-fg">
                  Sector knowledge across{" "}
                  <span className="serif-italic text-teal">India&apos;s</span>{" "}
                  dynamic industries
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <Link
                href="/sectors"
                className="group inline-flex items-center gap-2 mono-label text-fg hover:text-accent transition-colors"
              >
                <span>All sectors</span>
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
          <SectorGrid variant="scroller" />
        </div>
      </section>

      {/* ============== PRINCIPLES — colour-blocked manifesto ============== */}
      <PrinciplesBlock />

      {/* ============== PEOPLE PREVIEW ============== */}
      <section className="bg-surface py-20 md:py-32 border-t border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <FadeUp>
                <p className="mono-label text-fg-muted mb-3">§ 05 · People</p>
                <h2 className="display-2 max-w-[14ch] text-fg">
                  The <span className="serif-italic text-violet">people</span>{" "}
                  behind the counsel
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <Link
                href="/people"
                className="group inline-flex items-center gap-2 mono-label text-fg hover:text-accent transition-colors"
              >
                <span>All people</span>
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
          <PeoplePreview />
        </div>
      </section>

      {/* ============== INSIGHTS PREVIEW ============== */}
      <section className="bg-surface-soft text-fg py-20 md:py-32 relative overflow-hidden">
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <FadeUp>
                <p className="mono-label text-saffron mb-3">§ 06 · Insights</p>
                <h2 className="display-2 text-fg max-w-[16ch]">
                  Notes &amp; publications from the firm
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <Link
                href="/insights"
                className="group inline-flex items-center gap-2 mono-label text-fg-muted hover:text-saffron transition-colors"
              >
                <span>Insights index</span>
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
          <InsightsPreview />
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section className="bg-surface py-20 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-6">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">§ 07 · Contact</p>
                <h2 className="display-2 text-fg max-w-[14ch]">
                  Reach the{" "}
                  <span className="serif-italic text-coral">firm</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="lead mt-6 text-fg-muted max-w-md">
                  The firm welcomes enquiries about its work. Please use the
                  details below or the contact page to be in touch.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <FadeUp delay={0.15}>
                <div className="space-y-6">
                  <div>
                    <p className="mono-label text-fg-subtle mb-2">Address</p>
                    <p className="text-fg leading-relaxed">
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                      <br />
                      {contact.address.country}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="mono-label text-fg-subtle mb-2">Phone</p>
                      <a
                        href={contact.phoneHref}
                        className="link-underline text-fg hover:text-accent"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="mono-label text-fg-subtle mb-2">Email</p>
                      <a
                        href={contact.emailHref}
                        className="link-underline text-fg hover:text-accent break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mono-label text-fg-subtle mb-2">
                      Office hours
                    </p>
                    <p className="text-fg">{contact.hours}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-medium hover:bg-coral transition-colors duration-300"
                  >
                    <span>Visit contact page</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------
   Practice Index — colour-coded practice areas on the homepage
   --------------------------------------------------------------- */
function PracticeIndex() {
  return (
    <section className="relative bg-surface py-14 md:py-20 border-b border-line">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="md:col-span-8">
            <FadeUp>
              <p className="mono-label text-fg-muted mb-3">§ 02 · Expertise</p>
              <h2 className="display-2 max-w-[20ch] text-fg">
                A focused practice across{" "}
                <span className="serif-italic text-accent">corporate</span> &amp;{" "}
                <span className="serif-italic text-coral">commercial</span> law
              </h2>
            </FadeUp>
          </div>
          <div className="md:col-span-4 md:pl-4 lg:pl-6 md:self-end">
            <FadeUp delay={0.1}>
              <p className="body-condensed text-fg-muted max-w-sm">
                Six practice areas. Select an area to read its scope and
                services.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Practice-area list — editorial index with colour fields */}
        <div className="border-t border-line">
          {practiceAreas.map((area, i) => {
            const hex = accentHex[area.accent];
            return (
              <FadeUp key={area.slug} delay={i * 0.05}>
                <Link
                  href={`/expertise/${area.slug}`}
                  className="group relative grid grid-cols-12 gap-4 items-center py-5 md:py-6 border-b border-line hover:bg-surface-soft transition-colors"
                >
                  <span
                    className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-0"
                    style={{ background: hex, opacity: 0.12 }}
                    aria-hidden="true"
                  />
                  <span className="relative col-span-2 md:col-span-1 mono-num text-sm text-fg-subtle group-hover:text-fg transition-colors">
                    {area.index}
                  </span>
                  <span className="relative col-span-7 md:col-span-5">
                    <span className="font-display text-2xl md:text-4xl text-fg group-hover:text-fg transition-colors">
                      {area.title}
                    </span>
                  </span>
                  <span className="relative col-span-3 md:col-span-4 text-[0.8rem] md:text-sm text-fg-muted group-hover:text-fg transition-colors hidden sm:block">
                    {area.short}
                  </span>
                  <span className="relative col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: hex }}
                    />
                    <svg
                      className="h-5 w-5 text-fg-subtle group-hover:text-fg group-hover:translate-x-1 transition-all duration-300"
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
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   Principles — colour-blocked manifesto
   --------------------------------------------------------------- */
function PrinciplesBlock() {
  const principles = firm.principles;
  // Approved accessible accents: cobalt/coral/saffron/teal
  const colours = ["#4169FF", "#FF6B5C", "#F0A050", "#0FA98C"];
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => {
          const hex = colours[i % colours.length];
          // Saffron is light → dark text; others → white text
          const isLight = hex === "#F0A050";
          const onHex = isLight ? "#080D18" : "#FFFFFF";
          return (
            <FadeUp key={p.title} delay={i * 0.08}>
              <div
                className="relative h-full min-h-[16rem] p-8 md:p-10 flex flex-col justify-between border-r border-b border-line last:border-r-0"
                style={{ background: hex, color: onHex }}
              >
                <div className="flex items-start justify-between">
                  <span className="mono-num text-[0.7rem] opacity-70">
                    {String(i + 1).padStart(2, "0")} / 04
                  </span>
                  <span className="font-display text-5xl opacity-30 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-85 max-w-xs">
                    {p.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
