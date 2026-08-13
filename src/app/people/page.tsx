import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { PeoplePreview } from "@/components/site/people-preview";
import { Rise } from "@/components/motion/reveal";
import { people } from "@/data/people";

export const metadata: Metadata = {
  title: "People",
  description:
    "The team at Saransh Raj & Associates, led by founder and principal advocate Saransh Raj.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title={<>The people behind</>}
        titleAccent="the counsel."
        intro={
          <>
            The firm works as an integrated team under the guidance of its
            founder. Profiles will be added as colleagues are introduced.
          </>
        }
        accent="cobalt"
        meta={[
          { label: "Leadership", value: "Founder-led" },
          { label: "Profiles", value: `${people.length} published` },
          { label: "Discipline", value: "Corporate & commercial" },
          { label: "Base", value: "New Delhi" },
        ]}
      />

      <section className="bg-ivory py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <PeoplePreview />
        </div>
      </section>

      {/* Editorial note */}
      <section className="bg-paper py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Rise>
            <p className="text-base md:text-lg text-ink/65 leading-relaxed max-w-3xl">
              The firm is intentionally small and senior-led. Additional team
              profiles will appear on this page as colleagues join and are
              introduced. No team members, qualifications or biographies beyond
              those published here are represented.
            </p>
          </Rise>
        </div>
      </section>
    </>
  );
}
