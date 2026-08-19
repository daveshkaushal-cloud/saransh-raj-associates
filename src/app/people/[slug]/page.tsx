import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { people, getPerson } from "@/data/people";
import { accentHex, accentOnHex } from "@/lib/accents";
import { contact } from "@/data/firm";
import { FadeUp, SheetReveal, RuleDraw } from "@/components/motion/editorial";

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
  const onHex = accentOnHex[person.accent];
  const first = person.name.split(" ")[0];

  return (
    <>
      {/* ============== HERO — portrait placeholder on accent colour field ============== */}
      <section className="relative bg-surface-soft text-fg pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          {/* top bar */}
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <Link href="/people" className="group inline-flex items-center gap-2 mono-label text-fg-muted hover:text-fg transition-colors">
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Back to People</span>
            </Link>
            <span className="folio text-fg-subtle">Profile · 01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Portrait placeholder on accent colour field */}
            <div className="md:col-span-5">
              <FadeUp>
                <div
                  className="relative aspect-[3/4] w-full max-w-md overflow-hidden"
                  style={{ background: hex }}
                >
                  {/* architectural rule lines */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke={`${onHex}29`} strokeWidth="1" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke={`${onHex}1F`} strokeWidth="1" />
                    <line x1="40%" y1="0" x2="40%" y2="100%" stroke={`${onHex}1A`} strokeWidth="1" />
                  </svg>
                  {/* annotation bracket */}
                  <div className="absolute top-5 left-5 flex items-center gap-1.5">
                    <div className="h-3 w-3 border-l border-t" style={{ borderColor: `${onHex}80` }} />
                    <span className="mono-label" style={{ color: onHex, opacity: 0.7 }}>Portrait</span>
                  </div>
                  {/* placeholder notice — no cropped name, no AI face */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <span className="mono-label" style={{ color: onHex }}>PROFESSIONAL PORTRAIT</span>
                    <span className="mono-label mt-2" style={{ color: onHex }}>TO BE ADDED</span>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <span className="mono-num text-[0.6rem]" style={{ color: `${onHex}cc` }}>{person.initials}/01</span>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Identity */}
            <div className="md:col-span-7">
              <FadeUp>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: hex }} />
                  <span className="mono-label" style={{ color: hex }}>{person.role}</span>
                </div>
              </FadeUp>
              <SheetReveal>
                <h1 className="display-1 text-fg max-w-[12ch]">{person.name}</h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 text-fg-muted max-w-xl">{person.summary}</p>
              </FadeUp>

              {/* Quick-facts strip — verified, defensible metadata */}
              <FadeUp delay={0.22}>
                <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 max-w-md">
                  <div>
                    <dt className="mono-label text-fg-subtle mb-1">Based in</dt>
                    <dd className="text-sm text-fg-muted">New Delhi, India</dd>
                  </div>
                  <div>
                    <dt className="mono-label text-fg-subtle mb-1">Practice</dt>
                    <dd className="text-sm text-fg-muted">Corporate &amp; Commercial</dd>
                  </div>
                  <div>
                    <dt className="mono-label text-fg-subtle mb-1">Bar</dt>
                    <dd className="text-sm text-fg-muted">Enrolled advocate</dd>
                  </div>
                  <div>
                    <dt className="mono-label text-fg-subtle mb-1">Focus areas</dt>
                    <dd className="text-sm text-fg-muted">{person.focus.length} practice areas</dd>
                  </div>
                </dl>
              </FadeUp>
              <RuleDraw className="mt-8 max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== BIOGRAPHY — three paragraphs ============== */}
      <section className="bg-surface py-20 md:py-32 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-fg-muted mb-4">§ Biography</p>
              </FadeUp>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <FadeUp delay={0.1}>
                <div className="space-y-6 max-w-2xl">
                  {person.bio.map((p, i) => (
                    <p key={i} className="lead text-fg-muted">
                      {i === 0 && (
                        <span className="float-left font-display text-[5rem] leading-[0.8] mr-3 mt-1" style={{ color: hex }}>
                          {first.charAt(0)}
                        </span>
                      )}
                      {p}
                    </p>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SCOPE OF PRACTICE / QUALIFICATIONS / BAR ============== */}
      <section className="bg-surface py-20 md:py-32 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div>
              <FadeUp>
                <p className="mono-label text-fg-muted mb-5">Scope of Practice</p>
                <ul className="space-y-3">
                  {person.focus.map((f, i) => (
                    <li key={f} className="flex items-baseline gap-3 text-fg">
                      <span className="mono-num text-[0.65rem] text-fg-subtle w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem]">{f}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
            <div>
              <FadeUp delay={0.08}>
                <p className="mono-label text-fg-muted mb-5">Qualifications</p>
                <ul className="space-y-3">
                  {person.qualifications.map((q, i) => (
                    <li key={q} className="flex items-baseline gap-3 text-fg">
                      <span className="mono-num text-[0.65rem] text-fg-subtle w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem]">{q}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
            <div>
              <FadeUp delay={0.16}>
                <p className="mono-label text-fg-muted mb-5">Bar memberships</p>
                <ul className="space-y-3">
                  {person.bar.map((b, i) => (
                    <li key={b} className="flex items-baseline gap-3 text-fg">
                      <span className="mono-num text-[0.65rem] text-fg-subtle w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem]">{b}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT STRIP ============== */}
      <section className="bg-surface-soft text-fg py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <FadeUp>
            <h2 className="display-2 text-fg max-w-[18ch]">
              Contact the{" "}
              <span className="serif-italic" style={{ color: hex }}>Firm</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="text-fg-muted space-y-1">
              <p><a href={contact.emailHref} className="link-underline break-all">{contact.email}</a></p>
              <p><a href={contact.phoneHref} className="link-underline">{contact.phone}</a></p>
              <p className="mono-label text-fg-subtle">{contact.hours}</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
