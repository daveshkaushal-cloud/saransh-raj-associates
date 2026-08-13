"use client";

import { useState } from "react";
import { sectors } from "@/data/sectors";
import { accentHex, type Accent } from "@/lib/accents";
import { Rise } from "@/components/motion/reveal";

/**
 * Interactive sector grid. Hovering/focusing a sector reveals its note
 * and lifts the colour field. Keyboard accessible.
 */
export function SectorGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {sectors.map((sector, i) => {
        const hex = accentHex[sector.accent as Accent];
        const isActive = active === i;
        return (
          <Rise key={sector.slug} delay={i * 0.04}>
            <a
              href={`/sectors#${sector.slug}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              id={sector.slug}
              className="group relative block bg-paper border border-line p-6 md:p-7 min-h-[12rem] overflow-hidden transition-colors duration-300 hover:border-ink/30"
              style={{ scrollMarginTop: "6rem" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(at 90% 0%, ${hex}26, transparent 65%)`,
                }}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <span className="font-sans text-[0.7rem] tabular-nums text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-150"
                    style={{
                      background: hex,
                      transform: isActive ? "scale(1.5)" : "scale(1)",
                    }}
                  />
                </div>
                <h3 className="display-3 mt-auto pt-8 text-2xl md:text-[1.6rem]">
                  {sector.name}
                </h3>
                <p
                  className={`mt-2 text-sm text-ink/55 leading-relaxed transition-all duration-300 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 sm:opacity-100 sm:translate-y-0"
                  }`}
                >
                  {sector.note}
                </p>
              </div>
            </a>
          </Rise>
        );
      })}
    </div>
  );
}
