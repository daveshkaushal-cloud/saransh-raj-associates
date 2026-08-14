"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

/**
 * isInView — tiny IntersectionObserver hook.
 * Returns [ref, isInView]. Fires once when the element enters the viewport.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView] as const;
}

/**
 * SheetReveal — content slides up from behind a mask, like turning
 * a document page. SSR-safe (renders children immediately; the mask
 * animation only runs client-side after mount).
 */
export function SheetReveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <As
      ref={ref}
      className={`sheet-reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </As>
  );
}

/**
 * RuleDraw — a horizontal (or vertical) rule that draws itself in
 * when scrolled into view, like an annotation line being marked.
 */
export function RuleDraw({
  className = "",
  vertical = false,
  delay = 0,
}: {
  className?: string;
  vertical?: boolean;
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`rule-draw ${inView ? "is-in" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        height: vertical ? undefined : 1,
        width: vertical ? 1 : undefined,
        position: "relative",
      } as React.CSSProperties}
    />
  );
}

/**
 * CropReveal — image/element reveals through an editorial clip,
 * like a document selection expanding. Wrap an <img> or element.
 */
export function CropReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`crop-reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/**
 * FolioScroll — a live page-folio number that updates as the user
 * scrolls through a section. Gives the feeling of paging through
 * a legal document.
 */
export function FolioScroll({
  total,
  sectionId,
  className = "",
}: {
  total: number;
  sectionId: string;
  className?: string;
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // how far through this section have we scrolled (0..1)
      const progress = Math.min(
        1,
        Math.max(0, (vh * 0.6 - rect.top) / (rect.height + vh * 0.4))
      );
      setPage(Math.max(1, Math.min(total, Math.ceil(progress * total) || 1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionId, total]);
  return (
    <span className={`folio ${className}`}>
      <span className="mono-num">{String(page).padStart(2, "0")}</span>
      <span className="opacity-40 mx-1">/</span>
      <span className="mono-num opacity-60">{String(total).padStart(2, "0")}</span>
    </span>
  );
}

/**
 * FadeUp — simple fade + rise on view. For elements that don't need
 * the full sheet-reveal mask treatment.
 */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 24,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      } as React.CSSProperties}
    >
      {children}
    </As>
  );
}
