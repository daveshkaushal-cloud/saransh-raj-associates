"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { insightCategories, insightTopics, insightsNotice } from "@/data/insights";
import { FadeUp } from "@/components/motion/editorial";

const accentFor: Record<string, string> = {
  Corporate: "#2457FF",
  Contracts: "#FF493D",
  Disputes: "#FFB000",
  Regulatory: "#17B890",
  Insolvency: "#673DE6",
};

/**
 * Insights preview — magazine-style index with category filters.
 * Because no articles are published, topics are clearly marked as
 * forthcoming with honest editorial framing.
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
              className={`mono-label px-3 py-2 border transition-colors duration-200 ${
                active
                  ? "bg-porcelain text-ink border-porcelain"
                  : "bg-transparent text-porcelain/55 border-line-on-ink hover:border-porcelain/40 hover:text-porcelain"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {filtered.map((topic, i) => {
          const hex = accentFor[topic.category] || "#0B1020";
          return (
            <FadeUp key={topic.slug} delay={i * 0.05}>
              <div className="group relative bg-ink/[0.4] border border-line-on-ink p-6 md:p-7 min-h-[11rem] flex flex-col overflow-hidden">
                {/* colour edge that grows on hover */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1.5 transition-all duration-500"
                  style={{ background: hex }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span
                    className="mono-label"
                    style={{ color: hex === "#0B1020" ? "#F3EFE5" : hex }}
                  >
                    {topic.category}
                  </span>
                  <span className="mono-label text-porcelain/40">Forthcoming</span>
                </div>
                <h3 className="relative font-display text-xl md:text-2xl mt-4 text-porcelain leading-tight">
                  {topic.title}
                </h3>
                <p className="relative mt-2 text-sm text-porcelain/55 leading-relaxed">
                  {topic.description}
                </p>
                <div className="relative mt-auto pt-4 flex items-center gap-2">
                  <span className="mono-num text-[0.62rem] text-porcelain/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-line-on-ink" />
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>

      <div className="mt-8 flex items-start gap-3 text-sm text-porcelain/55">
        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-marigold shrink-0" />
        <p className="leading-relaxed max-w-2xl">{insightsNotice}</p>
      </div>

      <div className="mt-6">
        <Link
          href="/insights"
          className="link-underline inline-flex items-center gap-2 mono-label text-porcelain hover:text-marigold transition-colors"
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
