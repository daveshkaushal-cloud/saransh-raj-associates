"use client";

import { type ReactNode } from "react";
import { MaskReveal, Rise } from "@/components/motion/reveal";
import { accentHex, type Accent } from "@/lib/accents";

/**
 * Reusable page hero for interior pages.
 * Editorial layout with eyebrow, oversized masked headline, and meta strip.
 */
export function PageHero({
  eyebrow,
  title,
  titleAccent,
  intro,
  accent = "cobalt",
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  titleAccent?: string;
  intro?: ReactNode;
  accent?: Accent;
  meta?: { label: string; value: string }[];
}) {
  const hex = accentHex[accent];
  return (
    <section className="relative bg-ivory pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-24 right-0 h-[40vh] w-[40vh] rounded-full blur-3xl opacity-25"
        style={{ background: `radial-gradient(circle, ${hex}, transparent 70%)` }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <Rise>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </Rise>
        <h1 className="display-1 text-ink max-w-[18ch]">
          <MaskReveal as="span" delay={0.05}>
            <span className="block">{title}</span>
          </MaskReveal>
          {titleAccent && (
            <MaskReveal as="span" delay={0.16}>
              <span className="block italic" style={{ color: hex }}>
                {titleAccent}
              </span>
            </MaskReveal>
          )}
        </h1>

        {intro && (
          <Rise delay={0.25}>
            <div className="mt-8 md:mt-10 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
              {intro}
            </div>
          </Rise>
        )}

        {meta && meta.length > 0 && (
          <Rise delay={0.32}>
            <div className="mt-12 md:mt-16 border-t border-line pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {meta.map((m) => (
                <div key={m.label}>
                  <p className="eyebrow text-ink/40 mb-2">{m.label}</p>
                  <p className="text-sm text-ink/80">{m.value}</p>
                </div>
              ))}
            </div>
          </Rise>
        )}
      </div>
    </section>
  );
}
