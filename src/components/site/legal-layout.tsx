import { type ReactNode } from "react";
import { firm, contact } from "@/data/firm";

/**
 * Reusable legal-document layout with editorial table of contents.
 *
 * Content renders immediately (no FadeUp/SheetReveal wrappers) so the
 * legal text is visible on first paint — no blank reveal delay.
 *
 * The "Last updated" row is hidden entirely until an approved legal-
 * review date is provided. Pass `updated` as an empty string to hide it.
 */
export function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated?: string;
  intro: ReactNode;
  sections: { id: string; heading: string; body: ReactNode }[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ivory pt-10 md:pt-16 pb-12 md:pb-16 overflow-hidden border-b border-line">
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-16">
            <span className="mono-label text-stone">Legal · Informational</span>
            <span className="folio text-stone">DOC</span>
          </div>
          <p className="mono-label text-stone mb-6">Legal document</p>
          <h1 className="display-1 text-espresso max-w-[16ch]">
            <span className="block">{title}</span>
          </h1>
          {/* "Last updated" row — hidden entirely until an approved
              legal-review date is provided. Do not invent a date. */}
          {updated && (
            <p className="mt-6 mono-label text-stone">
              Last updated: {updated}
            </p>
          )}
          <div className="mt-8 max-w-2xl lead text-charcoal">
            {intro}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-porcelain py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* TOC */}
            <aside className="md:col-span-3">
              <div className="sticky top-24">
                <p className="mono-label text-stone mb-4">Contents</p>
                <ol className="space-y-2">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="link-underline text-sm text-charcoal hover:text-rose inline-flex items-baseline gap-2"
                      >
                        <span className="mono-num text-stone">
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
                      <span className="mono-num text-[0.7rem] text-stone">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="display-3 text-espresso text-2xl md:text-3xl">{s.heading}</h2>
                    </div>
                    <div className="md:pl-10 space-y-4 text-[0.95rem] leading-relaxed text-charcoal max-w-2xl">
                      {s.body}
                    </div>
                  </article>
                ))}
              </div>

              {/* Contact note */}
              <div className="mt-16 pt-8 border-t border-line">
                <p className="mono-label text-stone mb-3">Questions</p>
                <p className="text-sm text-charcoal leading-relaxed max-w-xl">
                  For questions about this document, please contact {firm.name}{" "}
                  at{" "}
                  <a href={contact.emailHref} className="link-underline text-espresso hover:text-rose break-all">
                    {contact.email}
                  </a>{" "}
                  or{" "}
                  <a href={contact.phoneHref} className="link-underline text-espresso hover:text-rose">
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
