"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";
import { useMountedReducedMotion } from "@/components/motion/use-mounted-reduced-motion";

/**
 * Pinned horizontal expertise explorer.
 * Vertical scroll translates into horizontal movement of the practice-area cards.
 *
 * The horizontal travel distance is measured from the real track width (not a
 * guessed percentage) so all six cards + the end card are guaranteed to be
 * reachable. The pin duration is derived from that same distance so the
 * scroll-to-horizontal ratio stays comfortable on any viewport.
 *
 * Falls back to a native horizontal scroll-snap track on small screens and for
 * users who prefer reduced motion.
 */
export function HorizontalExpertise() {
  const reduce = useMountedReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Measured overflow: how many px the track needs to travel horizontally.
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
      setDistance(overflow);
    };
    measure();
    window.addEventListener("resize", measure);
    // Re-measure once fonts/images settle.
    const t = window.setTimeout(measure, 300);
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Pixel-based transform — guaranteed to reach the last card.
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  // Pin height: one viewport to introduce + one viewport per ~900px of travel,
  // clamped so very long tracks don't drag and short tracks still feel right.
  const pinHeight = `calc(100vh + ${distance}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink text-ivory"
      aria-label="Expertise explorer"
    >
      {/* Desktop pinned experience */}
      {!reduce && (
        <div className="hidden lg:block" style={{ height: pinHeight }}>
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="px-10 flex items-end justify-between mb-8">
              <div>
                <p className="eyebrow text-mint mb-3">Expertise · Practice Areas</p>
                <h2 className="display-2 text-ivory max-w-2xl">
                  A focused practice across corporate &amp; commercial law
                </h2>
              </div>
              <p className="text-sm text-ivory/60 max-w-[14rem] hidden xl:block">
                Scroll to move through six areas of practice.
              </p>
            </div>

            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 pl-10 pr-10 will-change-transform"
            >
              {practiceAreas.map((area) => (
                <ExpertiseCard key={area.slug} area={area} />
              ))}
              <EndCard />
            </motion.div>

            {/* progress bar */}
            <div className="px-10 mt-10">
              <div className="h-px w-full bg-ivory/12 relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-mint"
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/*
        Mobile / tablet / reduced-motion fallback: a native horizontal
        scroll-snap track. When reduced motion is requested it also replaces
        the pinned experience on desktop so users can scroll sideways natively.
      */}
      <div className={reduce ? "py-16 px-5" : "lg:hidden py-16 px-5"}>
        <p className="eyebrow text-mint mb-3">Expertise · Practice Areas</p>
        <h2 className="display-2 text-ivory max-w-2xl mb-8">
          A focused practice across corporate &amp; commercial law
        </h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 pb-4">
          {practiceAreas.map((area) => (
            <div key={area.slug} className="snap-start shrink-0 w-[78vw] sm:w-[60vw]">
              <ExpertiseCard area={area} mobile />
            </div>
          ))}
          <div className="snap-start shrink-0 w-[60vw]">
            <EndCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({
  area,
  mobile = false,
}: {
  area: (typeof practiceAreas)[number];
  mobile?: boolean;
}) {
  const hex = accentHex[area.accent];
  return (
    <Link
      href={`/expertise/${area.slug}`}
      className={`group relative block bg-ivory text-ink ${
        mobile ? "w-full" : "w-[28rem]"
      } shrink-0 overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(at 80% 10%, ${hex}22, transparent 60%)`,
        }}
      />
      <div className="relative p-8 h-[26rem] flex flex-col">
        <div className="flex items-center justify-between">
          <span
            className="font-display text-5xl"
            style={{ color: hex }}
          >
            {area.index}
          </span>
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: hex }}
          />
        </div>
        <h3 className="display-3 mt-8">{area.title}</h3>
        <p className="mt-3 text-sm text-ink/65 leading-relaxed">
          {area.short}
        </p>
        <ul className="mt-auto space-y-1.5">
          {area.services.slice(0, 3).map((s) => (
            <li key={s} className="text-[0.8rem] text-ink/55 flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: hex }} />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2 text-[0.78rem] font-medium text-ink/70 group-hover:text-ink transition-colors">
          <span>Explore</span>
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function EndCard() {
  return (
    <Link
      href="/expertise"
      className="group relative block bg-transparent border border-ivory/20 text-ivory w-[24rem] shrink-0 overflow-hidden"
    >
      <div className="p-8 h-[26rem] flex flex-col justify-between">
        <span className="eyebrow text-ivory/50">All expertise</span>
        <div>
          <h3 className="display-3 text-ivory">View the full practice</h3>
          <p className="mt-3 text-sm text-ivory/55">
            Six areas, one integrated approach to corporate &amp; commercial law.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium">
            <span>See all</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
