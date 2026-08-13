import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Rise } from "@/components/motion/reveal";
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

  return (
    <>
      {/* Hero with abstract portrait */}
      <section className="relative bg-ivory pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <Rise>
            <Link
              href="/people"
              className="link-underline inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink mb-8"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>All people</span>
            </Link>
          </Rise>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Abstract portrait */}
            <div className="md:col-span-4">
              <Rise>
                <div
                  className="relative aspect-[3/4] w-full max-w-sm overflow-hidden"
                  style={{ background: `linear-gradient(150deg, ${hex}, #10101A)` }}
                >
                  <div className="absolute inset-0 dotted-grid opacity-50" style={{ color: "rgba(255,255,255,0.5)" }} />
                  <div
                    className="absolute -inset-6 opacity-40"
                    style={{ background: `radial-gradient(circle at 30% 20%, ${hex}aa, transparent 60%)` }}
                  />
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                    <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <line x1="0" y1="70%" x2="100%" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="0" y1="40%" x2="100%" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[6rem] text-ivory/90 leading-none">
                      {person.initials}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-ivory/15 bg-ink/20 backdrop-blur-sm">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ivory/60">
                      {person.role}
                    </p>
                  </div>
                </div>
              </Rise>
            </div>

            {/* Identity */}
            <div className="md:col-span-8">
              <Rise>
                <p className="eyebrow mb-4" style={{ color: hex }}>
                  {person.role}
                </p>
              </Rise>
              <h1 className="display-1 max-w-[14ch]">
                <Rise>
                  <span className="block">{person.name}</span>
                </Rise>
              </h1>
              <Rise delay={0.15}>
                <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
                  {person.summary}
                </p>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-paper py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Rise>
                <p className="eyebrow mb-3">Biography</p>
              </Rise>
            </div>
            <div className="md:col-span-8">
              <Rise delay={0.1}>
                <div className="space-y-6 text-lg leading-relaxed text-ink/75 max-w-2xl">
                  {person.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* Focus + qualifications + bar */}
      <section className="bg-ivory py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <Rise>
                <p className="eyebrow mb-4">Focus areas</p>
                <ul className="space-y-2">
                  {person.focus.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-ink/75">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: hex }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Rise>
            </div>
            <div>
              <Rise delay={0.08}>
                <p className="eyebrow mb-4">Qualifications</p>
                <ul className="space-y-2">
                  {person.qualifications.map((q) => (
                    <li key={q} className="text-sm text-ink/75">
                      {q}
                    </li>
                  ))}
                </ul>
              </Rise>
            </div>
            <div>
              <Rise delay={0.16}>
                <p className="eyebrow mb-4">Bar memberships</p>
                <ul className="space-y-2">
                  {person.bar.map((b) => (
                    <li key={b} className="text-sm text-ink/75">
                      {b}
                    </li>
                  ))}
                </ul>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-ink text-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Rise>
            <h2 className="display-2 text-ivory max-w-[18ch]">
              To be in touch with {person.name}
            </h2>
          </Rise>
          <Rise delay={0.1}>
            <div className="text-ivory/75 space-y-1">
              <p>
                <a href={contact.emailHref} className="link-underline break-all">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={contact.phoneHref} className="link-underline">
                  {contact.phone}
                </a>
              </p>
              <p className="text-ivory/55">{contact.hours}</p>
            </div>
          </Rise>
        </div>
      </section>
    </>
  );
}
