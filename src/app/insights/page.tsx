import type { Metadata } from "next";
import Link from "next/link";
import { insightsNotice, insightsEmpty } from "@/data/insights";
import { FadeUp, SheetReveal } from "@/components/motion/editorial";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights and publications from Saransh Raj & Associates. No articles have been published yet.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-fg-muted">Index 05 · Insights</span>
            <span className="folio text-fg-subtle">006 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">
                  Notes &amp; Publications
                </p>
                <p className="margin-note">
                  An honest index. No articles have been published yet.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-fg max-w-[14ch]">
                  The firm&apos;s{" "}
                  <span className="serif-italic text-saffron">notebook</span>
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-fg-muted">
                  {insightsNotice}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Empty-state notice */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <FadeUp>
            <div className="border border-line bg-surface-elevated p-10 md:p-16">
              <div className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron shrink-0"
                  aria-hidden="true"
                />
                <div className="max-w-2xl">
                  <p className="mono-label text-saffron mb-4">Status</p>
                  <p className="font-display text-2xl md:text-3xl text-fg leading-snug">
                    {insightsNotice}
                  </p>
                  <p className="mt-6 text-sm text-fg-muted leading-relaxed">
                    {insightsEmpty}
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-line">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 mono-label text-fg-muted hover:text-accent transition-colors"
                >
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 12H5M11 18l-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Return to the homepage</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
