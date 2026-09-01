import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { people, getPerson } from "@/data/people";
import { accentHex } from "@/lib/accents";
import { contact } from "@/data/firm";
import { perspectives } from "@/data/perspectives";

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

  // Cross-link perspectives written by this author.
  const authorPerspectives = perspectives.filter(
    (p) => p.authorSlug === person.slug,
  );

  return (
    <>
      {/* ============== HERO — ivory, Back to People, name, monogram, role, summary ============== */}
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
            <span className="folio text-stone-dark">04 / 07</span>
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
                  <span className="mono-num text-ink/80">{person.initials}/01</span>
                </div>
              </div>
            </div>

            {/* Identity */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: hex }}
                  aria-hidden="true"
                />
                <span
                  className="mono-label"
                  style={{ color: hex }}
                >
                  {person.role}
                </span>
              </div>
              <h1 className="display-1 text-ink max-w-[12ch]">{person.name}</h1>
              <p className="lead mt-6 md:mt-8 text-charcoal measure">
                {person.summary}
              </p>

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
                  <dt className="mono-label mb-1">Enrolment</dt>
                  <dd className="text-sm text-charcoal">Enrolled advocate</dd>
                </div>
                <div>
                  <dt className="mono-label mb-1">Focus areas</dt>
                  <dd className="text-sm text-charcoal">
                    {person.focus.length} practice areas
                  </dd>
                </div>
              </dl>
              <div className="mt-8 max-w-md h-px bg-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== BIOGRAPHY — porcelain, four paragraphs ============== */}
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
                        aria-hidden="true"
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

      {/* ============== PROFESSIONAL APPROACH — paper ============== */}
      <section className="bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">§ Approach</p>
              <p className="margin-note">
                How the founder works through a matter.
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="display-2 text-ink max-w-[16ch]">
                A measured approach to each matter.
              </h2>
              <div className="mt-8 space-y-6 measure text-charcoal leading-relaxed">
                <p className="lead">
                  {first} approaches a matter by first understanding its
                  commercial and regulatory context — the objective the client is
                  seeking to achieve, the constraints within which the
                  instruction sits, and the practical consequences that will
                  follow from each available course of action. Legal analysis is
                  applied only once the circumstances are properly understood.
                </p>
                <p className="body-condensed">
                  The work that follows is deliberate: identifying the relevant
                  rights, obligations and exposure; evaluating realistic courses
                  of action and their consequences; and carrying the chosen
                  course through documentation, negotiation, representation or
                  proceedings. The aim throughout is advice that is precise
                  enough to support a decision and clear enough to be acted
                  upon. Engagements are treated as part of a longer relationship
                  rather than an isolated instruction — decisions taken today,
                  whether in a shareholders&apos; agreement, a commercial
                  contract or a regulatory filing, shape what is possible
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== QUALIFICATIONS / FOCUS / LANGUAGES — beige ============== */}
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
            {/* Education & Enrolment */}
            <div>
              <p className="mono-label text-stone-dark mb-5">Education &amp; Enrolment</p>
              <ul className="space-y-3">
                {person.qualifications.map((q, i) => (
                  <li key={q} className="flex items-baseline gap-3 text-ink">
                    <span className="mono-num text-copper w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{q}</span>
                  </li>
                ))}
                {person.bar.map((b, i) => (
                  <li key={b} className="flex items-baseline gap-3 text-ink">
                    <span className="mono-num text-copper w-6">
                      {String(person.qualifications.length + i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Sectors & Languages */}
            <div>
              <p className="mono-label text-stone-dark mb-5">Sectors &amp; Languages</p>
              <ul className="space-y-3">
                {person.sectors.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-3 text-ink">
                    <span className="mono-num text-copper w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-line">
                <p className="mono-label text-stone-dark mb-2">Languages</p>
                <p className="text-sm text-charcoal">{person.languages.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PERSPECTIVES BY THIS AUTHOR — ivory ============== */}
      {authorPerspectives.length > 0 && (
        <section className="bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="mono-label text-stone-dark mb-4">§ Publications</p>
                <p className="margin-note">
                  Perspectives written by {first}.
                </p>
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <h2 className="display-2 text-ink max-w-[18ch]">
                  Perspectives by {first}.
                </h2>
                <p className="lead mt-5 text-charcoal measure">
                  Articles, case notes and explainers on corporate and commercial
                  law, written by {first} for the firm&apos;s working archive.
                </p>
                <div className="mt-8 border-t border-line">
                  {authorPerspectives.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/perspectives/${article.slug}`}
                      className="group relative grid grid-cols-12 gap-4 items-start py-5 border-b border-line hover:bg-paper transition-colors"
                    >
                      <span className="col-span-12 md:col-span-3 mono-label text-copper">
                        {article.type}
                      </span>
                      <span className="col-span-6 md:col-span-2 mono-num text-stone-dark">
                        {article.dateLabel}
                      </span>
                      <div className="col-span-12 md:col-span-5">
                        <h3 className="font-display text-lg md:text-xl text-ink leading-snug group-hover:text-oxblood transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      <span className="col-span-6 md:col-span-2 flex md:justify-end items-start gap-2">
                        <span className="mono-label text-stone-dark">
                          {article.readTime}
                        </span>
                        <svg
                          className="h-5 w-5 text-stone-dark group-hover:text-copper group-hover:translate-x-1 transition-all duration-200"
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
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/perspectives"
                    className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
                  >
                    <span>All perspectives</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============== CONTACT STRIP — burgundy, on-burgundy text tokens ============== */}
      <section className="bg-oxblood py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p
              className="mono-label mb-3"
              style={{ color: "var(--color-on-burgundy-label)" }}
            >
              Contact
            </p>
            <h2
              className="display-2 max-w-[18ch]"
              style={{ color: "var(--color-on-burgundy-heading)" }}
            >
              Contact the{" "}
              <span className="serif-italic-on-burgundy">Firm</span>
            </h2>
            <p
              className="body-condensed mt-4 measure"
              style={{ color: "var(--color-on-burgundy-body)" }}
            >
              Engagements are formed upon a formal retainer. Please write to
              the office or call during working hours.
            </p>
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
