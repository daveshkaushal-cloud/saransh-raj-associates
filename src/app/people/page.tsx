import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { people } from "@/data/people";

export const metadata: Metadata = {
  title: "People",
  description:
    "The people behind the counsel at Saransh Raj & Associates.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  return (
    <>
      {/* ============== HERO — ivory ============== */}
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone">Index 04 · People</span>
            <span className="folio text-stone">05 / 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-stone mb-4">The Team</p>
              <p className="margin-note">
                The firm works as an integrated team under the guidance of its founder.
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-espresso max-w-[14ch]">
                The <span className="serif-italic">people</span> behind the counsel
              </h1>
              <p className="lead mt-6 md:mt-8 measure text-charcoal">
                The firm&apos;s work is shaped by the people who carry it. Below is
                the founder and principal advocate; the team expands as colleagues
                are introduced to the practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PEOPLE LIST — porcelain founder card ============== */}
      <section className="bg-porcelain py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 space-y-8">
          {people.map((person, i) => (
            <Link
              key={person.slug}
              href={`/people/${person.slug}`}
              className="group relative block bg-ivory border border-line overflow-hidden hover:border-rose-dark transition-colors duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Portrait — polished architectural composition on blush */}
                <div className="md:col-span-5 relative min-h-[24rem] md:min-h-[32rem] overflow-hidden bg-blush">
                  <Image
                    src="/images/founder-portrait.png"
                    alt={`Portrait of ${person.name} — ${person.role}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  {/* Rose-gold annotation bracket */}
                  <div className="absolute top-5 left-5 flex items-center gap-1.5 z-10">
                    <div className="h-3 w-3 border-l border-t border-rose" aria-hidden="true" />
                    <span className="mono-label text-rose-dark">Portrait · {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="absolute bottom-5 right-5 z-10">
                    <span className="mono-num text-white/80">
                      {person.initials}/{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-6">
                    <span className="mono-label">{person.role}</span>
                    <span className="mono-num text-stone">
                      {String(i + 1).padStart(2, "0")} / {String(people.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="display-2 text-espresso max-w-[12ch]">{person.name}</h2>
                  <p className="lead mt-5 text-charcoal measure">{person.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                    {person.focus.slice(0, 4).map((f) => (
                      <span key={f} className="mono-label">{f}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-rose-dark transition-colors">
                    <span>View full profile</span>
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

          {/* Team note */}
          <div className="bg-beige border border-line p-8 md:p-12">
            <p className="mono-label text-stone mb-4">A note on the team</p>
            <p className="lead text-charcoal measure">
              The firm works as an integrated team under the guidance of its
              founder. The team will expand as colleagues are introduced to the
              practice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
