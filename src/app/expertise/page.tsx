"use client";

import Link from "next/link";
import { useState } from "react";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex, accentOnHex } from "@/lib/accents";
import { FadeUp, SheetReveal } from "@/components/motion/editorial";

/**
 * Expertise index — an interactive legal index with expandable chapters
 * and colour-coded practice areas. Each chapter expands to reveal its
 * services as annotated list items.
 */
export default function ExpertisePage() {
  const [open, setOpen] = useState<string | null>(practiceAreas[0]?.slug ?? null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-porcelain pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-ink/50">Chapter 02 · Expertise</span>
            <span className="folio text-ink/45">003 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-4">Practice Areas</p>
                <p className="margin-note">
                  Six chapters of practice, each colour-coded. Select a chapter to expand its scope.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  A focused{" "}
                  <span className="serif-italic text-electric">index</span> of practice
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-ink/70">
                  The firm&apos;s practice is organised across six areas of corporate
                  and commercial law. Each chapter below sets out its scope and the
                  services it covers.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive chapter index */}
      <section className="bg-porcelain py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          {/* colour legend */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-6 border-b border-line">
            <span className="mono-label text-ink/50">Legend</span>
            {practiceAreas.map((area) => (
              <span key={area.slug} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: accentHex[area.accent] }} />
                <span className="mono-label text-ink/60">{area.title}</span>
              </span>
            ))}
          </div>

          {/* Chapter list */}
          <div className="border-t border-line">
            {practiceAreas.map((area, i) => {
              const hex = accentHex[area.accent];
              const onHex = accentOnHex[area.accent];
              const isOpen = open === area.slug;
              return (
                <FadeUp key={area.slug} delay={i * 0.04}>
                  <div className="border-b border-line">
                    <button
                      onClick={() => setOpen(isOpen ? null : area.slug)}
                      aria-expanded={isOpen}
                      className="group relative w-full text-left grid grid-cols-12 gap-4 items-center py-6 md:py-8 hover:bg-paper transition-colors"
                    >
                      {/* colour field that expands when open */}
                      <span
                        className="absolute left-0 top-0 bottom-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          width: isOpen ? "100%" : "0%",
                          background: hex,
                          opacity: isOpen ? 1 : 0.08,
                          zIndex: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span className="relative col-span-2 md:col-span-1 mono-num text-sm transition-colors" style={{ color: isOpen ? onHex : "rgba(11,16,32,0.45)" }}>
                        {area.index}
                      </span>
                      <span className="relative col-span-7 md:col-span-5">
                        <span className="font-display text-2xl md:text-4xl transition-colors" style={{ color: isOpen ? onHex : "#0B1020" }}>
                          {area.title}
                        </span>
                      </span>
                      <span className="relative col-span-3 md:col-span-4 text-[0.8rem] md:text-sm hidden sm:block transition-colors" style={{ color: isOpen ? onHex : "rgba(11,16,32,0.55)" }}>
                        {area.short}
                      </span>
                      <span className="relative col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                        <span className="mono-label transition-colors" style={{ color: isOpen ? onHex : "rgba(11,16,32,0.5)" }}>
                          {isOpen ? "Close" : "Expand"}
                        </span>
                        <svg
                          className={`h-5 w-5 transition-all duration-300 ${isOpen ? "rotate-45" : ""}`}
                          style={{ color: isOpen ? onHex : "rgba(11,16,32,0.4)" }}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"
                        >
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>

                    {/* Expandable content */}
                    {isOpen && (
                      <div className="relative grid grid-cols-12 gap-4 pb-8 md:pb-10" style={{ color: onHex }}>
                        <div className="col-span-2 md:col-span-1" />
                        <div className="col-span-10 md:col-span-7">
                          <p className="lead max-w-xl" style={{ color: onHex, opacity: 0.9 }}>
                            {area.overview}
                          </p>
                          <div className="mt-8 space-y-px">
                            {area.services.map((s, si) => (
                              <div key={s} className="flex items-baseline gap-4 py-3 border-t" style={{ borderColor: `${onHex}33` }}>
                                <span className="mono-num text-[0.65rem] opacity-60">
                                  {String(si + 1).padStart(2, "0")}
                                </span>
                                <span className="font-display text-lg md:text-xl" style={{ color: onHex }}>
                                  {s}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-3 md:col-start-10 flex md:flex-col gap-3 md:items-end md:justify-end md:text-right">
                          <Link
                            href={`/expertise/${area.slug}`}
                            className="group inline-flex items-center gap-2 mono-label hover:opacity-80 transition-opacity"
                            style={{ color: onHex }}
                          >
                            <span>Read chapter</span>
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
