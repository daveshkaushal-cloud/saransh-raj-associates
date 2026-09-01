import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { contact } from "@/data/firm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Information for those interested in joining Saransh Raj & Associates. The firm welcomes considered enquiries from advocates, law graduates, internship applicants and support professionals.",
  alternates: { canonical: "/careers" },
};

const values = [
  {
    title: "Research ability",
    body: "The capacity to read primary sources carefully, trace an issue through statute and precedent, and arrive at a position that can be defended on the merits.",
  },
  {
    title: "Writing",
    body: "Clear, accurate and economical prose. Drafting is the bulk of legal practice; if the writing is not strong, the practice will not be either.",
  },
  {
    title: "Attention to detail",
    body: "The small points — in a contract, a pleading or an advice — often determine the outcome. Sloppy work is rarely recoverable later.",
  },
  {
    title: "Professional judgment",
    body: "The ability to step back from a question and assess it commercially, ethically and practically, not only technically. Law is a discipline of judgement, not of rules alone.",
  },
  {
    title: "Commercial awareness",
    body: "An interest in how businesses operate, how decisions are taken, and how legal advice fits into a commercial context rather than sitting apart from it.",
  },
];

const applicants = [
  {
    title: "Experienced advocates",
    body: "Advocates with an established practice in corporate advisory, commercial contracts, mergers and acquisitions, dispute resolution, regulatory compliance or insolvency who are considering a move to a smaller, founder-led practice.",
  },
  {
    title: "Junior advocates",
    body: "Advocates in the early years of practice who are seeking structured exposure to the firm's areas of work and a closer working relationship with the founder.",
  },
  {
    title: "Law graduates",
    body: "Recent graduates who are considering their first engagement in corporate and commercial practice and who have a serious interest in the firm's areas of work.",
  },
  {
    title: "Internship applicants",
    body: "Final-year students or those enrolled in an LLM programme with a serious interest in the firm's practice areas. Internships are limited and offered on a considered basis.",
  },
  {
    title: "Support professionals",
    body: "Those who work in research, library, document management or administrative functions and who would like to be considered when a suitable role opens.",
  },
];

const guidance = [
  {
    title: "A current CV",
    body: "Setting out qualifications, enrolment status where applicable, and prior experience. Keep it factual and unornamented.",
  },
  {
    title: "A short introduction",
    body: "No more than a few paragraphs setting out why you are writing, what draws you to the firm, and what you hope to do. The introduction should engage specifically with the firm's practice — not be a circular that could be sent anywhere.",
  },
  {
    title: "The practice area of primary interest",
    body: "Selected from the six practice areas set out on the Expertise page. If your interest spans more than one, name them in order of preference.",
  },
  {
    title: "A writing sample, where appropriate",
    body: "A short note, an extract from a drafted agreement, or a piece of academic writing that reflects your ability to articulate a legal position clearly. Confidential or privileged material should not be shared.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero — calm and factual */}
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone-dark">Index 06 · Careers</span>
            <span className="folio text-stone-dark">06 / 07</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">Joining the firm</p>
              <p className="margin-note">
                A calm, factual note for those interested in joining the practice.
              </p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-ink max-w-[14ch]">
                Joining the{" "}
                <span className="serif-italic">practice</span>
              </h1>
              <p className="lead mt-6 md:mt-8 measure text-charcoal">
                Saransh Raj &amp; Associates is a founder-led practice that
                welcomes considered enquiries from advocates, law graduates,
                internship applicants and support professionals who share its
                commitment to rigorous research, careful writing, precision, clarity and sound professional judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 01 — OVERVIEW — porcelain ============== */}
      <section className="bg-porcelain py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">§ 01 · Overview</p>
              {/* Supporting image — document detail, single, sparingly used */}
              <div className="mt-6 relative aspect-[4/3] w-full max-w-xs overflow-hidden bg-stone">
                <Image
                  src="/images/document-detail.png"
                  alt="Document detail — layered legal papers reflecting the firm's archival practice"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                  <div className="h-3 w-3 border-l border-t border-copper" aria-hidden="true" />
                  <span className="mono-label text-copper">Archive · 03</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="display-2 text-ink max-w-[18ch]">
                The firm is small by design.
              </h2>
              <div className="mt-8 space-y-6 measure text-charcoal leading-relaxed">
                <p className="lead">
                  The firm is small by design. It does not operate a structured
                  recruitment calendar or advertise positions. When a role opens,
                  it is filled through direct enquiry and referral.
                </p>
                <p className="body-condensed">
                  The pages of this website set out the firm&apos;s practice
                  areas, its approach and the kind of work its members carry.
                  Those considering an application should read them carefully
                  before writing. Enquiries are read by the founder. There is no
                  separate human-resources function, and the firm does not
                  retain third-party recruiters. A considered application that
                  engages with the firm&apos;s work is read closely; a generic
                  application is not.
                </p>
                <p className="body-condensed">
                  The pages that follow set out what the firm values, who may
                  write and how to apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 02 — WHAT WE VALUE — paper ============== */}
      <section className="bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">§ 02 · What we value</p>
              <p className="margin-note">
                Five qualities shape the work and are looked for in any application.
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="display-2 text-ink max-w-[18ch]">
                What the firm values.
              </h2>
              <p className="lead mt-6 text-charcoal measure">
                Five qualities shape the work and are looked for in any
                application. They are not a checklist — they are the dispositions
                the firm returns to when reading a file or assessing a candidate.
              </p>
              <ol className="mt-10 space-y-px">
                {values.map((v, i) => (
                  <li
                    key={v.title}
                    className="grid grid-cols-12 gap-4 items-baseline py-5 border-t border-line"
                  >
                    <span className="col-span-2 md:col-span-1 mono-num text-copper">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal measure">
                        {v.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 03 — WHO MAY WRITE — ivory ============== */}
      <section className="bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">§ 03 · Who may write</p>
              <p className="margin-note">
                The firm reads applications across five categories.
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="display-2 text-ink max-w-[18ch]">
                Who may write.
              </h2>
              <p className="lead mt-6 text-charcoal measure">
                The firm reads applications across five categories. Within each,
                the same standard applies — a specific, considered introduction
                that engages with the firm&apos;s work.
              </p>
              <ol className="mt-10 space-y-px">
                {applicants.map((a, i) => (
                  <li
                    key={a.title}
                    className="grid grid-cols-12 gap-4 items-baseline py-5 border-t border-line"
                  >
                    <span className="col-span-2 md:col-span-1 mono-num text-copper">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal measure">
                        {a.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 04 — APPLICATION GUIDANCE — paper ============== */}
      <section className="bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">§ 04 · Application guidance</p>
              <p className="margin-note">
                What to include in an application.
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="display-2 text-ink max-w-[18ch]">
                What an application should include.
              </h2>
              <p className="lead mt-6 text-charcoal measure">
                Please include the following. There is no application form.
                Applications should be sent by email to the address at the
                foot of this page.
              </p>
              <ol className="mt-10 space-y-px">
                {guidance.map((g, i) => (
                  <li
                    key={g.title}
                    className="grid grid-cols-12 gap-4 items-baseline py-5 border-t border-line"
                  >
                    <span className="col-span-2 md:col-span-1 mono-num text-copper">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-display text-lg md:text-xl text-ink leading-snug">
                        {g.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal measure">
                        {g.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 05 — HOW THE FIRM RESPONDS — ivory ============== */}
      <section className="bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-4">§ 05 · How the firm responds</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2 className="display-2 text-ink max-w-[18ch]">
                How the firm responds.
              </h2>
              <div className="mt-8 space-y-6 measure text-charcoal leading-relaxed">
                <p className="lead">
                  The firm does not respond to generic applications. Please
                  ensure that the introduction is specific to the firm&apos;s
                  work.
                </p>
                <p className="body-condensed">
                  Where an application is read with interest, the firm will
                  respond directly. Where no role is currently available,
                  applications are retained on file for a reasonable period and
                  may be returned to when a suitable opening arises. The firm
                  does not provide individual feedback on every application
                  received; this is not a reflection on the applicant but a
                  consequence of how the practice operates.
                </p>
                <p className="body-condensed">
                  Please write to the firm at the address below. Email is
                  preferred. If your enquiry relates to a particular practice
                  area, please indicate it in the subject line.
                </p>
              </div>

              {/* How to reach — simple contact block */}
              <div className="mt-10 pt-8 border-t border-line">
                <p className="mono-label text-stone-dark mb-3">How to reach</p>
                <div className="space-y-2 measure">
                  <a
                    href={contact.emailHref}
                    className="link-underline text-ink hover:text-copper transition-colors block"
                  >
                    {contact.email}
                  </a>
                  <p className="body-condensed text-charcoal">{contact.address.full}</p>
                  <p className="mono-label text-stone-dark">{contact.hours}</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 group inline-flex items-center gap-2 px-5 py-3 bg-oxblood text-ivory text-sm font-medium hover:bg-ink transition-colors duration-300"
                >
                  <span>Visit contact page</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
