import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { accentHex, accentOnHex } from "@/lib/accents";
import { contact } from "@/data/firm";
import { ExpandableServiceList } from "@/components/site/expandable-service-list";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Practice area not found" };
  return {
    title: area.title,
    description: area.overview,
    alternates: { canonical: `/expertise/${area.slug}` },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const hex = accentHex[area.accent];
  const onHex = accentOnHex[area.accent];
  const idx = practiceAreas.findIndex((p) => p.slug === slug);
  const prev = practiceAreas[(idx - 1 + practiceAreas.length) % practiceAreas.length];
  const next = practiceAreas[(idx + 1) % practiceAreas.length];

  return (
    <>
      {/* ============== HERO — colour-coded practice-area opening ============== */}
      <section
        className="relative pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden"
        style={{ background: hex, color: onHex }}
      >
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          {/* top bar */}
          <div className="flex items-center justify-between border-b pb-4 mb-10 md:mb-16" style={{ borderColor: `${onHex}33` }}>
            <Link href="/expertise" className="group inline-flex items-center gap-2 mono-label opacity-70 hover:opacity-100 transition-opacity">
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>All expertise</span>
            </Link>
            <span className="folio opacity-60">Practice area {area.index} / 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: onHex }} />
                  <span className="mono-label opacity-70">Practice Area</span>
                </div>
                <p className="margin-note" style={{ color: `${onHex}cc` }}>
                  {area.short}
                </p>
              </div>
            </div>
            <div className="md:col-span-9">
              {/* oversized index watermark */}
              <span
                className="absolute top-20 right-4 md:right-10 font-display leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(8rem, 22vw, 22rem)", color: `${onHex}14` }}
                aria-hidden="true"
              >
                {area.index}
              </span>
              <div>
                <h1 className="display-1 relative max-w-[14ch]" style={{ color: onHex }}>
                  {area.title}
                </h1>
              </div>
              <div>
                <p className="lead mt-8 max-w-2xl" style={{ color: `${onHex}dd` }}>
                  {area.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES — annotated list ============== */}
      <section className="bg-surface py-20 md:py-32 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4">
              <div>
                <p className="mono-label text-fg-muted mb-3">§ Services</p>
                <h2 className="display-2">What this covers</h2>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6 flex items-end">
              <div>
                <p className="body-condensed text-fg-muted max-w-md">
                  The scope of the firm&apos;s {area.title.toLowerCase()} practice,
                  set out as an annotated index. Select any service to read what it covers.
                </p>
              </div>
            </div>
          </div>

          {/* annotated service list — expandable rows with editorial detail */}
          <ExpandableServiceList
            services={area.services}
            serviceDetails={area.serviceDetails}
            hex={hex}
          />
          <div className="mt-8 max-w-md h-px bg-line" />
        </div>
      </section>

      {/* ============== APPROACH ============== */}
      <section className="bg-surface-soft py-20 md:py-32 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div>
                <p className="mono-label text-fg-muted mb-3">§ Approach</p>
                <h2 className="display-2 max-w-[14ch]">
                  Methodical, attentive,{" "}
                  <span className="serif-italic" style={{ color: hex }}>considered</span>
                </h2>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-6">
              <div>
                <p className="lead text-fg-muted">
                  The firm approaches {area.title.toLowerCase()} with attention
                  to detail and to the commercial realities of those it advises.
                  Each engagement begins with understanding the objective, then
                  moves through structured analysis toward clear, actionable
                  counsel.
                </p>
                <p className="mt-6 body-condensed text-fg-muted">
                  For an overview of the firm&apos;s approach across all practice
                  areas, see{" "}
                  <Link href="/firm" className="link-underline text-fg">The Firm</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT STRIP ============== */}
      <section className="bg-surface-soft text-fg py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="display-2 text-fg max-w-[18ch]">
              Questions about{" "}
              <span className="serif-italic" style={{ color: hex }}>{area.title.toLowerCase()}</span>?
            </h2>
          </div>
          <div>
            <div className="text-fg-muted space-y-1">
              <p><a href={contact.emailHref} className="link-underline break-all">{contact.email}</a></p>
              <p><a href={contact.phoneHref} className="link-underline">{contact.phone}</a></p>
              <p className="mono-label text-fg-muted">{contact.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PREV / NEXT — practice-area navigation ============== */}
      <nav className="bg-surface border-t border-line" aria-label="Practice area navigation">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-2">
          <Link
            href={`/expertise/${prev.slug}`}
            className="group border-r border-line py-8 md:py-10 pr-4 flex flex-col"
          >
            <span className="mono-label text-fg-subtle mb-2">← Previous practice area</span>
            <span className="display-3 text-xl md:text-2xl flex items-center gap-3">
              <span className="mono-num text-sm" style={{ color: accentHex[prev.accent] }}>{prev.index}</span>
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/expertise/${next.slug}`}
            className="group py-8 md:py-10 pl-4 flex flex-col items-end text-right"
          >
            <span className="mono-label text-fg-subtle mb-2">Next practice area →</span>
            <span className="display-3 text-xl md:text-2xl flex items-center gap-3">
              {next.title}
              <span className="mono-num text-sm" style={{ color: accentHex[next.accent] }}>{next.index}</span>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
