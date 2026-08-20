"use client";

import { useState } from "react";

/**
 * ExpandableServiceList — the "What this covers" annotated index on the
 * expertise detail page. Each service row is a button that toggles a 2–3 line
 * editorial description. Mirrors the practice-area accordion pattern used on the
 * expertise index page for visual consistency.
 *
 * Colours follow the dark editorial system:
 * collapsed rows sit on the surface (#080D18) page with ivory text;
 * expanded rows lift onto an elevated (#172033) surface with muted ivory text
 * and a hairline border derived from the practice area's accent.
 */
export function ExpandableServiceList({
  services,
  serviceDetails,
  hex,
}: {
  services: string[];
  serviceDetails: string[];
  /** Accent hex for the practice area — used for the +/× glyph and the marker. */
  hex: string;
}) {
  // Single-open accordion: null = all collapsed, otherwise the open index.
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-line">
      {services.map((title, i) => {
        const detail = serviceDetails[i] ?? "";
        const isOpen = open === i;
        return (
          <div key={title}>
            <div className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`service-detail-${i}`}
                className="group relative w-full text-left grid grid-cols-12 gap-4 items-center py-6 md:py-7 hover:bg-surface-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              >
                {/* number */}
                <span
                  className="col-span-2 md:col-span-1 mono-num text-sm transition-colors"
                  style={{ color: isOpen ? hex : "var(--color-fg-muted)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* title */}
                <span className="col-span-7 md:col-span-8 lg:col-span-9">
                  <span
                    className="font-display text-xl md:text-3xl transition-colors"
                    style={{ color: isOpen ? hex : "var(--color-fg)" }}
                  >
                    {title}
                  </span>
                </span>
                {/* expand affordance — + rotates to × when open */}
                <span className="col-span-3 flex items-center justify-end gap-3">
                  <span
                    className="mono-label transition-colors hidden sm:inline"
                    style={{ color: isOpen ? hex : "var(--color-fg-muted)" }}
                  >
                    {isOpen ? "Close" : "Expand"}
                  </span>
                  <svg
                    className={`h-5 w-5 transition-all duration-300 ${isOpen ? "rotate-45" : ""}`}
                    style={{ color: isOpen ? hex : "var(--color-fg-muted)" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {/* Expanded detail — explicit ivory text on an elevated surface
                  so it never inherits a light foreground from the accent. */}
              {isOpen && (
                <div
                  id={`service-detail-${i}`}
                  className="relative grid grid-cols-12 gap-4 pb-8 md:pb-10 px-4 md:px-6 bg-surface-elevated border-t border-line"
                >
                  <div className="col-span-2 md:col-span-1" />
                  <div className="col-span-10 md:col-span-10 lg:col-span-9">
                    {/* accent rule — marks the open area's colour identity */}
                    <span
                      className="block h-px w-12 mb-5"
                      style={{ background: hex }}
                      aria-hidden="true"
                    />
                    <p
                      className="lead max-w-2xl"
                      style={{ color: "var(--color-fg-muted)" }}
                    >
                      {detail}
                    </p>
                    <p
                      className="mt-5 mono-label"
                      style={{ color: "var(--color-fg-subtle)" }}
                    >
                      Service {String(i + 1).padStart(2, "0")} · Click the title above to collapse
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
