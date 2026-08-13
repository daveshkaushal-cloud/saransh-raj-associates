"use client";

import Link from "next/link";
import { people } from "@/data/people";
import { accentHex } from "@/lib/accents";
import { Magnetic } from "@/components/motion/magnetic";
import { Rise } from "@/components/motion/reveal";

/**
 * People preview — editorial portrait cards with subtle magnetic interaction.
 * Uses original abstract monogram portraits (no invented photography).
 */
export function PeoplePreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {people.map((person, i) => {
        const hex = accentHex[person.accent];
        return (
          <Rise key={person.slug} delay={i * 0.08}>
            <Magnetic strength={0.12}>
              <Link
                href={`/people/${person.slug}`}
                className="group relative block bg-paper border border-line overflow-hidden"
              >
                <div className="grid grid-cols-5">
                  {/* Abstract portrait */}
                  <div
                    className="relative col-span-2 aspect-[3/4] overflow-hidden"
                    style={{ background: `linear-gradient(150deg, ${hex}, #10101A)` }}
                  >
                    <PortraitField hex={hex} initials={person.initials} />
                  </div>
                  {/* Details */}
                  <div className="col-span-3 p-6 md:p-7 flex flex-col">
                    <p className="eyebrow text-ink/45">{person.role}</p>
                    <h3 className="display-3 mt-3 text-2xl md:text-3xl">
                      {person.name}
                    </h3>
                    <p className="mt-3 text-sm text-ink/60 leading-relaxed">
                      {person.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                      {person.focus.slice(0, 3).map((f) => (
                        <li key={f} className="text-[0.72rem] text-ink/45">
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-5 flex items-center gap-2 text-[0.8rem] font-medium text-ink/70 group-hover:text-ink transition-colors">
                      <span>View profile</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </Magnetic>
          </Rise>
        );
      })}

      {/* Editorial note about the team */}
      <Rise delay={0.16}>
        <div className="bg-ink text-ivory p-7 md:p-8 flex flex-col justify-between min-h-[14rem]">
          <p className="eyebrow text-ivory/50">The team</p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/75 max-w-sm">
            The firm works as an integrated team under the guidance of its
            founder. Further profiles will be added as colleagues are introduced.
          </p>
          <Link
            href="/people"
            className="link-underline mt-6 inline-flex items-center gap-2 text-sm text-ivory"
          >
            <span>Meet the people</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Rise>
    </div>
  );
}

function PortraitField({ hex, initials }: { hex: string; initials: string }) {
  return (
    <div className="absolute inset-0">
      {/* layered planes */}
      <div className="absolute inset-0 opacity-60 dotted-grid" style={{ color: "rgba(255,255,255,0.5)" }} />
      <div
        className="absolute -inset-6 opacity-40"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${hex}aa, transparent 60%)`,
        }}
      />
      {/* diagonal lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="0" y1="70%" x2="100%" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="0" y1="40%" x2="100%" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[5rem] text-ivory/90 leading-none">
          {initials}
        </span>
      </div>
    </div>
  );
}
