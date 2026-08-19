"use client";

import Link from "next/link";
import { people } from "@/data/people";
import { accentHex } from "@/lib/accents";
import { FadeUp, CropReveal } from "@/components/motion/editorial";

/**
 * People preview — editorial portrait cards.
 * Each portrait field carries a "PROFESSIONAL PORTRAIT / TO BE ADDED"
 * placeholder on a subtle elevated dark surface — no photography
 * (none approved), no cropped name, no initials-in-gradient-boxes.
 * The details panel keeps the name, role, summary, focus areas and CTA.
 */
export function PeoplePreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {people.map((person, i) => {
        const hex = accentHex[person.accent];
        return (
          <FadeUp key={person.slug} delay={i * 0.08}>
            <Link
              href={`/people/${person.slug}`}
              className="group relative block bg-surface-soft text-fg overflow-hidden border border-line"
            >
              <div className="grid grid-cols-5 min-h-[20rem]">
                {/* Portrait placeholder — elevated dark surface */}
                <div className="relative col-span-2 overflow-hidden bg-surface-elevated">
                  <PortraitPlaceholder hex={hex} index={i + 1} />
                </div>
                {/* Details */}
                <div className="col-span-3 p-6 md:p-7 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-fg-subtle">{person.role}</span>
                    <span className="mono-num text-[0.65rem] text-fg-subtle">
                      {String(i + 1).padStart(2, "0")} / {String(people.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="display-3 mt-3 text-2xl md:text-3xl text-fg">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm text-fg-muted leading-relaxed">
                    {person.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                    {person.focus.slice(0, 3).map((f) => (
                      <li key={f} className="mono-label text-fg-subtle">{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 flex items-center gap-2 text-[0.8rem] font-medium text-fg-muted group-hover:text-accent transition-colors">
                    <span>View profile</span>
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>
        );
      })}

      {/* Editorial note about the team */}
      <FadeUp delay={0.16}>
        <div className="bg-surface-elevated text-fg p-7 md:p-8 flex flex-col justify-between min-h-[14rem] border border-line">
          <div>
            <p className="mono-label text-fg-subtle mb-4">The team</p>
            <p className="text-sm leading-relaxed text-fg-muted max-w-sm">
              The firm works as an integrated team under the guidance of its
              founder. Further profiles will be added as colleagues are introduced.
            </p>
          </div>
          <Link href="/people" className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-fg">
            <span>Meet the people</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}

/**
 * Portrait placeholder — a "PROFESSIONAL PORTRAIT / TO BE ADDED" notice
 * set on a subtle elevated dark surface. Architectural rule lines and an
 * annotation bracket anchor the field editorially. The accent colour is
 * used only as a small bracket marker so the field reads as a deliberate
 * placeholder rather than a finished portrait.
 */
function PortraitPlaceholder({ hex, index }: { hex: string; index: number }) {
  return (
    <CropReveal className="absolute inset-0">
      <div className="crop-target absolute inset-0">
        {/* architectural rule lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="rgba(245,241,232,0.10)" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="rgba(245,241,232,0.10)" strokeWidth="1" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="rgba(245,241,232,0.10)" strokeWidth="1" />
        </svg>

        {/* annotation bracket */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <div className="h-3 w-3 border-l border-t" style={{ borderColor: hex }} />
          <span className="mono-label text-fg-subtle">Portrait</span>
        </div>

        {/* placeholder notice */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <span className="mono-label text-fg-muted">PROFESSIONAL PORTRAIT</span>
          <span className="mono-label text-fg-muted mt-1">TO BE ADDED</span>
        </div>

        {/* bottom folio */}
        <div className="absolute bottom-3 right-4">
          <span className="mono-num text-[0.6rem] text-fg-subtle">SR/0{index}</span>
        </div>
      </div>
    </CropReveal>
  );
}
