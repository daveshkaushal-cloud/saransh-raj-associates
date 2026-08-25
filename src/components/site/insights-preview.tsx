"use client";

import { insightsNotice, insightsEmpty } from "@/data/insights";
import Link from "next/link";

/**
 * Insights preview — honest editorial frame.
 * No articles have been published yet; no fabricated titles, dates or
 * categories are shown. Only the notice that publications will appear
 * here as they are released.
 *
 * Warm editorial palette: porcelain notice card with espresso headings,
 * charcoal body text and a rose-gold status label.
 *
 * NOTE: this component is no longer imported by the homepage (the
 * homepage now composes its own inline sections). Kept here so the
 * route-independent preview pattern remains available.
 */
export function InsightsPreview() {
  return (
    <div>
      <div>
        <div className="border border-line bg-porcelain p-8 md:p-12">
          <p className="mono-label text-rose-dark mb-5">Status</p>
          <p className="display-3 text-espresso leading-snug measure">
            {insightsNotice}
          </p>
          <p className="mt-6 body-condensed text-charcoal measure">
            {insightsEmpty}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/insights"
          className="link-underline inline-flex items-center gap-2 mono-label text-stone hover:text-rose-dark transition-colors"
        >
          <span>Visit the insights index</span>
          <svg
            className="h-4 w-4"
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
        </Link>
      </div>
    </div>
  );
}
