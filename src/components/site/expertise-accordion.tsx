"use client";

import Link from "next/link";
import { useState } from "react";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex, accentOnHex } from "@/lib/accents";

/**
 * Interactive practice-area accordion. Client component — handles the
 * expand/collapse state. Renders immediately in SSR (open by default
 * to the first area) so content is visible without waiting for JS.
 */
export function ExpertiseAccordion() {
  const [open, setOpen] = useState<string | null>(practiceAreas[0]?.slug ?? null);

  return (
    <div className="border-t border-line">
      {practiceAreas.map((area, i) => {
        const hex = accentHex[area.accent];
        const onHex = accentOnHex[area.accent];
        const isOpen = open === area.slug;
        return (
          <div key={area.slug} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : area.slug)}
              aria-expanded={isOpen}
              className="group relative w-full text-left grid grid-cols-12 gap-4 items-center py-6 md:py-8 hover:bg-surface-soft transition-colors"
            >
              {/* colour field that fills the HEADER row only when open */}
              <span
                className="absolute left-0 top-0 bottom-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  width: isOpen ? "100%" : "0%",
                  background: hex,
                  opacity: isOpen ? 1 : 0.08,
                  zIndex: 0,
                }}
                aria-hidden="true"
              />
              <span className="relative col-span-2 md:col-span-1 mono-num text-sm transition-colors" style={{ color: isOpen ? onHex : "var(--color-fg-muted)" }}>
                {area.index}
              </span>
              <span className="relative col-span-7 md:col-span-5">
                <span className="font-display text-2xl md:text-4xl transition-colors" style={{ color: isOpen ? onHex : "var(--color-fg)" }}>
                  {area.title}
                </span>
              </span>
              <span className="relative col-span-3 md:col-span-4 text-[0.8rem] md:text-sm hidden sm:block transition-colors" style={{ color: isOpen ? onHex : "var(--color-fg-muted)" }}>
                {area.short}
              </span>
              <span className="relative col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                <span className="mono-label transition-colors" style={{ color: isOpen ? onHex : "var(--color-fg-muted)" }}>
                  {isOpen ? "Close" : "Expand"}
                </span>
                <svg
                  className={`h-5 w-5 transition-all duration-200 ${isOpen ? "rotate-45" : ""}`}
                  style={{ color: isOpen ? onHex : "var(--color-fg-muted)" }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            {/* Expandable content — dark elevated surface with ivory text.
                Does NOT inherit white text from the active accent header. */}
            {isOpen && (
              <div className="relative grid grid-cols-12 gap-4 pb-8 md:pb-10 px-4 md:px-6 pt-6 bg-surface-elevated border-t border-line">
                <div className="col-span-2 md:col-span-1" />
                <div className="col-span-10 md:col-span-7">
                  <p className="lead max-w-xl" style={{ color: "var(--color-fg-muted)" }}>
                    {area.overview}
                  </p>
                  <div className="mt-6 space-y-px">
                    {area.services.map((s, si) => (
                      <div key={s} className="flex items-baseline gap-4 py-3 border-t border-line">
                        <span className="mono-num text-[0.7rem]" style={{ color: "var(--color-fg-subtle)" }}>
                          {String(si + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg md:text-xl" style={{ color: "var(--color-fg)" }}>
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-10 flex md:flex-col gap-3 md:items-end md:justify-end md:text-right pt-2 md:pt-0">
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group inline-flex items-center gap-2 mono-label hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-fg-subtle)" }}
                  >
                    <span>Read area</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
