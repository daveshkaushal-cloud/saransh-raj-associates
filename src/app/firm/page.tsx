import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { firm, contact } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";

export const metadata: Metadata = {
  title: "The Firm",
  description:
    "Saransh Raj & Associates is a New Delhi-based corporate and commercial legal practice founded by Advocate Saransh Raj. The firm advises on transactional, regulatory and dispute-related matters across the corporate and commercial law spectrum.",
  alternates: { canonical: "/firm" },
};

export default function FirmPage() {
  return (
    <>
      {/* ============== HERO (ivory) ============== */}
      <section className="relative bg-ivory pt-8 md:pt-12 pb-10 md:pb-14 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-8 md:mb-10">
            <span className="mono-label text-stone-dark">
              Index 01 · The Firm
            </span>
            <span className="folio text-stone-dark">01 / 07</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-clay"
                  aria-hidden="true"
                />
                <span className="mono-label">Manifesto</span>
              </div>
              <p className="margin-note">
                A founder-led corporate &amp; commercial legal practice based in
                New Delhi, India.
              </p>
              <p className="margin-note mt-4">SRA / 01 · The Firm</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="display-1 text-ink max-w-[18ch]">
                Counsel built on{" "}
                <span className="serif-italic">principle</span>
                <span className="text-ink">.</span>
              </h1>
              <p className="lead mt-6 md:mt-8 measure text-charcoal">
                Saransh Raj &amp; Associates is a New Delhi-based corporate and
                commercial legal practice. Founded by Advocate Saransh Raj, the
                firm advises on transactional, regulatory and dispute-related
                matters across the corporate and commercial law spectrum.
              </p>
              <div className="mt-8 max-w-md h-px bg-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== 01 — INTRODUCTION (paper) ============== */}
      <Introduction />

      {/* ============== 02 — ORIGIN (ivory) ============== */}
      <Origin />

      {/* ============== 03 — HOW THE FIRM WORKS (paper) ============== */}
      <HowTheFirmWorks />

      {/* ============== 04 — PRINCIPLES (ivory) ============== */}
      <Principles />

      {/* ============== 05 — PRACTICE FRAMEWORK (paper) ============== */}
      <PracticeFramework />

      {/* ============== 06 — WORKING RELATIONSHIPS (ivory) ============== */}
      <WorkingRelationships />

      {/* ============== CONTACT STRIP — oxblood ============== */}
      <section className="bg-oxblood py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p
                className="mono-label mb-3"
                style={{ color: "var(--color-on-burgundy-label)" }}
              >
                Contact
              </p>
              <h2
                className="display-2 max-w-[18ch]"
                style={{ color: "var(--color-on-burgundy-heading)" }}
              >
                Reach the{" "}
                <span className="serif-italic-on-burgundy">firm</span>
              </h2>
              <p
                className="body-condensed mt-4 measure"
                style={{ color: "var(--color-on-burgundy-body)" }}
              >
                Engagements are formed upon a formal retainer. Please write to
                the office or call during working hours.
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <a
                  href={contact.emailHref}
                  className="link-underline break-all"
                  style={{ color: "var(--color-on-burgundy-body)" }}
                >
                  {contact.email}
                </a>
              </p>
              <p>
                <a
                  href={contact.phoneHref}
                  className="link-underline"
                  style={{ color: "var(--color-on-burgundy-body)" }}
                >
                  {contact.phone}
                </a>
              </p>
              <p
                className="mono-label"
                style={{ color: "var(--color-on-burgundy-label)" }}
              >
                {contact.hours}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------
   01 — Introduction
   --------------------------------------------------------------- */
function Introduction() {
  return (
    <section className="relative bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="mono-label mb-3">§ 01 · Introduction</p>
            <p className="margin-note">Saransh Raj &amp; Associates.</p>
            <p className="margin-note mt-4">THE FIRM · New Delhi</p>
          </div>
          <div className="md:col-span-9 md:pl-6">
            <h2 className="display-2 measure max-w-[22ch]">
              Who the firm is, set out plainly.
            </h2>
            <div className="mt-6 md:mt-8 space-y-5 measure">
              <p className="lead text-charcoal">
                Saransh Raj &amp; Associates is a New Delhi-based corporate and
                commercial legal practice founded by Advocate Saransh Raj. The
                firm advises businesses, promoter-led enterprises, family-led
                businesses and individuals on transactional, regulatory and
                dispute-related matters across the corporate and commercial law
                spectrum.
              </p>
              <p className="body-condensed text-charcoal">
                The work ranges from the constitutional and operational
                questions that arise when a business is being set up — entity
                selection, shareholder arrangements, governance frameworks — to
                the contractual architecture that holds the business together
                over time: supply and distribution agreements, licensing and
                intellectual property arrangements, joint ventures, employment
                frameworks. It includes transactions such as mergers,
                acquisitions and restructuring, and the regulatory compliance
                that increasingly defines the perimeter of corporate conduct in
                India. When commercial relationships break down, the firm also
                represents clients in arbitration, before the National Company
                Law Tribunal and in the commercial courts.
              </p>
              <p className="body-condensed text-charcoal">
                The practice is founder-led. Engagements are taken on with a
                clear understanding of the client&apos;s commercial objective,
                the regulatory environment in which the client operates, and the
                practical constraints — of time, of cost, of relationship — that
                shape the work. The firm&apos;s working method is structured:
                context first, then analysis, then strategy, then execution.
                Law is most useful when it is grounded in the realities of the
                people and the business it serves, and least useful when it is
                applied as an abstract discipline detached from commercial
                consequence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   02 — Origin
   --------------------------------------------------------------- */
function Origin() {
  return (
    <section className="relative bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="mono-label mb-3">§ 02 · Origin</p>
            <p className="margin-note">NEW DELHI · India</p>
          </div>
          <div className="md:col-span-9 md:pl-6">
            <h2 className="display-2 measure max-w-[22ch]">
              Why the practice was established.
            </h2>
            <div className="mt-6 md:mt-8 space-y-5 measure">
              <p className="lead text-charcoal">
                The practice was established by Advocate Saransh Raj following
                the completion of his LLB and LLM at Amity University, Rajasthan,
                and his enrolment as an advocate. The premise on which the firm
                was founded is straightforward: that legal advice is most useful
                when it is grounded in an understanding of the commercial,
                regulatory and practical circumstances in which legal questions
                arise, and that an advocate&apos;s responsibility extends beyond
                the immediate instruction to the longer-term position of the
                client.
              </p>
              <p className="body-condensed text-charcoal">
                The firm operates from Kalkaji in New Delhi and serves clients
                across India. Professional engagements are formed only upon a
                formal retainer, and this website is maintained for informational
                purposes. It is not a solicitation of work or an advertisement
                within the meaning of the Bar Council of India&apos;s rules
                governing advocates.
              </p>
              <p className="body-condensed text-charcoal">
                The pages that follow set out, in order, how the firm works, the
                principles that shape its work, the practice areas within which
                it operates, and the manner in which it engages with the people
                and the businesses it advises.
              </p>
              <p className="body-condensed text-stone-dark italic">
                [To be confirmed following review: specific founding date,
                address history and prior professional affiliations of the
                founder.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   03 — How the firm works
   Includes a supporting document-detail image alongside the narrative.
   --------------------------------------------------------------- */
function HowTheFirmWorks() {
  const stages = [
    {
      number: "01",
      title: "Research",
      body:
        "Begins with the documentary record — the contract, the company's constitutional documents, the regulatory filings, the correspondence that has passed between the parties. Where the matter is transactional, research extends to the legal and regulatory framework that applies; where it is a dispute, it includes the procedural rules, the limitation periods and the precedent most relevant to the issues.",
    },
    {
      number: "02",
      title: "Analysis",
      body:
        "The work of identifying the rights, obligations and exposures that the documentary record reveals, and locating them within the legal framework that governs them. Analysis is where inconsistencies are surfaced, where risks are mapped and where the questions that need to be answered before strategy is set are framed with precision.",
    },
    {
      number: "03",
      title: "Drafting",
      body:
        "The production of the documents the matter requires — the agreement, the notice, the pleadings, the regulatory application, the resolution. Drafting is not a clerical step; the choice of language determines what the parties have agreed to, what they have not agreed to, and what the document will mean at the moment of enforcement.",
    },
    {
      number: "04",
      title: "Negotiation",
      body:
        "The work of moving the matter toward a position the client can accept. It is informed by the legal analysis but is, ultimately, a commercial conversation conducted in the shadow of legal consequence — and conducted with a clear understanding of the client's commercial position and the counter-party's incentives.",
    },
    {
      number: "05",
      title: "Representation",
      body:
        "The conduct of the matter before courts, tribunals, regulators and arbitral tribunals — and, equally, before counter-parties, counter-counsel and counter-parties' boards. Representation is informed by, but is not confined to, the courtroom; much of the work is conducted through correspondence, meetings and structured negotiation.",
    },
    {
      number: "06",
      title: "Continuity",
      body:
        "The work that follows the matter: the implementation of the agreed position, the documentation of what was decided, and the periodic review of the legal position as the business and the regulatory environment evolve. The firm treats continuity as a stage in its own right, because decisions taken today shape what is possible tomorrow.",
    },
  ];

  return (
    <section className="relative bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-10">
          <div className="md:col-span-3">
            <p className="mono-label mb-3">§ 03 · Method</p>
            <p className="margin-note">Six stages · 2026</p>
          </div>
          <div className="md:col-span-9 md:pl-6">
            <h2 className="display-2 measure max-w-[24ch]">
              How the firm works through a matter.
            </h2>
            <p className="lead mt-6 md:mt-8 measure text-charcoal">
              The firm&apos;s work on a matter typically moves through six stages.
              The sequence is structured; the work within each stage is shaped by
              the matter at hand.
            </p>
          </div>
        </div>

        {/* Narrative + supporting image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-10 md:mb-12">
          <div className="md:col-span-7 md:col-start-1">
            <div className="space-y-4 measure">
              <p className="body-condensed text-charcoal">
                The six stages are not a rigid template. A transaction may move
                from research to drafting with relatively little analysis; a
                dispute may sit in analysis for weeks before strategy is set.
                What the sequence provides is a discipline: that the work at
                each stage is done before the next begins, and that the client
                can see, at each stage, what has been done and what is to come.
              </p>
              <p className="body-condensed text-charcoal">
                Continuity — the final stage — is the one most often
                underestimated. The position agreed at the close of a matter
                must be implemented, documented and, in time, revisited. A
                well-drafted agreement that is not implemented, or that is not
                reviewed as the business evolves, can produce the very dispute
                it was drafted to prevent.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone">
              <Image
                src="/images/document-detail.png"
                alt="Document detail — layered legal papers reflecting the firm's archival approach"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                <div
                  className="h-3 w-3 border-l border-t border-copper"
                  aria-hidden="true"
                />
                <span className="mono-label text-copper">Archive · 01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Six stages as a structured list */}
        <div className="border-t border-line">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="group relative grid grid-cols-12 gap-4 items-start py-6 md:py-7 border-b border-line"
            >
              <span className="col-span-2 md:col-span-1 mono-num text-stone-dark">
                {stage.number}
              </span>
              <div className="col-span-10 md:col-span-3">
                <h3 className="font-display text-xl md:text-2xl text-ink">
                  {stage.title}
                </h3>
              </div>
              <p className="col-span-12 md:col-span-8 text-sm md:text-base leading-relaxed text-charcoal md:pl-6 measure">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   04 — Principles
   --------------------------------------------------------------- */
function Principles() {
  const principles = firm.principles;
  const fields = [
    { bg: "#A35F4F", fg: "#F3EFE7" }, // clay
    { bg: "#541F24", fg: "#F3EFE7" }, // oxblood
    { bg: "#E8E2D5", fg: "#191817" }, // stone tint (dark text)
    { bg: "#191817", fg: "#F3EFE7" }, // ink
  ];

  return (
    <section className="relative bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-10">
          <div className="md:col-span-3">
            <p className="mono-label mb-3">§ 04 · Principles</p>
            <p className="margin-note">Four working principles.</p>
          </div>
          <div className="md:col-span-9 md:pl-6">
            <h2 className="display-2 measure max-w-[22ch]">
              The principles that shape the work.
            </h2>
            <p className="lead mt-6 md:mt-8 measure text-charcoal">
              The firm&apos;s work is shaped by four principles. They are not
              aspirational statements; they are the practical considerations that
              determine how an engagement is conducted, and against which the
              work is reviewed as a matter proceeds.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {principles.map((p, i) => {
            const { bg, fg } = fields[i % fields.length];
            return (
              <div
                key={p.title}
                className="relative h-full min-h-[14rem] p-6 flex flex-col justify-between border border-line-strong"
                style={{ background: bg, color: fg }}
              >
                <div className="flex items-start justify-between">
                  <span className="mono-num opacity-80">
                    {String(i + 1).padStart(2, "0")} / 04
                  </span>
                  <span className="font-display text-4xl md:text-5xl opacity-25 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-xl md:text-2xl leading-tight">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">
                    {p.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
   05 — Practice framework
   --------------------------------------------------------------- */
function PracticeFramework() {
  return (
    <section className="relative bg-paper py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-10">
          <div className="md:col-span-3">
            <p className="mono-label mb-3">§ 05 · Practice</p>
            <p className="margin-note">Six practice areas.</p>
          </div>
          <div className="md:col-span-9 md:pl-6">
            <h2 className="display-2 measure max-w-[22ch]">
              The framework within which the firm operates.
            </h2>
            <p className="lead mt-6 md:mt-8 measure text-charcoal">
              Work is organised across six practice areas. They are not
              isolated silos: a transaction typically engages several of them,
              and a dispute rarely confines itself to one. The framework exists
              to ensure that each engagement is conducted with the appropriate
              focus, and to give clients a clear view of the firm&apos;s scope.
            </p>
            <p className="body-condensed mt-5 measure text-charcoal">
              Each area is described in greater detail on its own page,
              including the services it covers and the sectors it most
              frequently engages.
            </p>
          </div>
        </div>

        <div className="border-t border-line">
          {practiceAreas.map((area) => {
            const hex = accentHex[area.accent];
            return (
              <Link
                key={area.slug}
                href={`/expertise/${area.slug}`}
                className="group relative grid grid-cols-12 gap-4 items-center py-5 md:py-6 border-b border-line hover:bg-ivory transition-colors"
              >
                <span className="col-span-2 md:col-span-1 mono-num text-sm text-stone-dark group-hover:text-ink transition-colors">
                  {area.index}
                </span>
                <span className="col-span-7 md:col-span-5">
                  <span className="font-display text-xl md:text-2xl text-ink">
                    {area.title}
                  </span>
                </span>
                <span className="col-span-3 md:col-span-4 text-sm text-charcoal hidden sm:block">
                  {area.short}
                </span>
                <span className="col-span-3 md:col-span-2 flex items-center justify-end gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: hex }}
                    aria-hidden="true"
                  />
                  <svg
                    className="h-5 w-5 text-stone-dark group-hover:text-copper group-hover:translate-x-1 transition-all duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link
            href="/expertise"
            className="btn-magnetic group inline-flex items-center gap-2 mono-label text-charcoal hover:text-copper transition-colors"
          >
            <span>View expertise index</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
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
    </section>
  );
}

/* ---------------------------------------------------------------
   06 — Working relationships
   --------------------------------------------------------------- */
function WorkingRelationships() {
  return (
    <section className="relative bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="mono-label mb-3">§ 06 · Relationships</p>
            <p className="margin-note">Advice grounded in commercial reality.</p>
          </div>
          <div className="md:col-span-9 md:pl-6">
            <h2 className="display-2 measure max-w-[22ch]">
              How the firm works with the people it advises.
            </h2>
            <div className="mt-6 md:mt-8 space-y-5 measure">
              <p className="lead text-charcoal">
                Legal advice is most useful when it is grounded in an
                understanding of the client&apos;s objectives and the commercial
                reality within which the client operates. A clause that is
                technically correct but commercially unworkable is not good
                counsel; a structure that is optimal on paper but cannot be
                implemented within the client&apos;s timeline is not good counsel
                either.
              </p>
              <p className="body-condensed text-charcoal">
                The firm&apos;s engagements, accordingly, begin with a
                conversation rather than a brief. The objective of that
                conversation is to understand what the client is trying to
                achieve, what constraints the client is operating within, and
                what an acceptable outcome looks like — not only in legal terms,
                but in commercial terms. The brief that follows is shaped by
                that conversation.
              </p>
              <p className="body-condensed text-charcoal">
                This approach has practical consequences. It means that the
                firm will, at times, advise a client against a course of action
                that the client initially instructed. It means that the firm
                will, where appropriate, recommend that a matter be settled
                rather than litigated. It means that the firm&apos;s advice
                will, where the matter warrants, address questions of
                governance, communication and relationship that are not strictly
                legal but that bear materially on the client&apos;s position.
              </p>
              <p className="body-condensed text-charcoal">
                The firm advises businesses, promoter-led enterprises,
                family-led businesses and individuals. Engagements are formed
                only upon a formal retainer, and the firm is conscious of the
                Bar Council of India&apos;s restrictions on advertisement and
                solicitation by advocates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
