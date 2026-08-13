import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Rise } from "@/components/motion/reveal";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";
import { contact } from "@/data/firm";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Practice area not found" };
  return {
    title: area.title,
    description: area.overview,
    alternates: { canonical: `/expertise/${area.slug}` },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const hex = accentHex[area.accent];
  const idx = practiceAreas.findIndex((p) => p.slug === slug);
  const prev = practiceAreas[(idx - 1 + practiceAreas.length) % practiceAreas.length];
  const next = practiceAreas[(idx + 1) % practiceAreas.length];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ivory pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-60" aria-hidden="true" />
        <div
          className="absolute -top-32 -right-24 h-[55vh] w-[55vh] rounded-full blur-3xl opacity-30"
          style={{ background: `radial-gradient(circle, ${hex}, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <Rise>
            <Link
              href="/expertise"
              className="link-underline inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink mb-8"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>All expertise</span>
            </Link>
          </Rise>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-5xl md:text-6xl" style={{ color: hex }}>
              {area.index}
            </span>
            <span className="h-3 w-3 rounded-full" style={{ background: hex }} />
          </div>
          <h1 className="display-1 max-w-[14ch]">
            <Rise>
              <span className="block">{area.title}</span>
            </Rise>
          </h1>
          <Rise delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
              {area.overview}
            </p>
          </Rise>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Rise>
                <p className="eyebrow mb-3">What this covers</p>
                <h2 className="display-2 text-3xl md:text-4xl">Services</h2>
              </Rise>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-px">
                {area.services.map((s, i) => (
                  <Rise key={s} delay={i * 0.06}>
                    <li className="group flex items-center gap-5 border-t border-line py-5">
                      <span className="font-sans text-[0.7rem] tabular-nums text-ink/40 w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display-3 text-xl md:text-2xl flex-1">
                        {s}
                      </span>
                      <span
                        className="h-2 w-2 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"
                        style={{ background: hex }}
                      />
                    </li>
                  </Rise>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related sectors / approach */}
      <section className="bg-ivory py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <Rise>
                <p className="eyebrow mb-3">Approach</p>
                <h2 className="display-2 max-w-[14ch]">
                  Methodical, attentive, client-focused
                </h2>
              </Rise>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Rise delay={0.1}>
                <p className="text-lg leading-relaxed text-ink/70">
                  The firm approaches {area.title.toLowerCase()} with attention
                  to detail and to the commercial realities of those it advises.
                  Each engagement begins with understanding the objective, then
                  moves through structured analysis toward clear, actionable
                  counsel.
                </p>
                <p className="mt-6 text-base text-ink/55">
                  For an overview of the firm&apos;s approach across all
                  practice areas, see{" "}
                  <Link href="/firm" className="link-underline text-ink">
                    The Firm
                  </Link>
                  .
                </p>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-ink text-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Rise>
            <h2 className="display-2 text-ivory max-w-[18ch]">
              Questions about {area.title.toLowerCase()}?
            </h2>
          </Rise>
          <Rise delay={0.1}>
            <div className="text-ivory/75 space-y-1">
              <p>
                <a href={contact.emailHref} className="link-underline break-all">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={contact.phoneHref} className="link-underline">
                  {contact.phone}
                </a>
              </p>
              <p className="text-ivory/55">{contact.hours}</p>
            </div>
          </Rise>
        </div>
      </section>

      {/* Prev / next */}
      <nav className="bg-ivory border-t border-line" aria-label="Practice area navigation">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-2">
          <Link
            href={`/expertise/${prev.slug}`}
            className="group border-r border-line py-8 md:py-10 pr-4 flex flex-col"
          >
            <span className="eyebrow text-ink/40 mb-2">Previous</span>
            <span className="display-3 text-xl md:text-2xl flex items-center gap-3">
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/expertise/${next.slug}`}
            className="group py-8 md:py-10 pl-4 flex flex-col items-end text-right"
          >
            <span className="eyebrow text-ink/40 mb-2">Next</span>
            <span className="display-3 text-xl md:text-2xl flex items-center gap-3">
              {next.title}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
