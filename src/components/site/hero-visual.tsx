"use client";

import { useEffect, useRef } from "react";
import { useMountedReducedMotion } from "@/components/motion/use-mounted-reduced-motion";

/**
 * HeroVisual — layered translucent document sheets that shift on scroll,
 * with annotation marks, a colour-bar index, and architectural rules.
 * Pure SVG/CSS, no external assets. Designed for the dark editorial theme.
 */
export function HeroVisual() {
  const reduce = useMountedReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / vh));
        el.style.setProperty("--p", String(p));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ ["--p" as string]: "0" }}
    >
      {/* Layered translucent sheets — each drifts at a different rate */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(calc(var(--p) * -30px))`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Sheet 1 — elevated surface, offset left */}
        <div
          className="absolute left-[6%] top-[8%] w-[52%] h-[78%] bg-surface-elevated border border-line"
          style={{
            transform: `translateX(calc(var(--p) * -24px)) translateY(calc(var(--p) * 12px))`,
            opacity: 0.92,
            transition: "transform 0.1s linear",
          }}
        >
          <SheetLines />
        </div>

        {/* Sheet 2 — cobalt accent tint, offset right */}
        <div
          className="absolute right-[8%] top-[4%] w-[46%] h-[84%]"
          style={{
            background: "rgba(65, 105, 255, 0.10)",
            transform: `translateX(calc(var(--p) * 28px)) translateY(calc(var(--p) * -16px))`,
            transition: "transform 0.1s linear",
          }}
        >
          <SheetLines accent="rgba(65,105,255,0.32)" />
        </div>

        {/* Sheet 3 — coral edge, behind */}
        <div
          className="absolute left-[28%] top-[14%] w-[44%] h-[68%] bg-surface-soft border-l-2"
          style={{
            borderLeftColor: "#FF6B5C",
            transform: `translateX(calc(var(--p) * 14px)) translateY(calc(var(--p) * 20px))`,
            transition: "transform 0.1s linear",
          }}
        >
          <SheetLines />
        </div>
      </div>

      {/* Colour bar index — bottom */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-6 h-2">
        <div className="bg-accent" />
        <div className="bg-coral" />
        <div className="bg-saffron" />
        <div className="bg-teal" />
        <div className="bg-violet" />
        <div className="bg-surface-elevated" />
      </div>

      {/* Folio marker — top right */}
      <div className="absolute top-3 right-4 flex items-center gap-2">
        <span className="mono-label text-fg-subtle">Folio</span>
        <span className="mono-num text-fg-muted">001</span>
      </div>
    </div>
  );
}

function SheetLines({ accent }: { accent?: string }) {
  const color = accent ?? "rgba(245,241,232,0.10)";
  const markColor = "#FF6B5C";
  return (
    <div className="absolute inset-0 p-5 flex flex-col gap-3.5">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className="h-1 w-1 rounded-full shrink-0"
            style={{ background: i === 2 ? markColor : color }}
          />
          <div
            className="h-px"
            style={{
              width: `${[88, 72, 95, 64, 80, 70, 90, 60, 76][i]}%`,
              background: color,
            }}
          />
        </div>
      ))}
      {/* annotation bracket */}
      <div className="mt-auto flex items-center gap-2">
        <div
          className="h-3 w-3 border-l border-t"
          style={{ borderColor: "#4169FF" }}
        />
        <span className="mono-label text-accent/80">Annotated</span>
      </div>
    </div>
  );
}
