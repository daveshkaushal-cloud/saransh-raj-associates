"use client";

import { useEffect, useState } from "react";

/**
 * Brief editorial preloader — a "document opening" animation.
 * A thin rule draws across, the wordmark rises, and it clears in ~0.9s.
 * Respects reduced motion (skips straight to done).
 */
export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(100);
      const t = setTimeout(() => setDone(true), 120);
      return () => clearTimeout(t);
    }
    let raf = 0;
    const start = performance.now();
    const duration = 850;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 160);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[300] bg-ink text-porcelain flex flex-col justify-between px-6 md:px-10 py-8 md:py-10 transition-opacity duration-300"
      style={{ opacity: progress >= 100 ? 0 : 1, pointerEvents: progress >= 100 ? "none" : "auto" }}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="mono-label text-porcelain/55">Saransh Raj &amp; Associates</span>
        <span className="mono-label text-porcelain/40">Arguments in Colour</span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-end gap-4">
          <span className="font-display text-[18vw] md:text-[12vw] leading-[0.8] text-porcelain">
            SRA
          </span>
          <span className="mono-label text-porcelain/50 mb-4 md:mb-6">/ New Delhi</span>
        </div>
        {/* progress rule */}
        <div className="mt-6 h-px w-full bg-porcelain/15 overflow-hidden">
          <div
            className="h-full bg-marigold origin-left"
            style={{ width: `${progress}%`, transition: "width 0.08s linear" }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="mono-num text-xs text-porcelain/55">
            {String(progress).padStart(3, "0")}
          </span>
          <span className="mono-label text-porcelain/40">Loading document</span>
        </div>
      </div>
    </div>
  );
}
