"use client";

import { insightsNotice, insightsEmpty } from "@/data/insights";
import { FadeUp } from "@/components/motion/editorial";
import Link from "next/link";

/**
 * Insights preview — honest editorial frame.
 * No articles have been published yet; no fabricated titles, dates or
 * categories are shown. Only the notice that publications will appear
 * here as they are released.
 */
export function InsightsPreview() {
  return (
    <div>
      <FadeUp>
        <div className="border border-line bg-surface-elevated p-8 md:p-12">
          <p className="mono-label text-saffron mb-5">Status</p>
          <p className="font-display text-2xl md:text-3xl text-fg leading-snug max-w-2xl">
            {insightsNotice}
          </p>
          <p className="mt-6 text-sm text-fg-muted leading-relaxed max-w-xl">
            {insightsEmpty}
          </p>
        </div>
      </FadeUp>

      <div className="mt-8">
        <Link
          href="/insights"
          className="link-underline inline-flex items-center gap-2 mono-label text-fg-muted hover:text-saffron transition-colors"
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
