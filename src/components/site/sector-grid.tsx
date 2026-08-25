"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { accentHex, type Accent } from "@/lib/accents";

type Variant = "grid" | "scroller";

/**
 * Sector tiles. Two layouts share the same tile content:
 *  - "grid"     : compact editorial grid for the /sectors index (with anchor ids)
 *  - "scroller" : horizontal scroll-snap track with arrows + progress (homepage)
 */
export function SectorGrid({ variant = "grid" }: { variant?: Variant }) {
  if (variant === "scroller") return <SectorScroller />;
  return <SectorGridLayout />;
}

/* ---- Grid layout — /sectors index (compact cards) ---- */
function SectorGridLayout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {sectors.map((sector, i) => {
        const hex = accentHex[sector.accent as Accent];
        return (
          <div key={sector.slug}>
            <SectorCard
              sector={sector}
              index={i}
              total={sectors.length}
              hex={hex}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ---- Scroller layout — homepage (compact tiles) ---- */
function SectorScroller() {
  const trackRef = useRef<HTMLDivElement | null>(null);
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

  const scrollByTiles = useCallback((direction: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap || "16") || 16;
    const step = firstChild.offsetWidth + gap;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
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

  const currentIndex = Math.min(
    sectors.length,
    Math.floor(progress * (sectors.length - 1)) + 1
  );

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-5">
        <p className="mono-label text-stone">
          <span className="md:hidden">Swipe to explore sectors &rarr;</span>
          <span className="hidden md:inline">
            Scroll &middot; drag &middot; or use the arrows to explore
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
            />
          );
        })}

        {/* end card — CTA to /sectors */}
        <Link
          href="/sectors"
          className="group relative block snap-start shrink-0 w-[60vw] sm:w-[40vw] md:w-[16rem] lg:w-[14rem] bg-blush text-espresso border border-line-strong overflow-hidden"
        >
          <div className="relative h-[10rem] md:h-[11rem] p-5 md:p-6 flex flex-col justify-between">
            <span className="mono-label text-espresso/70">All sectors</span>
            <div>
              <h3 className="display-3 text-base md:text-lg text-espresso leading-tight">
                View the full index
              </h3>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-espresso/70 group-hover:text-rose-dark transition-colors">
                <span>See all</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* progress bar */}
      <div className="mt-5 flex items-center gap-4">
        <span className="mono-num text-stone font-medium">
          {String(currentIndex).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-line relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-rose-dark transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
          />
        </div>
        <span className="mono-num text-stone font-medium">
          {String(sectors.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ---- Compact card — /sectors index grid ---- */
function SectorCard({
  sector,
  index,
  total,
  hex,
}: {
  sector: (typeof sectors)[number];
  index: number;
  total: number;
  hex: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <a
      href={`/sectors#${sector.slug}`}
      className="group relative block bg-porcelain border border-line overflow-hidden transition-colors duration-300 hover:border-rose-dark focus-visible:border-rose-dark p-5 md:p-6 min-h-[10rem] flex flex-col"
    >
      {/* colour edge that grows on hover */}
      <span
        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-1.5"
        style={{ background: hex }}
        aria-hidden="true"
      />
      <div className="flex items-start justify-between mb-3">
        <span className="mono-num text-stone">
          {num} / {String(total).padStart(2, "0")}
        </span>
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: hex }}
          aria-hidden="true"
        />
      </div>
      <h3 className="font-display text-lg md:text-xl text-espresso leading-tight">
        {sector.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal">
        {sector.note}
      </p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-rose-dark transition-colors">
        <span>View sector</span>
        <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  );
}

/* ---- Compact tile — homepage scroller ---- */
function SectorTile({
  sector,
  index,
  total,
  hex,
}: {
  sector: (typeof sectors)[number];
  index: number;
  total: number;
  hex: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <a
      href={`/sectors#${sector.slug}`}
      className="group relative block shrink-0 snap-start bg-porcelain border border-line overflow-hidden transition-colors duration-300 hover:border-rose-dark focus-visible:border-rose-dark flex flex-col"
    >
      <div className="relative h-[11rem] md:h-[12rem] p-5 md:p-6 flex flex-col">
        {/* colour edge that grows on hover */}
        <span
          className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-1.5"
          style={{ background: hex }}
          aria-hidden="true"
        />
        <div className="flex items-start justify-between">
          <span className="mono-num text-stone">
            {num} / {String(total).padStart(2, "0")}
          </span>
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: hex }}
            aria-hidden="true"
          />
        </div>
        <div className="mt-auto">
          <h3 className="font-display text-lg md:text-xl text-espresso leading-tight">
            {sector.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-charcoal line-clamp-2">
            {sector.note}
          </p>
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
      className="inline-flex items-center justify-center h-9 w-9 border border-line-strong text-stone hover:text-espresso hover:bg-ivory transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-line-strong"
    >
      <svg className={`h-4 w-4 ${isPrev ? "" : "rotate-180"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
