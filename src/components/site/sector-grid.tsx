"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { accentHex, type Accent } from "@/lib/accents";
import { FadeUp } from "@/components/motion/editorial";
import { useTileScroller } from "@/components/motion/use-tile-scroller";

type Variant = "grid" | "scroller";

/**
 * Sector tiles. Two layouts share the same tile content:
 *  - "grid"     : editorial grid for the /sectors index (with anchor ids)
 *  - "scroller" : horizontal scroll-snap track with arrows + progress (homepage)
 */
export function SectorGrid({ variant = "grid" }: { variant?: Variant }) {
  if (variant === "scroller") return <SectorScroller />;
  return <SectorGridLayout />;
}

/* ---- Grid layout — /sectors index ---- */
function SectorGridLayout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {sectors.map((sector, i) => {
        const hex = accentHex[sector.accent as Accent];
        return (
          <FadeUp key={sector.slug} delay={i * 0.04}>
            <SectorTile
              sector={sector}
              index={i}
              total={sectors.length}
              hex={hex}
              className="min-h-[12rem]"
            />
          </FadeUp>
        );
      })}
    </div>
  );
}

/* ---- Scroller layout — homepage ---- */
function SectorScroller() {
  const { trackRef, scrollByTiles } = useTileScroller();
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
  }, [trackRef]);

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
  }, [update, trackRef]);

  const currentIndex = Math.min(
    sectors.length,
    Math.floor(progress * (sectors.length - 1)) + 1
  );

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <p className="mono-label text-ink/45">
          <span className="md:hidden">Swipe to explore sectors &rarr;</span>
          <span className="hidden md:inline">
            Scroll &middot; drag &middot; or use the arrows — one sector per notch
          </span>
        </p>
        <div className="hidden md:flex items-center gap-2">
          <SectorArrow direction="prev" disabled={!canPrev} onClick={() => scrollByTiles(-1)} />
          <SectorArrow direction="next" disabled={!canNext} onClick={() => scrollByTiles(1)} />
        </div>
      </div>

      <div
        ref={trackRef}
        aria-label="Sectors scrollable list"
        className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 md:-mx-10 px-5 md:px-10 pb-3"
      >
        {sectors.map((sector, i) => {
          const hex = accentHex[sector.accent as Accent];
          return (
            <SectorTile
              key={sector.slug}
              sector={sector}
              index={i}
              total={sectors.length}
              hex={hex}
              className="w-[76vw] sm:w-[52vw] md:w-[24rem] lg:w-[22rem] h-[22rem] md:h-[24rem] snap-start"
              showNote
              showCta
            />
          );
        })}

        <Link
          href="/sectors"
          className="group relative block snap-start shrink-0 w-[60vw] md:w-[18rem] lg:w-[16rem] bg-ink text-porcelain border border-ink overflow-hidden"
        >
          <div className="relative h-[22rem] md:h-[24rem] p-6 md:p-7 flex flex-col justify-between">
            <span className="mono-label text-porcelain/50">All sectors</span>
            <div>
              <h3 className="display-3 text-porcelain">View the full index</h3>
              <p className="mt-2 text-sm text-porcelain/55 leading-relaxed">
                Ten industries, one integrated practice.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[0.78rem] font-medium text-porcelain/85 group-hover:text-marigold transition-colors">
                <span>See all</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="mono-num text-[0.7rem] text-ink/50 font-medium">
          {String(currentIndex).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-line relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-electric transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
          />
        </div>
        <span className="mono-num text-[0.7rem] text-ink/50 font-medium">
          {String(sectors.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ---- Shared tile ---- */
function SectorTile({
  sector,
  index,
  total,
  hex,
  className = "",
  showNote = false,
  showCta = false,
}: {
  sector: (typeof sectors)[number];
  index: number;
  total: number;
  hex: string;
  className?: string;
  showNote?: boolean;
  showCta?: boolean;
}) {
  return (
    <a
      href={`/sectors#${sector.slug}`}
      id={sector.slug}
      className={`group relative block shrink-0 bg-paper border border-line overflow-hidden transition-colors duration-300 hover:border-ink/30 focus-visible:border-electric flex flex-col ${className}`}
      style={{ scrollMarginTop: "6rem" }}
    >
      {/* colour edge that grows on hover */}
      <span
        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-2"
        style={{ background: hex }}
        aria-hidden="true"
      />

      {/* large index watermark */}
      {showNote && (
        <div
          className="absolute -top-4 -right-3 font-display text-[7rem] leading-none text-ink/[0.04] select-none pointer-events-none"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      )}

      <div className="relative p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <span className="mono-num text-[0.7rem] text-ink/40">
            {showNote
              ? `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
              : String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: hex }} />
        </div>

        <div className="mt-auto pt-8">
          <h3 className="display-3 text-2xl md:text-[1.7rem]">{sector.name}</h3>
          <p className="mt-2 text-sm text-ink/55 leading-relaxed">{sector.note}</p>
          {showCta && (
            <div className="mt-5 flex items-center gap-2 text-[0.78rem] font-medium text-ink/55 group-hover:text-ink transition-colors">
              <span>View sector</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

/* ---- Arrow ---- */
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
      <svg className={`h-4 w-4 ${isPrev ? "" : "rotate-180"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
