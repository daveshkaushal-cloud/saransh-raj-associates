"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Masked headline reveal. Animates each line upwards from a mask.
 * Respects prefers-reduced-motion.
 */
export function MaskReveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[As] as typeof motion.div;
  return (
    <MotionTag
      className={`overflow-hidden ${className}`}
      initial={reduce ? { opacity: 0 } : { opacity: 1 }}
      whileInView={reduce ? { opacity: 1 } : undefined}
      viewport={{ once: true, margin: "-8% 0px" }}
    >
      <motion.div
        initial={reduce ? { opacity: 1 } : { y: "110%" }}
        whileInView={reduce ? undefined : { y: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </MotionTag>
  );
}

/**
 * Fade + rise on view.
 */
export function Rise({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
