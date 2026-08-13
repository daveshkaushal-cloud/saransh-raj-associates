"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "@/components/site/hero-visual";
import { HorizontalExpertise } from "@/components/site/horizontal-expertise";
import { SectorGrid } from "@/components/site/sector-grid";
import { PhilosophyNarrative } from "@/components/site/philosophy-narrative";
import { PeoplePreview } from "@/components/site/people-preview";
import { InsightsPreview } from "@/components/site/insights-preview";
import { MaskReveal, Rise } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { firm, contact } from "@/data/firm";

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-ivory">
        <div className="absolute inset-0 line-grid opacity-70" aria-hidden="true" />
        <div className="absolute inset-0 grain" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-5 md:px-10 pt-28 md:pt-32">
          <motion.p
            className="eyebrow text-ink/55 mb-6 md:mb-10"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {firm.basedIn} · Corporate &amp; Commercial Law
          </motion.p>

          <h1 className="display-1 text-ink max-w-[18ch]">
            <MaskReveal as="span" delay={0.05}>
              <span className="block">Living legal</span>
            </MaskReveal>
            <MaskReveal as="span" delay={0.16}>
              <span className="block">
                <span className="italic text-vermilion">intelligence</span>
                <span className="text-ink">.</span>
              </span>
            </MaskReveal>
          </h1>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <motion.p
              className="md:col-span-5 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {firm.descriptor}
            </motion.p>

            <motion.div
              className="md:col-span-4 md:col-start-9 flex flex-wrap gap-3"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <Magnetic strength={0.25}>
                <Link
                  href="/firm"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-ivory text-sm font-medium hover:bg-cobalt transition-colors duration-300"
                >
                  <span>The Firm</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink/25 text-ink text-sm font-medium hover:border-ink hover:bg-ink/[0.03] transition-colors duration-300"
                >
                  Expertise
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Hero visual */}
        <motion.div
          className="relative z-0 mt-10 md:mt-0 h-[36vh] md:h-[42vh] w-full"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>

        {/* Bottom meta strip */}
        <div className="relative z-10 border-t border-line bg-ivory/70 backdrop-blur-sm">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-4 flex flex-wrap items-center justify-between gap-3 text-[0.72rem] text-ink/55">
            <span className="font-medium tracking-wide uppercase">
              {firm.establishedNote}
            </span>
            <span className="hidden sm:inline">
              Serving across {firm.servesAcross}
            </span>
            <Link href="/contact" className="link-underline text-ink/70 hover:text-ink">
              {contact.address.line2}
            </Link>
          </div>
        </div>
      </section>

      {/* ============== INTRODUCTION ============== */}
      <section className="bg-ivory py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <Rise>
                <p className="eyebrow mb-4">Introduction</p>
                <p className="text-sm text-ink/50">
                  A boutique corporate &amp; commercial law firm.
                </p>
              </Rise>
            </div>
            <div className="md:col-span-8 md:pl-6">
              <Rise delay={0.1}>
                <h2 className="display-2 text-ink max-w-[20ch]">
                  Considered counsel for companies, individuals and families.
                </h2>
              </Rise>
              <Rise delay={0.2}>
                <p className="mt-8 text-lg md:text-xl leading-relaxed text-ink/70 max-w-2xl">
                  {firm.summary} The firm was established to provide the same
                  quality of corporate legal counsel typically reserved for large
                  institutions — combining deep legal expertise with a genuine
                  understanding of clients&apos; commercial realities.
                </p>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* ============== HORIZONTAL EXPERTISE ============== */}
      <HorizontalExpertise />

      {/* ============== SECTORS ============== */}
      <section className="bg-paper py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dotted-grid opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Rise>
                <p className="eyebrow mb-3">Sectors</p>
                <h2 className="display-2 max-w-[16ch]">
                  Sector knowledge across India&apos;s dynamic industries
                </h2>
              </Rise>
            </div>
            <Rise delay={0.1}>
              <Link
                href="/sectors"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span>All sectors</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Rise>
          </div>
          <SectorGrid variant="scroller" />
        </div>
      </section>

      {/* ============== PHILOSOPHY NARRATIVE ============== */}
      <PhilosophyNarrative />

      {/* ============== PRINCIPLES ============== */}
      <section className="bg-ivory py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <Rise>
                <p className="eyebrow mb-3">Principles</p>
                <h2 className="display-2">What the firm stands for</h2>
              </Rise>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6">
              <Rise delay={0.1}>
                <p className="text-base md:text-lg text-ink/65 leading-relaxed">
                  Four principles shape every engagement — from the first
                  conversation through to the final document.
                </p>
              </Rise>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {firm.principles.map((p, i) => {
              const accents = ["#3157FF", "#FF574D", "#FFB21A", "#8A65FF"];
              const hex = accents[i % accents.length];
              return (
                <Rise key={p.title} delay={i * 0.08}>
                  <div className="group relative bg-paper border border-line p-7 min-h-[14rem] flex flex-col overflow-hidden">
                    <div
                      className="absolute -top-6 -right-2 font-display text-[6rem] leading-none text-ink/[0.05] select-none"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="h-2.5 w-2.5 rounded-full mb-6"
                      style={{ background: hex }}
                    />
                    <h3 className="display-3 text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm text-ink/60 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== PEOPLE PREVIEW ============== */}
      <section className="bg-paper py-20 md:py-32 border-t border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Rise>
                <p className="eyebrow mb-3">People</p>
                <h2 className="display-2 max-w-[14ch]">
                  The people behind the counsel
                </h2>
              </Rise>
            </div>
            <Rise delay={0.1}>
              <Link
                href="/people"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span>All people</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Rise>
          </div>
          <PeoplePreview />
        </div>
      </section>

      {/* ============== INSIGHTS PREVIEW ============== */}
      <section className="bg-ivory py-20 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Rise>
                <p className="eyebrow mb-3">Insights</p>
                <h2 className="display-2 max-w-[16ch]">
                  Notes &amp; publications from the firm
                </h2>
              </Rise>
            </div>
            <Rise delay={0.1}>
              <Link
                href="/insights"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span>Insights index</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Rise>
          </div>
          <InsightsPreview />
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section className="bg-ink text-ivory py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-grad opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 grain" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-6">
              <Rise>
                <p className="eyebrow text-mint mb-4">Contact · Offices</p>
                <h2 className="display-2 text-ivory max-w-[14ch]">
                  Reach the firm
                </h2>
              </Rise>
              <Rise delay={0.1}>
                <p className="mt-6 text-lg text-ivory/70 max-w-md leading-relaxed">
                  The firm welcomes enquiries about its work. Please use the
                  details below or the contact page to be in touch.
                </p>
              </Rise>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <Rise delay={0.15}>
                <div className="space-y-6">
                  <div>
                    <p className="eyebrow text-ivory/45 mb-2">Address</p>
                    <p className="text-ivory/85 leading-relaxed">
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                      <br />
                      {contact.address.country}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="eyebrow text-ivory/45 mb-2">Phone</p>
                      <a href={contact.phoneHref} className="link-underline text-ivory/85 hover:text-ivory">
                        {contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="eyebrow text-ivory/45 mb-2">Email</p>
                      <a href={contact.emailHref} className="link-underline text-ivory/85 hover:text-ivory break-all">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow text-ivory/45 mb-2">Office hours</p>
                    <p className="text-ivory/85">{contact.hours}</p>
                  </div>
                  <Magnetic strength={0.2}>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ivory text-ink text-sm font-medium hover:bg-mint transition-colors duration-300"
                    >
                      <span>Visit contact page</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </Magnetic>
                </div>
              </Rise>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
