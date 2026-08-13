import type { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { accentHex, accentOnHex, type Accent } from "@/lib/accents";
import { FadeUp, SheetReveal } from "@/components/motion/editorial";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Ten industries served by Saransh Raj & Associates — from alcoholic beverages and FMCG to technology, renewable energy and hospitality.",
  alternates: { canonical: "/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-porcelain pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-ink/50">Chapter 03 · Sectors</span>
            <span className="folio text-ink/45">004 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <FadeUp>
                <p className="mono-label text-ink/55 mb-4">Industry Atlas</p>
                <p className="margin-note">
                  Ten sectors, each given its own colour field and composition.
                  Select a sector to read its scope.
                </p>
              </FadeUp>
            </div>
            <div className="md:col-span-9">
              <SheetReveal>
                <h1 className="display-1 text-ink max-w-[14ch]">
                  A visual{" "}
                  <span className="serif-italic text-jade">atlas</span> of sectors
                </h1>
              </SheetReveal>
              <FadeUp delay={0.15}>
                <p className="lead mt-8 max-w-2xl text-ink/70">
                  The firm advises across ten of India&apos;s dynamic industries.
                  Each sector below carries its own colour identity and a note on
                  the firm&apos;s work within it.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Atlas — distinctive composition per sector via alternating layouts */}
      <section className="bg-porcelain">
        {sectors.map((sector, i) => {
          const hex = accentHex[sector.accent as Accent];
          const onHex = accentOnHex[sector.accent as Accent];
          const layout = i % 4; // rotate through 4 distinct compositions
          return (
            <SectorBlock
              key={sector.slug}
              slug={sector.slug}
              name={sector.name}
              note={sector.note}
              index={i}
              total={sectors.length}
              hex={hex}
              onHex={onHex}
              layout={layout}
            />
          );
        })}
      </section>
    </>
  );
}

function SectorBlock({
  slug,
  name,
  note,
  index,
  total,
  hex,
  onHex,
  layout,
}: {
  slug: string;
  name: string;
  note: string;
  index: number;
  total: number;
  hex: string;
  onHex: string;
  layout: number;
}) {
  const isLight = onHex === "#0B1020";
  const num = String(index + 1).padStart(2, "0");

  // Layout 0: colour field left, text right
  // Layout 1: full-width colour field with text overlay
  // Layout 2: text left, colour block right (small)
  // Layout 3: two-column colour + ink split
  if (layout === 0) {
    return (
      <FadeUp>
        <div id={slug} className="grid grid-cols-1 md:grid-cols-12 border-b border-line" style={{ scrollMarginTop: "6rem" }}>
          {/* colour field with oversized number */}
          <div
            className="md:col-span-5 relative min-h-[16rem] md:min-h-[24rem] overflow-hidden flex items-center justify-center"
            style={{ background: hex, color: onHex }}
          >
            <span className="font-display text-[12rem] md:text-[18rem] leading-none opacity-90 select-none">
              {num}
            </span>
            <span className="absolute top-5 left-5 mono-label opacity-70">Sector {num}</span>
            <span className="absolute bottom-5 right-5 mono-num text-[0.6rem] opacity-60">{slug.substring(0, 8)}</span>
          </div>
          {/* text */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="display-2 max-w-[14ch]">{name}</h2>
            <p className="lead mt-5 text-ink/70 max-w-md">{note}</p>
            <Link href={`/sectors#${slug}`} className="mt-6 inline-flex items-center gap-2 mono-label text-ink hover:text-electric transition-colors">
              <span>View note</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </FadeUp>
    );
  }

  if (layout === 1) {
    // Full-width colour field with text overlay
    return (
      <FadeUp>
        <div
          id={slug}
          className="relative border-b border-line overflow-hidden py-16 md:py-24"
          style={{ background: hex, color: onHex, scrollMarginTop: "6rem" }}
        >
          {/* architectural rule lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke={isLight ? "rgba(11,16,32,0.1)" : "rgba(255,255,255,0.12)"} strokeWidth="1" />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke={isLight ? "rgba(11,16,32,0.1)" : "rgba(255,255,255,0.12)"} strokeWidth="1" />
          </svg>
          <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="flex items-start justify-between mb-8">
              <span className="mono-label opacity-70">Sector {num} / {String(total).padStart(2, "0")}</span>
              <span className="font-display text-3xl opacity-30">{num}</span>
            </div>
            <h2 className="display-mega max-w-[12ch]" style={{ color: onHex }}>{name}</h2>
            <p className="lead mt-6 max-w-xl" style={{ color: `${onHex}dd` }}>{note}</p>
          </div>
        </div>
      </FadeUp>
    );
  }

  if (layout === 2) {
    // Text left, small colour block right
    return (
      <FadeUp>
        <div id={slug} className="grid grid-cols-1 md:grid-cols-12 border-b border-line" style={{ scrollMarginTop: "6rem" }}>
          <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: hex }} />
              <span className="mono-label text-ink/55">Sector {num} / {String(total).padStart(2, "0")}</span>
            </div>
            <h2 className="display-2 max-w-[14ch]">{name}</h2>
            <p className="lead mt-5 text-ink/70 max-w-md">{note}</p>
          </div>
          <div
            className="md:col-span-4 relative min-h-[12rem] md:min-h-[20rem] flex items-center justify-center overflow-hidden"
            style={{ background: hex }}
          >
            <span className="font-display text-[7rem] md:text-[10rem] leading-none select-none" style={{ color: onHex, opacity: 0.9 }}>
              {num}
            </span>
            {/* annotation bracket */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <div className="h-3 w-3 border-r border-t" style={{ borderColor: onHex, opacity: 0.5 }} />
            </div>
          </div>
        </div>
      </FadeUp>
    );
  }

  // Layout 3: two-column colour + ink split
  return (
    <FadeUp>
      <div id={slug} className="grid grid-cols-1 md:grid-cols-2 border-b border-line" style={{ scrollMarginTop: "6rem" }}>
        <div className="relative min-h-[14rem] md:min-h-[22rem] p-8 md:p-12 flex flex-col justify-between" style={{ background: hex, color: onHex }}>
          <div className="flex items-center justify-between">
            <span className="mono-label opacity-70">Sector {num}</span>
            <span className="font-display text-2xl opacity-40">{num}</span>
          </div>
          <div>
            <h2 className="display-3 text-3xl md:text-4xl" style={{ color: onHex }}>{name}</h2>
          </div>
        </div>
        <div className="bg-ink text-porcelain p-8 md:p-12 flex flex-col justify-center">
          <span className="mono-label text-porcelain/50 mb-4">Note</span>
          <p className="lead text-porcelain/80 max-w-md">{note}</p>
          <Link href={`/sectors#${slug}`} className="mt-6 inline-flex items-center gap-2 mono-label text-porcelain/70 hover:text-marigold transition-colors">
            <span>View sector</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </FadeUp>
  );
}
