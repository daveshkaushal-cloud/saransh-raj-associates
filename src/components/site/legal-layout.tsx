import { type ReactNode } from "react";
import { Rise } from "@/components/motion/reveal";
import { firm, contact } from "@/data/firm";

/**
 * Reusable legal-document layout with editorial table of contents.
 */
export function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: { id: string; heading: string; body: ReactNode }[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ivory pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <Rise>
            <p className="eyebrow mb-6">Legal · Informational</p>
          </Rise>
          <h1 className="display-1 max-w-[16ch]">
            <Rise>
              <span className="block">{title}</span>
            </Rise>
          </h1>
          <Rise delay={0.15}>
            <p className="mt-6 text-sm text-ink/55">
              Last updated: {updated}
            </p>
          </Rise>
          <Rise delay={0.2}>
            <div className="mt-8 max-w-2xl text-lg text-ink/70 leading-relaxed">
              {intro}
            </div>
          </Rise>
        </div>
      </section>

      {/* Body */}
      <section className="bg-paper py-16 md:py-24 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* TOC */}
            <aside className="md:col-span-3">
              <div className="sticky top-24">
                <p className="eyebrow mb-4">Contents</p>
                <ol className="space-y-2">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="link-underline text-sm text-ink/65 hover:text-ink"
                      >
                        <span className="text-ink/40 mr-2 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Sections */}
            <div className="md:col-span-9 md:pl-6">
              <div className="space-y-12">
                {sections.map((s, i) => (
                  <article key={s.id} id={s.id} className="scroll-mt-24">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-sans text-[0.7rem] tabular-nums text-ink/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="display-3 text-2xl md:text-3xl">{s.heading}</h2>
                    </div>
                    <div className="md:pl-10 space-y-4 text-[0.95rem] leading-relaxed text-ink/70 max-w-2xl">
                      {s.body}
                    </div>
                  </article>
                ))}
              </div>

              {/* Contact note */}
              <div className="mt-16 pt-8 border-t border-line">
                <p className="eyebrow mb-3">Questions</p>
                <p className="text-sm text-ink/65 leading-relaxed max-w-xl">
                  For questions about this document, please contact {firm.name}{" "}
                  at{" "}
                  <a href={contact.emailHref} className="link-underline text-ink break-all">
                    {contact.email}
                  </a>{" "}
                  or{" "}
                  <a href={contact.phoneHref} className="link-underline text-ink">
                    {contact.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
