"use client";

import { useEffect, useState } from "react";

/**
 * Thin scroll-progress indicator fixed to the top of the viewport.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const max = (h.scrollHeight - h.clientHeight) || 1;
      setProgress(Math.min(1, Math.max(0, scrollTop / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[120] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-cobalt via-violet to-vermilion origin-left transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
