"use client";

import { useEffect, useState } from "react";

/**
 * Minimal animated preloader. Lasts ~1.4s, respects reduced motion.
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
      const t = setTimeout(() => setDone(true), 200);
      return () => clearTimeout(t);
    }

    let raf = 0;
    const start = performance.now();
    const duration = 1300;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 220);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[300] bg-ivory flex items-end justify-between px-6 md:px-10 pb-10 transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex items-end gap-4">
        <span className="font-display text-[14vw] md:text-[10vw] leading-[0.8] text-ink">
          SRA
        </span>
        <span className="eyebrow mb-4 text-ink/50">/ Est. New Delhi</span>
      </div>
      <div className="flex flex-col items-end gap-3 mb-2">
        <span className="font-sans text-sm tabular-nums text-ink/60">
          {String(progress).padStart(3, "0")}
        </span>
        <div className="h-px w-40 md:w-64 bg-ink/15 overflow-hidden">
          <div
            className="h-full bg-ink origin-left transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
