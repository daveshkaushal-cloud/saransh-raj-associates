"use client";

import { useMemo, useState } from "react";
import { insightCategories, insightTopics, insightsNotice } from "@/data/insights";
import { FadeUp, SheetReveal } from "@/components/motion/editorial";

const accentFor: Record<string, string> = {
  Corporate: "#2457FF",
  Contracts: "#D94038",
  Disputes: "#FFC247",
  Regulatory: "#087E68",
  Insolvency: "#5E3FD3",
};

/**
 * Insights index — a contemporary magazine-style index showing only
 * forthcoming (approved) content. Honest editorial framing: no
 * fabricated articles, dates or authors.
 */
export default function InsightsPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? insightTopics
        : insightTopics.filter((t) => t.category === filter),
    [filter]
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-porcelain pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-ink/50">Chapter 05 · Insights</span>
            <span className="folio text-ink/45">006 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-4">Notes &amp; Publications</p>
                <p className="margin-note">
                  An honest index. No articles have been published yet —
                  titles shown are intended areas of writing.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  The firm&apos;s{" "}
                  <span className="serif-italic text-marigold">notebook</span>
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-ink/70">
                  This section will host the firm&apos;s publications and notes.
                  Below are the intended areas of writing; published work will
                  replace them as it becomes available.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + index */}
      <section className="bg-porcelain py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          {/* colour legend / filter */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-line">
            <span className="mono-label text-ink/50 mr-3">Filter</span>
            {insightCategories.map((cat) => {
              const active = cat === filter;
              const hex = cat !== "All" ? accentFor[cat] : "#0B1020";
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`group inline-flex items-center gap-2 px-3 py-2 border transition-colors duration-200 ${
                    active
                      ? "bg-ink text-porcelain border-ink"
                      : "bg-transparent text-ink/60 border-line hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  {cat !== "All" && (
                    <span className="h-2 w-2 rounded-full" style={{ background: active ? "#F8FAFD" : hex }} />
                  )}
                  <span className="mono-label">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Magazine-style index — large editorial entries */}
          <div className="space-y-px">
            {filtered.map((topic, i) => {
              const hex = accentFor[topic.category] || "#0B1020";
              return (
                <FadeUp key={topic.slug} delay={i * 0.05}>
                  <div className="group relative grid grid-cols-12 gap-4 items-center py-8 md:py-10 border-t border-line hover:bg-paper transition-colors">
                    {/* colour field that grows on hover */}
                    <span
                      className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-500"
                      style={{ background: hex }}
                      aria-hidden="true"
                    />
                    <span className="relative col-span-2 md:col-span-1 mono-num text-sm text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative col-span-3 md:col-span-2">
                      <span className="mono-label" style={{ color: hex }}>{topic.category}</span>
                    </span>
                    <span className="relative col-span-7 md:col-span-6">
                      <span className="font-display text-xl md:text-3xl text-ink leading-tight">
                        {topic.title}
                      </span>
                    </span>
                    <span className="relative col-span-12 md:col-span-3 flex md:justify-end items-center gap-3">
                      <span className="mono-label text-ink/40">Forthcoming</span>
                      <span className="h-2 w-2 rounded-full" style={{ background: hex }} />
                    </span>
                    {/* description on its own row */}
                    <span className="relative col-span-12 md:col-start-4 md:col-span-9 text-sm text-ink/55 leading-relaxed md:pl-0">
                      {topic.description}
                    </span>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Notice */}
          <div className="mt-12 flex items-start gap-3 text-sm text-ink/55 border-t border-line pt-6">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-marigold shrink-0" />
            <p className="leading-relaxed max-w-2xl">{insightsNotice}</p>
          </div>
        </div>
      </section>
    </>
  );
}
