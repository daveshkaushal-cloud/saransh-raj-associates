"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Editorial scroll progress — a thin electric-blue rule at the top
 * of the viewport that grows as the user reads down the "document".
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const max = h.scrollHeight - h.clientHeight || 1;
      setProgress(Math.min(1, Math.max(0, scrollTop / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[120] h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-electric origin-left"
        style={{ transform: `scaleX(${progress})`, transition: "transform 0.08s linear" }}
      />
    </div>
  );
}
