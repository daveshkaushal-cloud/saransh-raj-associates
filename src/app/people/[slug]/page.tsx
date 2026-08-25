import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { people, getPerson } from "@/data/people";
import { accentHex } from "@/lib/accents";
import { contact } from "@/data/firm";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "Profile not found" };
  return {
    title: `${person.name} — ${person.role}`,
    description: person.summary,
    alternates: { canonical: `/people/${person.slug}` },
  };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const hex = accentHex[person.accent];
  const first = person.name.split(" ")[0];

  return (
    <>
      {/* ============== HERO — ivory, Back to People, name, portrait, role, summary ============== */}
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          {/* top bar */}
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <Link
              href="/people"
              className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
            >
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M19 12H5M11 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Back to People</span>
            </Link>
            <span className="folio text-stone-dark">04 / 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* SR monogram — elegant neutral placeholder on blush */}
            <div className="md:col-span-5">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden bg-blush flex items-center justify-center">
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
                  <span className="mono-label text-copper">SR</span>
                </div>
                <div className="absolute bottom-5 right-5 z-10">
                  <span className="mono-num text-ink/80">
                    {person.initials}/01
                  </span>
                </div>
              </div>
            </div>

            {/* Identity */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: hex }} aria-hidden="true" />
                <span className="mono-label" style={{ color: hex }}>{person.role}</span>
              </div>
              <h1 className="display-1 text-ink max-w-[12ch]">{person.name}</h1>
              <p className="lead mt-6 md:mt-8 text-charcoal measure">{person.summary}</p>

              {/* Quick-facts strip */}
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 max-w-md">
                <div>
                  <dt className="mono-label mb-1">Based in</dt>
                  <dd className="text-sm text-charcoal">New Delhi, India</dd>
                </div>
                <div>
                  <dt className="mono-label mb-1">Practice</dt>
                  <dd className="text-sm text-charcoal">Corporate &amp; Commercial</dd>
                </div>
                <div>
                  <dt className="mono-label mb-1">Bar</dt>
                  <dd className="text-sm text-charcoal">Enrolled advocate</dd>
                </div>
                <div>
                  <dt className="mono-label mb-1">Focus areas</dt>
                  <dd className="text-sm text-charcoal">{person.focus.length} practice areas</dd>
                </div>
              </dl>
              <div className="mt-8 max-w-md h-px bg-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== BIOGRAPHY — porcelain, three paragraphs ============== */}
      <section className="bg-porcelain py-12 md:py-20 lg:py-24 border-y border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">§ Biography</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="space-y-6 measure">
                {person.bio.map((p, i) => (
                  <p key={i} className="lead text-charcoal">
                    {i === 0 && (
                      <span
                        className="float-left font-display text-[5rem] leading-[0.8] mr-3 mt-1"
                        style={{ color: hex }}
                      >
                        {first.charAt(0)}
                      </span>
                    )}
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SCOPE OF PRACTICE / QUALIFICATIONS / BAR — beige ============== */}
      <section className="bg-beige py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Scope of Practice */}
            <div>
              <p className="mono-label text-stone-dark mb-5">Scope of Practice</p>
              <ul className="space-y-3">
                {person.focus.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-3 text-ink">
                    <span className="mono-num text-copper w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Qualifications */}
            <div>
              <p className="mono-label text-stone-dark mb-5">Qualifications</p>
              <ul className="space-y-3">
                {person.qualifications.map((q, i) => (
                  <li key={q} className="flex items-baseline gap-3 text-ink">
                    <span className="mono-num text-copper w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Bar memberships */}
            <div>
              <p className="mono-label text-stone-dark mb-5">Bar memberships</p>
              <ul className="space-y-3">
                {person.bar.map((b, i) => (
                  <li key={b} className="flex items-baseline gap-3 text-ink">
                    <span className="mono-num text-copper w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT STRIP — burgundy, on-burgundy text tokens ============== */}
      <section className="bg-oxblood py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2
              className="display-2 max-w-[18ch]"
              style={{ color: "var(--color-on-burgundy-heading)" }}
            >
              Contact the{" "}
              <span className="serif-italic-on-burgundy">Firm</span>
            </h2>
          </div>
          <div className="space-y-1">
            <p>
              <a
                href={contact.emailHref}
                className="link-underline break-all"
                style={{ color: "var(--color-on-burgundy-body)" }}
              >
                {contact.email}
              </a>
            </p>
            <p>
              <a
                href={contact.phoneHref}
                className="link-underline"
                style={{ color: "var(--color-on-burgundy-body)" }}
              >
                {contact.phone}
              </a>
            </p>
            <p
              className="mono-label"
              style={{ color: "var(--color-on-burgundy-label)" }}
            >
              {contact.hours}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
