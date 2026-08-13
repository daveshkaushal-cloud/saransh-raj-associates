"use client";

import { motion } from "framer-motion";
import { useMountedReducedMotion } from "@/components/motion/use-mounted-reduced-motion";

/**
 * Character-by-character text reveal for kinetic typography.
 * Splits text into spans that fade/slide in sequence on view.
 */
export function CharReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.018,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useMountedReducedMotion();
  if (reduce) {
    return <span className={className}>{text}</span>;
  }
  const chars = Array.from(text);
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: "0.6em" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{
            duration: 0.55,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}
