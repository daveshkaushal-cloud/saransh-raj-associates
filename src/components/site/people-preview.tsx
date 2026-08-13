"use client";

import Link from "next/link";
import { people } from "@/data/people";
import { accentHex } from "@/lib/accents";
import { FadeUp, CropReveal } from "@/components/motion/editorial";

/**
 * People preview — editorial portrait cards.
 * No initials-in-gradient-boxes. Instead, an art-directed typographic
 * portrait field: the person's name set large in Bodoni, layered with
 * annotation marks, a colour edge, and architectural rules.
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
              className="group relative block bg-ink text-porcelain overflow-hidden"
            >
              <div className="grid grid-cols-5 min-h-[20rem]">
                {/* Editorial portrait field */}
                <div
                  className="relative col-span-2 overflow-hidden"
                  style={{ background: hex }}
                >
                  <PortraitField hex={hex} name={person.name} />
                </div>
                {/* Details */}
                <div className="col-span-3 p-6 md:p-7 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-porcelain/50">{person.role}</span>
                    <span className="mono-num text-[0.65rem] text-porcelain/40">
                      {String(i + 1).padStart(2, "0")} / {String(people.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="display-3 mt-3 text-2xl md:text-3xl text-porcelain">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm text-porcelain/65 leading-relaxed">
                    {person.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                    {person.focus.slice(0, 3).map((f) => (
                      <li key={f} className="mono-label text-porcelain/45">{f}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 flex items-center gap-2 text-[0.8rem] font-medium text-porcelain/70 group-hover:text-marigold transition-colors">
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
        <div className="bg-paper text-ink p-7 md:p-8 flex flex-col justify-between min-h-[14rem] border border-line">
          <div>
            <p className="mono-label text-ink/50 mb-4">The team</p>
            <p className="text-sm leading-relaxed text-ink/70 max-w-sm">
              The firm works as an integrated team under the guidance of its
              founder. Further profiles will be added as colleagues are introduced.
            </p>
          </div>
          <Link href="/people" className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
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
 * Editorial typographic portrait — the person's name set large in
 * Bodoni, cropped and layered with annotation marks and architectural
 * rules. No photography (none approved), no initials-in-gradient-boxes.
 */
function PortraitField({ hex, name }: { hex: string; name: string }) {
  const first = name.split(" ")[0];
  const rest = name.split(" ").slice(1).join(" ");
  return (
    <CropReveal className="absolute inset-0">
      <div className="crop-target absolute inset-0">
        {/* architectural rule lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </svg>

        {/* annotation bracket */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <div className="h-3 w-3 border-l border-t" style={{ borderColor: "rgba(255,255,255,0.5)" }} />
          <span className="mono-label text-white/60">Portrait</span>
        </div>

        {/* large cropped name */}
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <span className="font-display text-white/95 text-[3.5rem] md:text-[4.5rem] leading-[0.82] tracking-tight">
            {first}
          </span>
          {rest && (
            <span className="font-display italic text-white/70 text-[1.5rem] md:text-[2rem] leading-tight mt-1">
              {rest}
            </span>
          )}
        </div>

        {/* bottom folio */}
        <div className="absolute bottom-3 right-4">
          <span className="mono-num text-[0.6rem] text-white/50">SR/01</span>
        </div>
      </div>
    </CropReveal>
  );
}
