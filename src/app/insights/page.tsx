import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { InsightsPreview } from "@/components/site/insights-preview";
import { Rise } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes and publications from Saransh Raj & Associates across corporate, contracts, disputes, regulatory and insolvency law.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights · Publications"
        title={<>Notes &amp;</>}
        titleAccent="publications."
        intro={
          <>
            This section hosts the firm&apos;s written work — notes, overviews
            and observations across corporate and commercial law. Published
            pieces will appear here as they become available.
          </>
        }
        accent="saffron"
        meta={[
          { label: "Status", value: "In development" },
          { label: "Categories", value: "Five areas" },
          { label: "Format", value: "Notes & overviews" },
          { label: "Audience", value: "Informational" },
        ]}
      />

      <section className="bg-ivory py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <InsightsPreview />
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Rise>
            <p className="text-base md:text-lg text-ink/65 leading-relaxed max-w-3xl">
              The firm intends to publish considered notes on corporate
              governance, commercial contracts, the M&amp;A process, dispute
              resolution, regulatory compliance and the Insolvency and
              Bankruptcy Code. Until published work is available, this page
              presents the intended areas of writing as an honest preview. No
              publication dates are stated, and no claims of expertise or
              outcomes are made.
            </p>
          </Rise>
        </div>
      </section>
    </>
  );
}
