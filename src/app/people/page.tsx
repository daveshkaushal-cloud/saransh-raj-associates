import type { Metadata } from "next";
import Link from "next/link";
import { people, teamPracticeModel, joiningTheFirm } from "@/data/people";
import { firm, contact } from "@/data/firm";
import { accentHex, accentOnHex } from "@/lib/accents";
import { FadeUp, SheetReveal, RuleDraw } from "@/components/motion/editorial";

export const metadata: Metadata = {
  title: "People",
  description:
    "The people behind the counsel at Saransh Raj & Associates.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  const founder = people[0];
  const founderHex = accentHex[founder.accent];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-porcelain pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-ink/50">Chapter 04 · People</span>
            <span className="folio text-ink/45">005 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-4">The Team</p>
                <p className="margin-note">
                  The firm works as an integrated team under the guidance of its founder.
                  Further profiles will be added as colleagues are introduced.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  The <span className="serif-italic text-aubergine">people</span> behind the counsel
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-ink/70">
                  The firm&apos;s work is shaped by the people who carry it. Below is
                  the founder and principal advocate; the team expands as colleagues
                  are introduced to the practice.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* People list — editorial full-bleed portraits */}
      <section className="bg-porcelain py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 space-y-8">
          {people.map((person, i) => {
            const hex = accentHex[person.accent];
            const onHex = accentOnHex[person.accent];
            return (
              <FadeUp key={person.slug} delay={i * 0.08}>
                <a
                  href={`/people/${person.slug}`}
                  className="group relative block bg-ink text-porcelain overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Full-bleed editorial portrait field */}
                    <div
                      className="md:col-span-5 relative min-h-[24rem] md:min-h-[32rem] overflow-hidden"
                      style={{ background: hex }}
                    >
                      {/* architectural rule lines */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                        <line x1="0" y1="25%" x2="100%" y2="25%" stroke={`${onHex}29`} strokeWidth="1" />
                        <line x1="0" y1="75%" x2="100%" y2="75%" stroke={`${onHex}1F`} strokeWidth="1" />
                        <line x1="45%" y1="0" x2="45%" y2="100%" stroke={`${onHex}14`} strokeWidth="1" />
                      </svg>
                      {/* annotation bracket */}
                      <div className="absolute top-5 left-5 flex items-center gap-1.5">
                        <div className="h-3 w-3 border-l border-t" style={{ borderColor: `${onHex}80` }} />
                        <span className="mono-label" style={{ color: onHex, opacity: 0.6 }}>Portrait · 0{i + 1}</span>
                      </div>
                      {/* large cropped name */}
                      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
                        <span className="font-display text-[3rem] md:text-[5rem] leading-[0.82] tracking-tight" style={{ color: onHex, opacity: 0.95 }}>
                          {person.name.split(" ")[0]}
                        </span>
                        {person.name.split(" ").slice(1).join(" ") && (
                          <span className="font-display italic text-[1.5rem] md:text-[2.5rem] leading-tight mt-1" style={{ color: onHex, opacity: 0.7 }}>
                            {person.name.split(" ").slice(1).join(" ")}
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-5 right-5 flex items-center gap-2">
                        <span className="mono-num text-[0.6rem]" style={{ color: onHex, opacity: 0.5 }}>{person.initials}/0{i + 1}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-6">
                        <span className="mono-label text-porcelain/55">{person.role}</span>
                        <span className="mono-num text-[0.65rem] text-porcelain/40">
                          {String(i + 1).padStart(2, "0")} / {String(people.length).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="display-2 text-porcelain max-w-[12ch]">{person.name}</h2>
                      <p className="lead mt-5 text-porcelain/70 max-w-md">{person.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                        {person.focus.slice(0, 4).map((f) => (
                          <span key={f} className="mono-label text-porcelain/50">{f}</span>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-porcelain/75 group-hover:text-marigold transition-colors">
                        <span>View full profile</span>
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </FadeUp>
            );
          })}

          {/* Team note */}
          <FadeUp delay={0.16}>
            <div className="bg-paper border border-line p-8 md:p-12">
              <p className="mono-label text-ink/50 mb-4">A note on the team</p>
              <p className="lead text-ink/70 max-w-2xl">
                The firm works as an integrated team under the guidance of its
                founder. Further profiles will be added to this page as colleagues
                are introduced to the practice.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============== Pull-quote callout ============== */}
      <section className="bg-paper py-20 md:py-28 border-y border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <FadeUp>
            <div className="relative max-w-4xl mx-auto text-center">
              <span
                className="font-display select-none pointer-events-none absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] leading-none"
                style={{ color: `${founderHex}22` }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative">
                <p className="font-display text-2xl md:text-4xl leading-snug text-ink max-w-[28ch] mx-auto">
                  {founder.quote.text}
                </p>
                <footer className="mt-8">
                  <span
                    className="inline-block h-px w-12 mb-4"
                    style={{ background: founderHex }}
                    aria-hidden="true"
                  />
                  <p className="mono-label text-ink/60">{founder.quote.attribution}</p>
                  <p className="mt-2 text-sm text-ink/50">
                    {founder.name} · {founder.role}
                  </p>
                </footer>
              </blockquote>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============== How the team works — pillars ============== */}
      <section className="bg-porcelain py-20 md:py-32 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-4">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-3">§ Practice model</p>
                <h2 className="display-2 max-w-[14ch]">{teamPracticeModel.title}</h2>
              </FadeUp>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <FadeUp delay={0.1}>
                <p className="body-condensed text-ink/65 max-w-md">
                  {teamPracticeModel.intro}
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {teamPracticeModel.pillars.map((pillar, i) => (
              <FadeUp key={pillar.title} delay={i * 0.08}>
                <div className="bg-porcelain p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="mono-num text-sm" style={{ color: founderHex }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mono-label text-ink/45">Pillar</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-ink/65">
                    {pillar.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <RuleDraw className="mt-10 max-w-md" />
        </div>
      </section>

      {/* ============== Joining the firm — pathways ============== */}
      <section className="bg-paper py-20 md:py-32 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-4">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-3">§ Careers &amp; internships</p>
                <h2 className="display-2 max-w-[14ch]">{joiningTheFirm.title}</h2>
              </FadeUp>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <FadeUp delay={0.1}>
                <p className="body-condensed text-ink/65 max-w-md">
                  {joiningTheFirm.intro}
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="border-t border-line">
            {joiningTheFirm.pathways.map((pathway, i) => (
              <FadeUp key={pathway.title} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 items-baseline border-b border-line py-8 md:py-10">
                  <div className="col-span-2 md:col-span-1">
                    <span className="mono-num text-sm" style={{ color: founderHex }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                      {pathway.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-6 md:col-start-7">
                    <p className="text-[0.95rem] leading-relaxed text-ink/70">
                      {pathway.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Application note */}
          <FadeUp delay={0.16}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-ink text-porcelain p-8 md:p-12">
              <div className="md:col-span-8">
                <p className="mono-label text-porcelain/55 mb-3">Apply</p>
                <p className="lead text-porcelain/85 max-w-2xl">
                  {joiningTheFirm.contactNote}
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <a
                  href={contact.emailHref}
                  className="inline-flex items-center gap-2 link-underline text-marigold font-medium"
                >
                  <span>{contact.email}</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============== Firm values strip ============== */}
      <section className="bg-porcelain py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <FadeUp>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: founderHex }} />
              <p className="mono-label text-ink/55">§ What guides the practice</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {firm.principles.map((principle, i) => (
              <FadeUp key={principle.title} delay={i * 0.06}>
                <div className="border-t border-line pt-5">
                  <h3 className="font-display text-lg md:text-xl text-ink mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-[0.88rem] leading-relaxed text-ink/65">
                    {principle.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
