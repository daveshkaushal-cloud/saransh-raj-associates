import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { SectorGrid } from "@/components/site/sector-grid";
import { Rise } from "@/components/motion/reveal";
import { sectors } from "@/data/sectors";
import { contact } from "@/data/firm";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Sector knowledge across alcoholic beverages, FMCG, manufacturing, infrastructure, construction, real estate, technology, logistics, renewable energy and hospitality.",
  alternates: { canonical: "/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title={<>Sector knowledge across</>}
        titleAccent="dynamic industries."
        intro={
          <>
            Deep sector knowledge across India&apos;s most dynamic industries —
            informing counsel that understands the commercial realities of each
            field.
          </>
        }
        accent="mint"
        meta={[
          { label: "Sectors", value: `${sectors.length}` },
          { label: "Reach", value: "Across India" },
          { label: "Approach", value: "Sector-aware" },
          { label: "Base", value: "New Delhi" },
        ]}
      />

      <section className="bg-ivory py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <SectorGrid />
        </div>
      </section>

      {/* Editorial wrap-up */}
      <section className="bg-paper py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <Rise>
                <p className="eyebrow mb-3">A sector-aware practice</p>
                <h2 className="display-2 max-w-[16ch]">
                  Counsel shaped by context
                </h2>
              </Rise>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Rise delay={0.1}>
                <p className="text-lg leading-relaxed text-ink/70">
                  The firm&apos;s sector knowledge informs how it approaches
                  corporate advisory, commercial contracts and disputes — with
                  an understanding of the regulatory frameworks, commercial
                  conventions and risk profiles that shape each industry.
                </p>
                <p className="mt-6 text-base text-ink/55">
                  For sector-specific questions, the firm can be reached at{" "}
                  <a href={contact.emailHref} className="link-underline text-ink break-all">
                    {contact.email}
                  </a>
                  .
                </p>
              </Rise>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
