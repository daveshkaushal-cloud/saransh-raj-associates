"use client";

import { useState, useEffect, useCallback } from "react";
import { sectors } from "@/data/sectors";
import { accentHex, type Accent } from "@/lib/accents";

/**
 * SectorList — the annotated index of sectors on /sectors.
 *
 * Each row is a toggle: clicking it expands a 2–3 line editorial
 * description of the firm's work in that sector. The colour legend
 * above links to `#slug`; when such a hash is present (from a legend
 * click or a direct URL), the matching sector is opened automatically
 * and scrolled into view.
 */
export function SectorList() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openByHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectors.some((s) => s.slug === hash)) {
      setOpenSlug(hash);
    }
  }, []);

  useEffect(() => {
    openByHash();
    window.addEventListener("hashchange", openByHash);
    return () => window.removeEventListener("hashchange", openByHash);
  }, [openByHash]);

  return (
    <div className="border-t border-line">
      {sectors.map((sector, i) => {
        const hex = accentHex[sector.accent as Accent];
        const num = String(i + 1).padStart(2, "0");
        const isOpen = openSlug === sector.slug;
        const panelId = `sector-panel-${sector.slug}`;
        return (
          <div key={sector.slug}>
            <div
              id={sector.slug}
              className="border-b border-line scroll-mt-24"
            >
              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? null : sector.slug)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group relative w-full grid grid-cols-12 gap-4 items-center py-5 md:py-6 hover:bg-porcelain transition-colors text-left"
                aria-label={`${sector.name} — ${sector.note}. ${isOpen ? "Collapse" : "Expand"} details.`}
              >
                {/* index */}
                <span className="col-span-2 md:col-span-1 mono-num text-sm text-stone-dark transition-colors group-hover:text-charcoal">
                  {num}
                </span>

                {/* colour marker + name */}
                <div className="col-span-10 md:col-span-5 flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full shrink-0 transition-transform group-hover:scale-125"
                    style={{ background: hex }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-lg md:text-xl text-ink leading-tight">
                    {sector.name}
                  </h3>
                </div>

                {/* note */}
                <p className="col-span-12 md:col-span-5 text-sm leading-relaxed text-charcoal md:col-start-7">
                  {sector.note}
                </p>

                {/* chevron affordance — rotates when open */}
                <span className="hidden md:flex col-span-1 items-center justify-end">
                  <svg
                    className={`h-4 w-4 text-stone-dark transition-all duration-300 group-hover:text-copper ${
                      isOpen ? "rotate-90" : ""
                    }`}
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
              </button>

              {/* expandable description panel — animates via grid-rows 0fr→1fr */}
              <div
                id={panelId}
                className="grid transition-all duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 pb-6 md:pb-7 bg-porcelain">
                    <div
                      className="col-span-12 md:col-span-10 md:col-start-2 pl-4 md:pl-6 border-l-2"
                      style={{ borderColor: hex }}
                    >
                      <p className="text-sm leading-relaxed text-charcoal max-w-2xl measure">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
