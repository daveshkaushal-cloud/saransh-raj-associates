import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { Rise } from "@/components/motion/reveal";
import { contact } from "@/data/firm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Saransh Raj & Associates welcomes introductions from advocates and professionals interested in the firm's work.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Working with</>}
        titleAccent="the firm."
        intro={
          <>
            The firm is intentionally small and senior-led. It welcomes
            introductions from advocates and professionals whose interests align
            with its practice in corporate and commercial law.
          </>
        }
        accent="vermilion"
        meta={[
          { label: "Structure", value: "Founder-led" },
          { label: "Practice", value: "Corporate & commercial" },
          { label: "Base", value: "New Delhi" },
          { label: "Approach", value: "By introduction" },
        ]}
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Rise>
                <p className="eyebrow mb-3">A considered approach</p>
                <h2 className="display-2 text-3xl md:text-4xl">
                  No open roles listed
                </h2>
              </Rise>
            </div>
            <div className="md:col-span-8">
              <Rise delay={0.1}>
                <div className="space-y-6 text-lg leading-relaxed text-ink/70 max-w-2xl">
                  <p>
                    Saransh Raj &amp; Associates does not currently have open
                    positions advertised. The firm grows thoughtfully and is
                    glad to receive introductions from advocates with experience
                    or interest in corporate advisory, commercial contracts,
                    mergers and acquisitions, dispute resolution, regulatory
                    compliance or insolvency.
                  </p>
                  <p>
                    Rather than a conventional application process, the firm
                    invites a brief note introducing your background, areas of
                    interest and what you are looking for. Suitable
                    introductions are kept on file and revisited as
                    opportunities arise.
                  </p>
                  <p className="text-base text-ink/55">
                    Please write to{" "}
                    <a href={contact.emailHref} className="link-underline text-ink break-all">
                      {contact.email}
                    </a>{" "}
                    with a short introduction. No claims of guaranteed response
                    or placement are made.
                  </p>
                </div>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* What shapes the work */}
      <section className="bg-paper py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Rise>
            <p className="eyebrow mb-3">The work</p>
            <h2 className="display-2 max-w-[18ch]">
              What shapes the work at the firm
            </h2>
          </Rise>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                t: "Close to the work",
                b: "A small, senior-led team means involvement across the substance of each matter.",
                c: "#3157FF",
              },
              {
                t: "Across practice areas",
                b: "Exposure spanning corporate advisory, contracts, M&A, disputes, regulatory and insolvency.",
                c: "#FF574D",
              },
              {
                t: "Sector-aware",
                b: "Counsel informed by the realities of the industries the firm serves.",
                c: "#FFB21A",
              },
              {
                t: "Attention to detail",
                b: "Legal outcomes often turn on detail; the firm's approach reflects that throughout.",
                c: "#70DEC0",
              },
              {
                t: "Clarity in communication",
                b: "Translating complexity into clear, actionable guidance is a daily discipline.",
                c: "#8A65FF",
              },
              {
                t: "Integrity first",
                b: "Ethical standards guide every engagement, without exception.",
                c: "#10101A",
              },
            ].map((item, i) => (
              <Rise key={item.t} delay={i * 0.06}>
                <div className="group bg-ivory border border-line p-7 min-h-[12rem] flex flex-col">
                  <span className="h-2.5 w-2.5 rounded-full mb-5" style={{ background: item.c }} />
                  <h3 className="display-3 text-xl">{item.t}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{item.b}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Rise>
            <h2 className="display-2 text-ivory max-w-[18ch]">
              Introduce yourself to the firm
            </h2>
          </Rise>
          <Rise delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ivory text-ink text-sm font-medium hover:bg-mint transition-colors duration-300"
            >
              <span>Visit contact page</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Rise>
        </div>
      </section>
    </>
  );
}
