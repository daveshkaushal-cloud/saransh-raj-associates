import type { Metadata } from "next";
import Link from "next/link";
import {
  perspectives,
  perspectiveCategories,
  perspectivesDisclaimer,
} from "@/data/perspectives";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "Legal articles, case notes, explainers and sector briefings from Saransh Raj & Associates — a New Delhi corporate and commercial legal practice.",
  alternates: { canonical: "/perspectives" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Perspectives — Saransh Raj & Associates",
    description:
      "Legal articles, case notes, explainers and sector briefings on corporate and commercial law.",
    url: "/perspectives",
    type: "website",
  },
};

export default function PerspectivesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-rosewash pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label mb-3">Legal Notes & Publications</p>
              <p className="margin-note">
                Articles, case notes, explainers and sector briefings on
                corporate and commercial law.
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-ink max-w-[14ch]">
                Perspectives on corporate &amp; commercial law
              </h1>
              <p className="lead mt-6 md:mt-8 measure">
                A working archive of notes on corporate structuring, commercial
                contracts, transactions, disputes, regulatory compliance and
                insolvency — written to be read, not merely to fill a page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="bg-ivory py-12 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {/* Category filter labels */}
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-line">
            <span className="mono-label text-stone-dark">Categories</span>
            {perspectiveCategories.map((cat) => (
              <span
                key={cat}
                className="mono-label text-stone-dark border border-line px-3 py-1.5"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Article list */}
          <div className="border-t border-line">
            {perspectives.map((article) => (
              <Link
                key={article.slug}
                href={`/perspectives/${article.slug}`}
                className="group relative grid grid-cols-12 gap-4 items-start py-6 md:py-8 border-b border-line hover:bg-paper transition-colors"
              >
                <span className="col-span-12 md:col-span-2 mono-label text-copper">
                  {article.type}
                </span>
                <div className="col-span-12 md:col-span-8">
                  <h2 className="font-display text-xl md:text-2xl text-ink leading-tight group-hover:text-oxblood transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-charcoal measure">
                    {article.abstract}
                  </p>
                </div>
                <span className="col-span-6 md:col-span-2 flex md:justify-end items-start gap-2">
                  <span className="mono-label text-stone-dark">
                    {article.readTime}
                  </span>
                  <svg
                    className="h-5 w-5 text-stone-dark group-hover:text-copper group-hover:translate-x-1 transition-all duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 pt-6 border-t border-line">
            <div className="flex items-start gap-3 text-sm text-stone-dark measure">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper shrink-0" />
              <p className="leading-relaxed">{perspectivesDisclaimer}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
