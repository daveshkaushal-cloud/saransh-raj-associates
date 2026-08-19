import type { Metadata } from "next";
import { people } from "@/data/people";
import { accentHex, accentOnHex } from "@/lib/accents";
import { FadeUp, SheetReveal } from "@/components/motion/editorial";

export const metadata: Metadata = {
  title: "People",
  description:
    "The people behind the counsel at Saransh Raj & Associates.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-fg-subtle">Index 04 · People</span>
            <span className="folio text-fg-subtle">005 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">The Team</p>
                <p className="margin-note text-fg-muted">
                  The firm works as an integrated team under the guidance of its founder.
                  Further profiles will be added as colleagues are introduced.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-fg max-w-[14ch]">
                  The <span className="serif-italic text-violet">people</span> behind the counsel
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-fg-muted">
                  The firm&apos;s work is shaped by the people who carry it. Below is
                  the founder and principal advocate; the team expands as colleagues
                  are introduced to the practice.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* People list — editorial portrait cards with placeholder fields */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 space-y-8">
          {people.map((person, i) => {
            const hex = accentHex[person.accent];
            const onHex = accentOnHex[person.accent];
            return (
              <FadeUp key={person.slug} delay={i * 0.08}>
                <a
                  href={`/people/${person.slug}`}
                  className="group relative block bg-surface-soft text-fg overflow-hidden border border-line"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Portrait placeholder on accent colour field */}
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
                        <span className="mono-label" style={{ color: onHex, opacity: 0.7 }}>Portrait · 0{i + 1}</span>
                      </div>
                      {/* placeholder notice — no cropped name, no AI face */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-10 text-center">
                        <span className="mono-label" style={{ color: onHex }}>PROFESSIONAL PORTRAIT</span>
                        <span className="mono-label mt-2" style={{ color: onHex }}>TO BE ADDED</span>
                      </div>
                      <div className="absolute bottom-5 right-5 flex items-center gap-2">
                        <span className="mono-num text-[0.6rem]" style={{ color: onHex, opacity: 0.7 }}>{person.initials}/0{i + 1}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-6">
                        <span className="mono-label text-fg-muted">{person.role}</span>
                        <span className="mono-num text-[0.65rem] text-fg-subtle">
                          {String(i + 1).padStart(2, "0")} / {String(people.length).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="display-2 text-fg max-w-[12ch]">{person.name}</h2>
                      <p className="lead mt-5 text-fg-muted max-w-md">{person.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                        {person.focus.slice(0, 4).map((f) => (
                          <span key={f} className="mono-label text-fg-subtle">{f}</span>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-fg-muted group-hover:text-accent transition-colors">
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
            <div className="bg-surface-elevated border border-line text-fg p-8 md:p-12">
              <p className="mono-label text-fg-subtle mb-4">A note on the team</p>
              <p className="lead text-fg-muted max-w-2xl">
                The firm works as an integrated team under the guidance of its
                founder. Further profiles will be added to this page as colleagues
                are introduced to the practice.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
