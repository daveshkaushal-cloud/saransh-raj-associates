"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Magnetic wrapper: gently pulls its child toward the cursor on hover.
 * Disabled on touch / reduced motion.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }
  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0,0)";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </motion.div>
  );
}
