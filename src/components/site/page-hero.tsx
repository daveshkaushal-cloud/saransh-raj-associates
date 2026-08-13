"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { SheetReveal, FadeUp } from "@/components/motion/editorial";

/**
 * Editorial page hero — a document-style opening for interior pages.
 * Each page passes its own composition; this provides the shared
 * folio/margin/eyebrow scaffolding.
 */
export function PageHero({
  folio,
  chapter,
  eyebrow,
  title,
  intro,
  accentHex,
  children,
}: {
  folio: string;
  chapter: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  accentHex?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-porcelain pt-10 md:pt-16 pb-12 md:pb-20 border-b border-line">
      {/* top folio bar */}
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
          <span className="mono-label text-ink/50">{chapter}</span>
          <span className="folio text-ink/45">{folio}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              {accentHex && (
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: accentHex }} aria-hidden="true" />
              )}
              <span className="mono-label text-ink/55">{eyebrow}</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <SheetReveal>
              <h1 className="display-1 text-ink">{title}</h1>
            </SheetReveal>
            {intro && (
              <FadeUp delay={0.15}>
                <p className="lead mt-6 md:mt-8 max-w-2xl text-ink/70">{intro}</p>
              </FadeUp>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * SectionHeader — a reusable editorial section heading with an
 * oversized index number, eyebrow, title and optional margin note.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  note,
  accentHex,
  align = "left",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  note?: string;
  accentHex?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`relative ${align === "center" ? "text-center" : ""}`}>
      {index && (
        <span
          className="section-index absolute -top-8 -left-2 md:-top-12 md:-left-4 select-none pointer-events-none leading-none"
          style={{ color: accentHex || "rgba(11,16,32,0.06)" }}
          aria-hidden="true"
        >
          {index}
        </span>
      )}
      <div className={`relative flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        {accentHex && (
          <span className="h-2 w-2 rounded-full" style={{ background: accentHex }} aria-hidden="true" />
        )}
        <span className="mono-label text-ink/55">{eyebrow}</span>
      </div>
      <SheetReveal>
        <h2 className="display-2 text-ink max-w-[20ch]">{title}</h2>
      </SheetReveal>
      {note && (
        <p className="margin-note mt-4 max-w-xs">{note}</p>
      )}
    </div>
  );
}

/**
 * MarginNote — a small annotation in the document gutter.
 */
export function MarginNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`margin-note ${className}`}>{children}</p>;
}

/**
 * ChapterLink — a navigation link styled as a chapter reference.
 */
export function ChapterLink({
  href,
  label,
  index,
}: {
  href: string;
  label: string;
  index?: string;
}) {
  return (
    <Link href={href} className="group inline-flex items-center gap-3 text-sm font-medium text-ink hover:text-electric transition-colors">
      {index && <span className="mono-num text-[0.65rem] text-ink/40 group-hover:text-electric transition-colors">{index}</span>}
      <span className="link-underline">{label}</span>
      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
