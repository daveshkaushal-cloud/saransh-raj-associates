import type { Metadata } from "next";
import Link from "next/link";
import { insightsNotice, insightsEmpty } from "@/data/insights";

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
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone-dark">Notes · Publications</span>
            <span className="folio text-stone-dark">— / —</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div>
                <p className="mono-label text-stone-dark mb-4">
                  Notes &amp; Publications
                </p>
                <p className="margin-note">
                  An honest index. No articles have been published yet.
                </p>
              </div>
            </div>
            <div className="md:col-span-9">
              <div>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  The firm&apos;s{" "}
                  <span className="serif-italic">notebook</span>
                </h1>
              </div>
              <div>
                <p className="lead mt-6 md:mt-8 measure text-charcoal">
                  {insightsNotice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty-state notice */}
      <section className="bg-ivory py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div>
            <div className="border border-line bg-porcelain p-8 md:p-12 lg:p-16">
              <div className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0"
                  aria-hidden="true"
                />
                <div className="measure">
                  <p className="mono-label text-copper mb-4">Status</p>
                  <p className="display-3 text-ink leading-snug">
                    {insightsNotice}
                  </p>
                  <p className="mt-6 body-condensed text-charcoal">
                    {insightsEmpty}
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-line">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
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
          </div>
        </div>
      </section>
    </>
  );
}
