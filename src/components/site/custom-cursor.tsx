"use client";

import { useEffect, useRef } from "react";

/**
 * Restrained custom cursor — a thin vertical bar (like a text caret)
 * that grows and turns electric-blue over links. No oversized glowing
 * ring. Disabled on touch devices.
 */
export function CustomCursor() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const overLinkRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
      if (interactive !== overLinkRef.current) {
        overLinkRef.current = interactive;
        barRef.current?.classList.toggle("over-link", interactive);
      }
    };

    const loop = () => {
      curX += (x - curX) * 0.35;
      curY += (y - curY) * 0.35;
      if (barRef.current) {
        // offset so the bar sits centred on the caret position
        barRef.current.style.transform = `translate3d(${curX - 1}px, ${curY - 11}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={barRef} className="cursor-bar" aria-hidden="true" />;
}
