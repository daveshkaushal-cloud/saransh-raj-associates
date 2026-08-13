import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Rise } from "@/components/motion/reveal";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Expertise — Practice Areas",
  description:
    "Focused expertise across corporate advisory, commercial contracts, mergers & acquisitions, dispute resolution, regulatory & compliance, and insolvency & recovery.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise · Practice Areas"
        title={<>A focused practice across</>}
        titleAccent="corporate & commercial law."
        intro={
          <>
            Focused expertise across the full spectrum of corporate and
            commercial law — combining deep legal knowledge with a practical
            understanding of business to provide counsel that is both
            authoritative and actionable.
          </>
        }
        accent="violet"
        meta={[
          { label: "Practice areas", value: `${practiceAreas.length}` },
          { label: "Discipline", value: "Corporate & commercial" },
          { label: "Approach", value: "Integrated" },
          { label: "Based in", value: "New Delhi" },
        ]}
      />

      <section className="bg-ivory py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="space-y-3 md:space-y-4">
            {practiceAreas.map((area, i) => {
              const hex = accentHex[area.accent];
              return (
                <Rise key={area.slug} delay={i * 0.05}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group relative block bg-paper border border-line hover:border-ink/30 transition-colors overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(at 85% 0%, ${hex}1f, transparent 60%)` }}
                    />
                    <div className="relative grid grid-cols-12 gap-4 items-center p-6 md:p-8">
                      <div className="col-span-2 md:col-span-1">
                        <span className="font-display text-4xl md:text-5xl" style={{ color: hex }}>
                          {area.index}
                        </span>
                      </div>
                      <div className="col-span-10 md:col-span-4">
                        <h2 className="display-3 text-2xl md:text-3xl">{area.title}</h2>
                      </div>
                      <div className="col-span-12 md:col-span-5 md:pl-4">
                        <p className="text-sm md:text-base text-ink/60 leading-relaxed">
                          {area.short}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-2 flex md:justify-end">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 group-hover:text-ink">
                          <span>Explore</span>
                          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
