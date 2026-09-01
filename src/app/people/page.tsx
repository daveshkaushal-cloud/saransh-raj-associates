import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { people } from "@/data/people";

export const metadata: Metadata = {
  title: "People — Leadership",
  description:
    "The leadership of Saransh Raj & Associates. The practice is led by its founder and principal advocate, Saransh Raj.",
  alternates: { canonical: "/people" },
};

/**
 * People index. The firm has only one public profile — the founder.
 *
 * Language: "Leadership" — does not imply a larger team than exists. No
 * "integrated team", "team will expand" or "further profiles will be
 * added" phrasing. The page is concise and factual.
 */
export default function PeoplePage() {
  const founder = people[0];

  return (
    <>
      {/* ============== HERO — ivory ============== */}
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone-dark">Index 04 · People</span>
            <span className="folio text-stone-dark">04 / 07</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">Leadership</p>
              <p className="margin-note">
                The practice is led by its founder. The profile below sets out
                his role, qualifications and focus.
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-ink max-w-[14ch]">
                The <span className="serif-italic">leadership</span> of the firm
              </h1>
              <p className="lead mt-6 md:mt-8 measure text-charcoal">
                Saransh Raj &amp; Associates is led by its founder and principal
                advocate, Saransh Raj. The profile that follows sets out his
                practice focus, qualifications and approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOUNDER PROFILE — porcelain founder card ============== */}
      <section className="bg-porcelain py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Link
            href={`/people/${founder.slug}`}
            className="group relative block bg-ivory border border-line overflow-hidden hover:border-copper transition-colors duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* SR monogram — elegant neutral placeholder on blush */}
              <div className="md:col-span-5 relative min-h-[24rem] md:min-h-[32rem] overflow-hidden bg-blush flex items-center justify-center">
                <Image
                  src="/images/sr-monogram.png"
                  alt="Saransh Raj monogram"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                {/* Rose-gold annotation bracket */}
                <div className="absolute top-5 left-5 flex items-center gap-1.5 z-10">
                  <div className="h-3 w-3 border-l border-t border-copper" aria-hidden="true" />
                  <span className="mono-label text-copper">SR · 01</span>
                </div>
                <div className="absolute bottom-5 right-5 z-10">
                  <span className="mono-num text-ink/80">{founder.initials}/01</span>
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                  <span className="mono-label">{founder.role}</span>
                  <span className="mono-num text-stone-dark">01 / 01</span>
                </div>
                <h2 className="display-2 text-ink max-w-[12ch]">{founder.name}</h2>
                <p className="lead mt-5 text-charcoal measure">{founder.summary}</p>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                  {founder.focus.slice(0, 4).map((f) => (
                    <span key={f} className="mono-label">{f}</span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-copper transition-colors">
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
        </div>
      </section>
    </>
  );
}
