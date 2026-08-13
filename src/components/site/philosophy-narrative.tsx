"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMountedReducedMotion } from "@/components/motion/use-mounted-reduced-motion";
import { firm } from "@/data/firm";

/**
 * Scroll-driven narrative for the firm's philosophy / story.
 * Pinned sequence with progressive paragraph reveals and a colour-field transition.
 */
export function PhilosophyNarrative() {
  const reduce = useMountedReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);

  const steps = [
    {
      label: "01 — Origin",
      title: "Founded on considered counsel",
      body: firm.purpose,
    },
    {
      label: "02 — Approach",
      title: "Depth, diligence and clarity",
      body: "Based in New Delhi, the firm advises on corporate structuring, commercial contracts, mergers and acquisitions, dispute resolution, regulatory compliance and insolvency proceedings — combining attention to legal detail with an understanding of commercial realities.",
    },
    {
      label: "03 — Principle",
      title: "Integrity, precision, client-first, clarity",
      body: "These principles shape how the firm works: ethically, with attention to detail, with the client's interests at the centre, and in language that makes the law understandable.",
    },
  ];

  return (
    <section ref={ref} className="relative bg-ivory">
      {/* sticky colour-field backdrop */}
      <div className="h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={reduce ? undefined : { y: yBg }}
            className="absolute inset-0 mesh-grad opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 line-grid opacity-60" aria-hidden="true" />

          <motion.div
            style={reduce ? undefined : { opacity }}
            className="relative mx-auto max-w-[1400px] w-full px-5 md:px-10"
          >
            <p className="eyebrow mb-6">The Firm · Philosophy</p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <h2 className="display-2">
                  Counsel built on principle
                </h2>
              </div>
              <div className="md:col-span-7 md:pl-10">
                <div className="space-y-10">
                  {steps.map((s) => (
                    <div key={s.label} className="border-t border-line pt-5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
                        {s.label}
                      </p>
                      <h3 className="display-3 mt-2 text-2xl md:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65 max-w-xl">
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
