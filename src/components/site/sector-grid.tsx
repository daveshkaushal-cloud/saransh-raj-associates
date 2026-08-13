"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { sectors } from "@/data/sectors";
import { accentHex, type Accent } from "@/lib/accents";
import { Rise } from "@/components/motion/reveal";

type Variant = "grid" | "scroller";

/**
 * Sector tiles. Two layouts share the same tile content:
 *  - "grid"     : responsive 3-col grid (used on /sectors index)
 *  - "scroller" : horizontal scroll-snap track with arrows + progress (homepage)
 */
export function SectorGrid({ variant = "grid" }: { variant?: Variant }) {
  if (variant === "scroller") return <SectorScroller />;
  return <SectorGridLayout />;
}

/* ---------------------------------------------------------------
   Grid layout — /sectors index page
   --------------------------------------------------------------- */

function SectorGridLayout() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {sectors.map((sector, i) => {
        const hex = accentHex[sector.accent as Accent];
        const isActive = active === i;
        return (
          <Rise key={sector.slug} delay={i * 0.04}>
            <SectorTile
              sector={sector}
              index={i}
              total={sectors.length}
              hex={hex}
              isActive={isActive}
              onActivate={setActive}
              className="min-h-[12rem]"
            />
          </Rise>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------
   Scroller layout — homepage
   --------------------------------------------------------------- */

function SectorScroller() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollTo = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.75, 380);
    el.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });
  };

  const currentIndex = Math.min(
    sectors.length,
    Math.floor(progress * (sectors.length - 1)) + 1
  );

  return (
    <div className="relative">
      {/* Controls row */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[0.72rem] text-ink/45 tracking-wide">
          <span className="md:hidden">Swipe to explore sectors &rarr;</span>
          <span className="hidden md:inline">
            Scroll &middot; drag &middot; or use the arrows to explore
          </span>
        </p>
        <div className="hidden md:flex items-center gap-2">
          <SectorArrow
            direction="prev"
            disabled={!canPrev}
            onClick={() => scrollTo(-1)}
          />
          <SectorArrow
            direction="next"
            disabled={!canNext}
            onClick={() => scrollTo(1)}
          />
        </div>
      </div>

      {/* Horizontal track */}
      <div
        ref={trackRef}
        aria-label="Sectors scrollable list"
        className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 md:-mx-10 px-5 md:px-10 pb-3"
      >
        {sectors.map((sector, i) => {
          const hex = accentHex[sector.accent as Accent];
          const isActive = active === i;
          return (
            <SectorTile
              key={sector.slug}
              sector={sector}
              index={i}
              total={sectors.length}
              hex={hex}
              isActive={isActive}
              onActivate={setActive}
              className="w-[76vw] sm:w-[52vw] md:w-[24rem] lg:w-[22rem] h-[22rem] md:h-[24rem] snap-start"
              showNote
              showCta
            />
          );
        })}

        {/* End card — All sectors */}
        <Link
          href="/sectors"
          className="group relative block snap-start shrink-0 w-[60vw] md:w-[18rem] lg:w-[16rem] bg-ink text-ivory border border-ink overflow-hidden"
        >
          <div className="absolute inset-0 opacity-50 mesh-grad" aria-hidden="true" />
          <div className="relative h-[22rem] md:h-[24rem] p-6 md:p-7 flex flex-col justify-between">
            <span className="eyebrow text-ivory/50">All sectors</span>
            <div>
              <h3 className="display-3 text-ivory">View the full index</h3>
              <p className="mt-2 text-sm text-ivory/55 leading-relaxed">
                Ten industries, one integrated practice.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[0.78rem] font-medium text-ivory/85 group-hover:text-mint transition-colors">
                <span>See all</span>
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
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Progress bar */}
      <div className="mt-6 flex items-center gap-4">
        <span className="text-[0.7rem] tabular-nums text-ink/50 font-medium">
          {String(currentIndex).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-ink/12 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-ink transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
          />
        </div>
        <span className="text-[0.7rem] tabular-nums text-ink/50 font-medium">
          {String(sectors.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Shared tile
   --------------------------------------------------------------- */

function SectorTile({
  sector,
  index,
  total,
  hex,
  isActive,
  onActivate,
  className = "",
  showNote = false,
  showCta = false,
}: {
  sector: (typeof sectors)[number];
  index: number;
  total: number;
  hex: string;
  isActive: boolean;
  onActivate: (i: number | null) => void;
  className?: string;
  showNote?: boolean;
  showCta?: boolean;
}) {
  return (
    <a
      href={`/sectors#${sector.slug}`}
      onMouseEnter={() => onActivate(index)}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate(index)}
      onBlur={() => onActivate(null)}
      id={sector.slug}
      className={`group relative block shrink-0 bg-paper border border-line overflow-hidden transition-colors duration-300 hover:border-ink/30 focus-visible:border-ink/40 flex flex-col ${className}`}
      style={{ scrollMarginTop: "6rem" }}
    >
      {/* colour burst on hover/focus */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(at 85% 0%, ${hex}26, transparent 60%)`,
        }}
      />

      {/* large index watermark (scroller only) */}
      {showNote && (
        <div
          className="absolute -top-4 -right-3 font-display text-[7rem] leading-none text-ink/[0.04] select-none pointer-events-none"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      )}

      {/* content */}
      <div className="relative p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <span className="font-sans text-[0.7rem] tabular-nums text-ink/40">
            {showNote
              ? `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
              : String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-150"
            style={{
              background: hex,
              transform: isActive ? "scale(1.5)" : "scale(1)",
            }}
          />
        </div>

        <div className="mt-auto pt-8">
          <h3 className="display-3 text-2xl md:text-[1.7rem]">{sector.name}</h3>
          <p
            className={`mt-2 text-sm text-ink/55 leading-relaxed transition-all duration-300 ${
              showNote
                ? "opacity-100 translate-y-0"
                : isActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 sm:opacity-100 sm:translate-y-0"
            }`}
          >
            {sector.note}
          </p>
          {showCta && (
            <div className="mt-5 flex items-center gap-2 text-[0.78rem] font-medium text-ink/55 group-hover:text-ink transition-colors">
              <span>View sector</span>
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
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

/* ---------------------------------------------------------------
   Arrow button
   --------------------------------------------------------------- */

function SectorArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous sectors" : "Next sectors"}
      className="inline-flex items-center justify-center h-10 w-10 border border-line text-ink/70 hover:text-ink hover:border-ink/40 hover:bg-ink/[0.03] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-line"
    >
      <svg
        className={`h-4 w-4 ${isPrev ? "" : "rotate-180"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          d="M19 12H5M11 6l-6 6 6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
