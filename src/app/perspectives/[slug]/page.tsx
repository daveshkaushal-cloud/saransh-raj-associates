import type { Metadata } from "next";
import Link from "next/link";
import {
  perspectives,
  getPerspective,
  perspectivesDisclaimer,
} from "@/data/perspectives";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { getPerson } from "@/data/people";
import { firm, contact } from "@/data/firm";

export function generateStaticParams() {
  return perspectives.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPerspective(slug);
  if (!article) return { title: "Perspective not found" };
  return {
    title: article.title,
    description: article.abstract,
    alternates: { canonical: `/perspectives/${article.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${article.title} — Perspectives`,
      description: article.abstract,
      url: `/perspectives/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function PerspectiveArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getPerspective(slug);
  if (!article) {
    // notFound() would be cleaner but this works too
    return (
      <section className="bg-paper py-20 md:py-32 text-center">
        <h1 className="display-2 text-ink">Article not found</h1>
        <Link
          href="/perspectives"
          className="mt-6 inline-flex items-center gap-2 mono-label text-copper hover:text-oxblood"
        >
          ← Back to Perspectives
        </Link>
      </section>
    );
  }

  const practiceArea = getPracticeArea(article.practice);
  const author = getPerson(article.authorSlug);
  const relatedArticles = perspectives
    .filter((p) => p.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero / article header */}
      <section className="relative bg-paper pt-10 md:pt-16 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10">
            <Link
              href="/perspectives"
              className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
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
              <span>Perspectives</span>
            </Link>
            <span className="folio">{article.dateLabel}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-copper mb-2">{article.type}</p>
              <p className="mono-num text-stone-dark">{article.dateLabel}</p>
              <p className="mono-label text-stone-dark mt-4">
                {article.readTime}
              </p>
              {practiceArea && (
                <Link
                  href={`/expertise/${practiceArea.slug}`}
                  className="inline-flex items-center gap-2 mt-4 mono-label text-copper hover:text-oxblood"
                >
                  <span className="h-2 w-2 rounded-full bg-copper" />
                  {practiceArea.title}
                </Link>
              )}
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-ink max-w-[16ch]">{article.title}</h1>
              <p className="lead mt-6 md:mt-8 measure">{article.abstract}</p>
              {author && (
                <Link
                  href={`/people/${author.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-charcoal hover:text-copper transition-colors"
                >
                  <span className="grid place-items-center h-8 w-8 bg-oxblood text-ivory font-display text-xs">
                    {author.initials}
                  </span>
                  <span>
                    <span className="block text-ink font-medium">
                      {author.name}
                    </span>
                    <span className="mono-label text-stone-dark">
                      {author.role}
                    </span>
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-ivory py-12 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Margin annotation */}
            <aside className="md:col-span-3 hidden md:block">
              <div className="sticky top-24">
                <p className="mono-label text-stone-dark mb-2">PRACTICE</p>
                <p className="text-sm text-ink">
                  {article.practiceLabel}
                </p>
                <div className="mt-6 h-px bg-line" />
                <p className="mono-label text-stone-dark mt-6 mb-2">
                  RELATED SECTORS
                </p>
                <ul className="space-y-1.5">
                  {article.relatedSectors.map((s) => (
                    <li key={s}>
                      <Link
                        href={`/sectors#${s}`}
                        className="text-sm text-charcoal hover:text-copper transition-colors capitalize"
                      >
                        {s.replace(/-/g, " ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Body content */}
            <article className="md:col-span-8 md:col-start-5">
              <div className="max-w-[68ch] space-y-6">
                {article.body.map((para, i) => (
                  <p
                    key={i}
                    className={`text-[1.0625rem] md:text-[1.125rem] leading-relaxed text-charcoal ${
                      i === 0
                        ? "first-letter:font-display first-letter:text-5xl first-letter:text-copper first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1"
                        : ""
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-12 pt-6 border-t border-line">
                <p className="text-sm text-stone-dark measure leading-relaxed">
                  {perspectivesDisclaimer}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="bg-paper py-12 md:py-20 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="display-3 text-ink mb-8">Related perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/perspectives/${rel.slug}`}
                className="group block border border-line bg-ivory p-6 hover:border-copper transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="mono-label text-copper">{rel.type}</span>
                  <span className="mono-num text-stone-dark">{rel.dateLabel}</span>
                </div>
                <h3 className="font-display text-lg md:text-xl text-ink leading-tight group-hover:text-oxblood transition-colors">
                  {rel.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal line-clamp-2">
                  {rel.abstract}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-copper group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
