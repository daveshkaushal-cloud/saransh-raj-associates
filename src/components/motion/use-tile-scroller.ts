"use client";

import { useCallback, useEffect, useRef } from "react";

type Options = {
  /**
   * Selector for a tile within the track. Defaults to the track's first
   * element child. The horizontal step is computed as tile width + the
   * track's column-gap, so one move always advances exactly one tile.
   */
  tileSelector?: string;
  /**
   * How long (ms) a tile move locks the scroller. One wheel event moves one
   * tile, then further events are absorbed until the lock releases — giving a
   * precise "one notch = one tile" feel on both mouse wheels and trackpads.
   */
  lockMs?: number;
};

/**
 * Converts vertical mouse-wheel scroll over a horizontal track into discrete,
 * one-tile-at-a-time movement.
 *
 * Behaviour:
 *  - One wheel notch (or one trackpad gesture segment) moves exactly one tile.
 *  - A short lock prevents rapid multi-tile jumps so the movement stays legible.
 *  - At the start/end boundary the page scrolls naturally (no scroll trap).
 *  - Touch devices keep their native swipe scroll (hook bails out).
 *  - Reduced-motion users keep native scroll (hook bails out).
 *
 * Also returns `scrollByTiles(direction)` so arrow buttons share the exact
 * same locked step logic as the wheel.
 */
export function useTileScroller(options: Options = {}) {
  const { tileSelector, lockMs = 380 } = options;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const lockRef = useRef(false);

  const getStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 320;
    const tile = tileSelector
      ? (el.querySelector(tileSelector) as HTMLElement | null)
      : (el.firstElementChild as HTMLElement | null);
    if (!tile) return 320;
    const style = getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
    return tile.offsetWidth + gap;
  }, [tileSelector]);

  const scrollByTiles = useCallback(
    (direction: 1 | -1) => {
      const el = trackRef.current;
      if (!el || lockRef.current) return;
      const step = getStep();
      lockRef.current = true;
      el.scrollBy({ left: direction * step, behavior: "smooth" });
      window.setTimeout(() => {
        lockRef.current = false;
      }, lockMs);
    },
    [getStep, lockMs]
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Touch-only devices keep native swipe scroll.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Reduced-motion users get native scroll (no smooth tile animation).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleWheel = (e: WheelEvent) => {
      // Only react to predominantly vertical wheel input.
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const target = trackRef.current;
      if (!target) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const max = target.scrollWidth - target.clientWidth;
      const atStart = target.scrollLeft <= 1 && direction === -1;
      const atEnd = target.scrollLeft >= max - 1 && direction === 1;

      // At a boundary, let the page scroll naturally so the user is never
      // trapped inside the scroller.
      if (atStart || atEnd) return;

      // Absorb the event: either to perform a tile move or to hold the page
      // still while a move is already animating.
      e.preventDefault();
      if (!lockRef.current) scrollByTiles(direction);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [scrollByTiles]);

  return { trackRef, scrollByTiles };
}
