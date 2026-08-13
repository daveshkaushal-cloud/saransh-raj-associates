"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { insightCategories, insightTopics, insightsNotice } from "@/data/insights";
import { Rise } from "@/components/motion/reveal";

const accentFor: Record<string, string> = {
  Corporate: "#3157FF",
  Contracts: "#FF574D",
  Disputes: "#FFB21A",
  Regulatory: "#70DEC0",
  Insolvency: "#8A65FF",
};

/**
 * Insights preview with category filters. Because no articles are published,
 * topics are clearly marked as forthcoming — honest editorial framing.
 */
export function InsightsPreview() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? insightTopics
        : insightTopics.filter((t) => t.category === filter),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {insightCategories.map((cat) => {
          const active = cat === filter;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-[0.78rem] font-medium tracking-wide border transition-colors duration-200 ${
                active
                  ? "bg-ink text-ivory border-ink"
                  : "bg-transparent text-ink/60 border-line hover:border-ink/40 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {filtered.map((topic, i) => {
          const hex = accentFor[topic.category] || "#10101A";
          return (
            <Rise key={topic.slug} delay={i * 0.05}>
              <div className="group relative bg-paper border border-line p-6 md:p-7 min-h-[11rem] flex flex-col overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(at 90% 10%, ${hex}1f, transparent 60%)` }}
                />
                <div className="relative flex items-center justify-between">
                  <span
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: hex }}
                  >
                    {topic.category}
                  </span>
                  <span className="text-[0.66rem] uppercase tracking-[0.18em] text-ink/35">
                    Forthcoming
                  </span>
                </div>
                <h3 className="relative display-3 mt-4 text-xl md:text-2xl">
                  {topic.title}
                </h3>
                <p className="relative mt-2 text-sm text-ink/55 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </Rise>
          );
        })}
      </div>

      <div className="mt-8 flex items-start gap-3 text-sm text-ink/55">
        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron shrink-0" />
        <p className="leading-relaxed max-w-2xl">{insightsNotice}</p>
      </div>

      <div className="mt-6">
        <Link
          href="/insights"
          className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          <span>Visit the insights index</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
