import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";
import { ExpertiseAccordion } from "@/components/site/expertise-accordion";

/**
 * Expertise index — server component (static). Renders the hero and
 * legend immediately in SSR. The interactive accordion is a separate
 * client component.
 */
export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface pt-10 md:pt-16 pb-12 md:pb-16 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-fg-muted">Index 02 · Expertise</span>
            <span className="folio text-fg-muted">003 / 018</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-fg-muted mb-4">Practice Areas</p>
              <p className="margin-note">
                Six practice areas, each colour-coded. Select an area to expand its scope.
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-fg max-w-[14ch]">
                A focused{" "}
                <span className="serif-italic text-accent">index</span> of practice
              </h1>
              <p className="lead mt-8 max-w-2xl text-fg-muted">
                The firm&apos;s practice is organised across six areas of corporate
                and commercial law. Each area below sets out its scope and the
                services it covers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive practice-area index */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          {/* colour legend */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-6 border-b border-line">
            <span className="mono-label text-fg-muted">Legend</span>
            {practiceAreas.map((area) => (
              <span key={area.slug} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: accentHex[area.accent] }} />
                <span className="mono-label text-fg-muted">{area.title}</span>
              </span>
            ))}
          </div>

          {/* Practice-area list (interactive accordion) */}
          <ExpertiseAccordion />
        </div>
      </section>
    </>
  );
}
