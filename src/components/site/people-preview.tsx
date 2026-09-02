import Link from "next/link";
import Image from "next/image";
import { people } from "@/data/people";

/**
 * People preview — warm editorial founder card.
 * The founder portrait anchors the card. The details column carries
 * the name, role, summary, focus areas and CTA.
 * Rose-gold accents appear only on the arrow icons, hover
 * states and annotation marks.
 */
export function PeoplePreview() {
  return (
    <div className="space-y-6">
      {people.map((person, i) => (
        <Link
          key={person.slug}
          href={`/people/${person.slug}`}
          className="group relative block bg-porcelain border border-line overflow-hidden hover:border-copper transition-colors duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Founder portrait */}
            <div className="md:col-span-5 relative min-h-[18rem] md:min-h-[22rem] overflow-hidden bg-blush flex items-center justify-center">
              <Image
                src="/images/saransh-raj-portrait.webp"
                alt="Portrait of Saransh Raj, Founder and Principal Advocate"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
              {/* Rose-gold annotation bracket */}
              <div className="absolute top-5 left-5 flex items-center gap-1.5 z-10">
                <div className="h-3 w-3 border-l border-t border-copper" aria-hidden="true" />
                <span className="mono-label text-copper">SR</span>
              </div>
              <div className="absolute bottom-5 right-5 z-10">
                <span className="mono-num text-ink/80">
                  {person.initials}/{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className="mono-label">{person.role}</span>
                <span className="mono-num text-stone-dark">
                  {String(i + 1).padStart(2, "0")} / {String(people.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="display-3 text-ink max-w-[12ch]">{person.name}</h3>
              <p className="lead mt-5 text-charcoal measure">{person.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                {person.focus.slice(0, 4).map((f) => (
                  <li key={f} className="mono-label">{f}</li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-copper transition-colors">
                <span>View profile</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
