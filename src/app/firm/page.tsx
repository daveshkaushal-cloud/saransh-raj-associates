import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { PhilosophyNarrative } from "@/components/site/philosophy-narrative";
import { Rise } from "@/components/motion/reveal";
import { firm, contact } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "The Firm",
  description:
    "Saransh Raj & Associates is a boutique corporate and commercial law firm based in New Delhi, founded by Advocate Saransh Raj.",
  alternates: { canonical: "/firm" },
};

export default function FirmPage() {
  return (
    <>
      <PageHero
        eyebrow="The Firm"
        title={<>Counsel built on </>}
        titleAccent="principle."
        intro={
          <>
            {firm.summary} Founded by Advocate Saransh Raj, the firm was
            established to provide companies, individuals and families with
            considered corporate legal counsel.
          </>
        }
        accent="cobalt"
        meta={[
          { label: "Based in", value: firm.basedIn },
          { label: "Serving across", value: firm.servesAcross },
          { label: "Practice areas", value: `${practiceAreas.length} focused` },
          { label: "Sectors", value: `${sectors.length} industries` },
        ]}
      />

      {/* Story */}
      <section className="bg-ivory py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Rise>
                <p className="eyebrow mb-4">Our Story</p>
              </Rise>
            </div>
            <div className="md:col-span-8">
              <Rise delay={0.1}>
                <div className="space-y-6 text-lg leading-relaxed text-ink/75 max-w-2xl">
                  <p>
                    Founded by Advocate Saransh Raj, the firm was established
                    with a clear purpose: to provide companies, individuals and
                    families with the same quality of corporate legal counsel
                    typically reserved for large institutions.
                  </p>
                  <p>
                    Over time, the firm has built a reputation for combining
                    deep legal expertise with a genuine understanding of
                    clients&apos; commercial realities. Based in New Delhi, it
                    serves clients across India on matters spanning corporate
                    structuring, commercial contracts, mergers and acquisitions,
                    dispute resolution, regulatory compliance, and insolvency
                    proceedings.
                  </p>
                </div>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy scroll narrative */}
      <PhilosophyNarrative />

      {/* Principles */}
      <section className="bg-paper py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Rise>
            <p className="eyebrow mb-3">Principles</p>
            <h2 className="display-2 max-w-[18ch]">
              What the firm stands for
            </h2>
          </Rise>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {firm.principles.map((p, i) => {
              const accents = ["#3157FF", "#FF574D", "#FFB21A", "#8A65FF"];
              const hex = accents[i % accents.length];
              return (
                <Rise key={p.title} delay={i * 0.08}>
                  <div className="group relative bg-ivory border border-line p-7 min-h-[14rem] flex flex-col overflow-hidden">
                    <div
                      className="absolute -top-6 -right-2 font-display text-[6rem] leading-none text-ink/[0.05] select-none"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="h-2.5 w-2.5 rounded-full mb-6"
                      style={{ background: hex }}
                    />
                    <h3 className="display-3 text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm text-ink/60 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice areas summary */}
      <section className="bg-ivory py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Rise>
                <p className="eyebrow mb-3">Practice</p>
                <h2 className="display-2 max-w-[16ch]">
                  Six areas of focused practice
                </h2>
              </Rise>
            </div>
            <Rise delay={0.1}>
              <Link
                href="/expertise"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span>All expertise</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Rise>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {practiceAreas.map((area, i) => (
              <Rise key={area.slug} delay={i * 0.05}>
                <Link
                  href={`/expertise/${area.slug}`}
                  className="group block bg-paper border border-line p-7 hover:border-ink/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-ink/35">
                      {area.index}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-cobalt" />
                  </div>
                  <h3 className="display-3 mt-5 text-2xl">{area.title}</h3>
                  <p className="mt-2 text-sm text-ink/55">{area.short}</p>
                </Link>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-ink text-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Rise>
            <h2 className="display-2 text-ivory max-w-[16ch]">
              Based in {firm.basedIn}, serving across {firm.servesAcross}
            </h2>
          </Rise>
          <Rise delay={0.1}>
            <div className="text-ivory/75 space-y-1">
              <p>{contact.address.full}</p>
              <p>
                <a href={contact.phoneHref} className="link-underline">
                  {contact.phone}
                </a>
                {" · "}
                <a href={contact.emailHref} className="link-underline break-all">
                  {contact.email}
                </a>
              </p>
              <p className="text-ivory/55">{contact.hours}</p>
            </div>
          </Rise>
        </div>
      </section>
    </>
  );
}
