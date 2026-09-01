import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  practiceAreas,
  getPracticeArea,
  type PracticeArea,
} from "@/data/practice-areas";
import { accentHex, accentOnHex } from "@/lib/accents";
import { sectors, getSector } from "@/data/sectors";
import { getPerspectivesByPractice, perspectivesDisclaimer } from "@/data/perspectives";
import { contact } from "@/data/firm";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Practice area not found" };
  return {
    title: `${area.title} — Practice Area`,
    description: area.overview,
    alternates: { canonical: `/expertise/${area.slug}` },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const hex = accentHex[area.accent];
  const onHex = accentOnHex[area.accent];
  const idx = practiceAreas.findIndex((p) => p.slug === slug);
  const prev = practiceAreas[(idx - 1 + practiceAreas.length) % practiceAreas.length];
  const next = practiceAreas[(idx + 1) % practiceAreas.length];
  const relatedPerspectives = getPerspectivesByPractice(area.slug);
  const relatedSectors = area.relatedSectors
    .map((s) => getSector(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PracticeHero area={area} hex={hex} onHex={onHex} />

      <PracticeBody area={area} hex={hex} />

      <RelatedSectorsBlock area={area} hex={hex} relatedSectors={relatedSectors} />

      <RelatedPerspectivesBlock
        area={area}
        hex={hex}
        perspectives={relatedPerspectives}
      />

      <ContactStrip area={area} hex={hex} />

      <PrevNextNav prev={prev} next={next} />
    </>
  );
}

/* ============================================================
   HERO — colour-coded opening, common to every practice area
   ============================================================ */
function PracticeHero({
  area,
  hex,
  onHex,
}: {
  area: PracticeArea;
  hex: string;
  onHex: string;
}) {
  return (
    <section
      className="relative pt-8 md:pt-12 pb-10 md:pb-14 overflow-hidden"
      style={{ background: hex, color: onHex }}
    >
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        {/* top bar */}
        <div
          className="flex items-center justify-between border-b pb-4 mb-8 md:mb-10"
          style={{ borderColor: `${onHex}33` }}
        >
          <Link
            href="/expertise"
            className="group inline-flex items-center gap-2 mono-label opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>All expertise</span>
          </Link>
          <span className="folio opacity-60">
            Practice area {area.index} / 06
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: onHex }}
                />
                <span className="mono-label opacity-70">Practice Area</span>
              </div>
              <p className="margin-note" style={{ color: `${onHex}cc` }}>
                {area.short}
              </p>
            </div>
          </div>
          <div className="md:col-span-9 relative">
            {/* oversized index watermark */}
            <span
              className="absolute top-20 right-4 md:right-10 font-display leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(8rem, 22vw, 22rem)", color: `${onHex}14` }}
              aria-hidden="true"
            >
              {area.index}
            </span>
            <h1 className="display-1 relative max-w-[14ch]" style={{ color: onHex }}>
              {area.title}
            </h1>
            <p className="lead mt-8 max-w-2xl" style={{ color: `${onHex}dd` }}>
              {area.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BODY — switches on slug and renders a unique structure
   per practice area
   ============================================================ */
function PracticeBody({ area, hex }: { area: PracticeArea; hex: string }) {
  switch (area.slug) {
    case "corporate-advisory":
      return <CorporateAdvisoryBody hex={hex} />;
    case "commercial-contracts":
      return <CommercialContractsBody hex={hex} />;
    case "mergers-and-acquisitions":
      return <MergersAndAcquisitionsBody hex={hex} />;
    case "dispute-resolution":
      return <DisputeResolutionBody hex={hex} />;
    case "regulatory-and-compliance":
      return <RegulatoryAndComplianceBody hex={hex} />;
    case "insolvency-and-recovery":
      return <InsolvencyAndRecoveryBody hex={hex} />;
    default:
      return null;
  }
}

/* ---------------------------------------------------------------
   Reusable layout primitives — keep the chrome consistent
   while the body content varies per area
   --------------------------------------------------------------- */
function SectionShell({
  bg = "bg-ivory",
  index,
  eyebrow,
  title,
  hex,
  children,
  marginNote,
}: {
  bg?: "bg-ivory" | "bg-paper" | "bg-beige" | "bg-porcelain" | "bg-blush";
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  hex: string;
  children: React.ReactNode;
  marginNote?: string;
}) {
  return (
    <section className={`${bg} py-12 md:py-20 lg:py-24 border-b border-line`}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-14">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: hex }}
                aria-hidden="true"
              />
              <span className="mono-num text-stone-dark">{index}</span>
            </div>
            <p className="mono-label text-stone-dark">{eyebrow}</p>
            {marginNote && <p className="margin-note mt-4 max-w-[24ch]">{marginNote}</p>}
          </div>
          <div className="md:col-span-9">
            <h2 className="display-2 text-ink max-w-[18ch]">{title}</h2>
          </div>
        </div>
        <div className="md:pl-[calc(25%+2rem)]">{children}</div>
      </div>
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="lead text-charcoal measure max-w-2xl mb-5">{children}</p>
  );
}

function Definition({ term, hex, children }: { term: string; hex: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-5 mb-8 max-w-2xl">
      <p className="mono-label mb-2" style={{ color: hex }}>
        {term}
      </p>
      <p className="body-condensed text-charcoal measure">{children}</p>
    </div>
  );
}

/* ============================================================
   01 — CORPORATE ADVISORY
   Sections: Overview, Business Formation & Structure,
   Shareholder Relationships, Ongoing Corporate Counsel,
   Growth & Restructuring
   ============================================================ */
function CorporateAdvisoryBody({ hex }: { hex: string }) {
  return (
    <>
      <SectionShell
        index="01"
        eyebrow="Overview"
        hex={hex}
        title={
          <>
            The corporate spine of a{" "}
            <span style={{ color: hex }}>business</span>
          </>
        }
        marginNote="From formation through restructuring, the corporate layer shapes every other decision."
      >
        <Paragraph>
          Corporate advisory is the work of arranging the legal spine of a
          business — its entity, its shareholders, its governance and its
          lifecycle events — so that the rest of what the business does
          rests on a sound foundation. The work is rarely dramatic. It is
          structural, and the consequences of getting it wrong rarely surface
          until they become expensive.
        </Paragraph>
        <Paragraph>
          The firm advises companies, founders and family-led enterprises
          across the corporate lifecycle — from selecting the right entity
          and structuring the relationship between shareholders, through to
          the board&apos;s working rhythm and the moment when a business
          needs to be reorganised, merged, demerged or sold. The advice
          draws on the Companies Act, 2013, the secretarial standards
          issued by ICSI, the regulatory frameworks that govern specific
          industries, and the firm&apos;s commercial understanding of how
          Indian businesses actually run.
        </Paragraph>
        <Paragraph>
          The sections below set out the scope of the firm&apos;s corporate
          advisory practice — from formation through restructuring.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="02"
        eyebrow="Business Formation & Structure"
        hex={hex}
        title={<>Choosing the entity, drafting the charter</>}
        marginNote="STRUCTURE / 02 · The first decision a founder makes often has the longest tail."
      >
        <Paragraph>
          Entity selection is the first formal legal decision a founder
          takes, and its consequences run for the life of the business. A
          private limited company, a public limited company, a limited
          liability partnership or a one-person company each carry
          different consequences for liability, taxation, fundraising,
          governance and exit. The firm advises on the choice, then
          carries the decision through to incorporation and the drafting
          of the memorandum and articles of association.
        </Paragraph>
        <Paragraph>
          The articles of association, in particular, deserve more
          attention than the standard precedents they are often drawn
          from. Together with the shareholders&apos; agreement, the
          articles allocate power between the board and the shareholders,
          and set the rules for transfer of shares, issuance of new
          capital and the resolution of deadlocks. A poorly drafted
          articles can quietly undermine an otherwise careful shareholders&apos;
          agreement.
        </Paragraph>
        <Paragraph>
          The capitalisation table — who holds what, in what form, and
          with what rights — is structured to align with the founders&apos;
          commercial intent and the anticipated fundraising pathway.
          Early-stage decisions on sweat equity, employee stock options,
          convertible instruments and founder vesting are easier to take
          than to unwind.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="03"
        eyebrow="Shareholder Relationships"
        hex={hex}
        title={<>Arrangements between those who own the business</>}
        marginNote="Reserved matters, transfer restrictions and exit mechanics determine what happens when interests diverge."
      >
        <Paragraph>
          A shareholders&apos; agreement is, at its heart, an instrument for
          managing the relationship between those who own the business —
          and for managing what happens when their interests diverge.
          Negotiation and drafting of shareholders&apos; agreements,
          joint venture agreements and subscription agreements cover
          board composition, transfer restrictions, drag-along and
          tag-along rights, exit mechanics and the resolution of
          deadlocks.
        </Paragraph>
        <Paragraph>
          The firm pays particular attention to reserved matters — the
          decisions that require specified shareholder or board approval,
          and which function as a veto mechanism over the most
          consequential commercial choices. The list of reserved matters
          must be tailored to the specific relationship. A generic
          template will often either over-include routine decisions,
          clogging the governance machinery, or under-include matters
          that are critical to a particular shareholder.
        </Paragraph>
        <Paragraph>
          Exit mechanics — put and call options, sale windows,
          buy-sell arrangements, the consequences of a shareholder
          ceasing to be involved in the business — are drafted with an
          eye to enforcement, not merely to recording intent. An exit
          clause that is unworkable in practice is worse than no clause
          at all, because it colours expectations.
        </Paragraph>
        <Paragraph>
          For related reading on this subject, see the firm&apos;s
          perspective on{" "}
          <Link
            href="/perspectives/shareholder-reserved-matters"
            className="link-underline text-ink hover:text-copper"
          >
            shareholder reserved matters
          </Link>
          .
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="04"
        eyebrow="Ongoing Corporate Counsel"
        hex={hex}
        title={<>Governance, compliance and the rhythm of the board</>}
        marginNote="Companies Act, 2013 obligations are not annual events; they accumulate throughout the year."
      >
        <Paragraph>
          Once the entity exists and the shareholders are aligned, the
          ongoing work of corporate counsel begins — board constitution,
          independent-director obligations, related-party transaction
          approvals, meeting cadence and minute-book maintenance, aligned
          with the Companies Act, 2013 and the applicable secretarial
          standards issued by ICSI.
        </Paragraph>
        <Paragraph>
          Much of this work is unglamorous and easily deferred. The
          consequence of deferral is rarely a single, visible failure —
          it is the gradual accumulation of gaps that surface only when
          a transaction, an audit or a regulator requires the record to
          be produced. The firm&apos;s ongoing-counsel engagements are
          structured to keep the corporate record in a state that can
          be placed before a board, an investor, a regulator or a court
          without reconstruction.
        </Paragraph>
        <Paragraph>
          Related-party transactions, in particular, have moved from a
          compliance afterthought to a board-level concern under the
          Companies Act, 2013. The firm advises on the identification,
          approval and disclosure of related-party transactions, the
          structuring of arm&apos;s-length pricing support, and the
          audit-committee and board approvals required.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="05"
        eyebrow="Growth & Restructuring"
        hex={hex}
        title={<>When the corporate shape needs to change</>}
        marginNote="Schemes of arrangement, demergers and internal reorganisations route through the NCLT."
      >
        <Paragraph>
          Businesses rarely stay in the shape in which they were
          incorporated. As they grow, raise capital, acquire and divest,
          the corporate structure must keep pace. The firm advises on
          schemes of arrangement, demergers, amalgamations and internal
          reorganisations — including NCLT approvals, valuation reports,
          creditor consents and the regulatory filings required to give
          effect to the restructuring.
        </Paragraph>
        <Paragraph>
          A restructuring is rarely only a legal exercise. It carries
          tax, regulatory, employment and contractual consequences, and
          the legal work must be coordinated with the tax, finance and
          operational teams. The firm&apos;s role is to drive the legal
          architecture while flagging the matters that require
          coordination — not to assume the other streams will resolve
          themselves.
        </Paragraph>
        <Paragraph>
          Where a restructuring anticipates a transaction — a sale, an
          investment or a listing — the work is calibrated to the
          transaction&apos;s likely requirements, so that the structure
          produced does not need to be reworked when the transaction
          arrives.
        </Paragraph>
        <Paragraph>
          For transaction-specific work — share purchase agreements,
          asset purchase agreements, term sheets, due diligence — see
          the firm&apos;s{" "}
          <Link
            href="/expertise/mergers-and-acquisitions"
            className="link-underline text-ink hover:text-copper"
          >
            Mergers &amp; Acquisitions
          </Link>{" "}
          practice.
        </Paragraph>
      </SectionShell>
    </>
  );
}

/* ============================================================
   02 — COMMERCIAL CONTRACTS
   Headline: "Contracts are business architecture."
   Margin annotations: TERM / 04, INDEMNITY (sparingly)
   ============================================================ */
function CommercialContractsBody({ hex }: { hex: string }) {
  return (
    <>
      {/* Manifesto / headline */}
      <section className="bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="mono-label text-stone-dark mb-3">§ Manifesto</p>
              <p className="margin-note max-w-[24ch]">
                A contract allocates risk; the rest is drafting.
              </p>
            </div>
            <div className="md:col-span-9">
              <p
                className="font-display italic leading-tight max-w-[20ch]"
                style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)", color: hex }}
              >
                Contracts are business architecture.
              </p>
              <p className="lead mt-6 max-w-2xl text-charcoal measure">
                A commercial contract is the legal architecture of a
                business relationship. It records what each party has
                agreed to do, allocates the risk of what might go wrong,
                and sets the rules for what happens when the relationship
                ends. The drafting determines whether the architecture
                holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Before drafting */}
      <SectionShell
        bg="bg-paper"
        index="01"
        eyebrow="Before drafting"
        hex={hex}
        title={<>Understand the relationship before drafting the contract</>}
        marginNote="Before / 01 — Commercial objective, leverage, dependencies, failure scenarios."
      >
        <Paragraph>
          The drafting begins only after the commercial architecture is
          understood. Four questions structure this stage: what is the
          commercial objective of the arrangement; where does each party
          sit on leverage; what are the operational dependencies between
          the parties; and what failure scenarios — late performance,
          non-payment, breach of confidentiality, change of control —
          should the contract anticipate?
        </Paragraph>
        <Paragraph>
          Commercial objective is the lodestar. A distribution agreement
          drafted to support a brand&apos;s national expansion will look
          materially different from one drafted for a single territory
          pilot, even if the structure of the relationship is similar.
          Leverage — which party needs the other more, and at what stage
          of the relationship — informs how risk is allocated in the
          drafting.
        </Paragraph>
        <Paragraph>
          Operational dependencies (who is dependent on whose systems,
          data, approvals, infrastructure) shape the operational clauses
          and the remedies that follow breach. Failure scenarios drive
          the termination, indemnity and dispute-resolution architecture.
          A contract drafted without these questions answered will read
          like a template; a contract drafted with them answered will
          read like the particular relationship it governs.
        </Paragraph>
      </SectionShell>

      {/* 02 Drafting */}
      <SectionShell
        index="02"
        eyebrow="Drafting"
        hex={hex}
        title={<>Provisions that determine where risk lives</>}
        marginNote="TERM / 04, INDEMNITY — a separate remedy, not a liability cap."
      >
        <Paragraph>
          The drafting stage is where risk is allocated in language. The
          provisions below are listed roughly in the order they tend to
          surface in negotiation, not in the order they appear in the
          contract. Each carries its own consequences.
        </Paragraph>

        <Definition term="Pricing & Payment" hex={hex}>
          The commercial terms — pricing mechanics, payment milestones,
          invoicing cadence, taxes, late-payment consequences and the
          treatment of disputed amounts. Clarity here prevents a
          significant share of disputes before they arise.
        </Definition>
        <Definition term="Warranties" hex={hex}>
          Statements of fact given by one party to the other on which the
          other is entitled to rely. Warranties allocate the risk of an
          untrue statement; their scope, the time limits on bringing
          claims, and the caps on recovery determine how the allocation
          works in practice.
        </Definition>
        <Definition term="Indemnities" hex={hex}>
          A contractual promise to reimburse the other party for a
          specified loss. An indemnity is a separate remedy — it sits
          outside the general liability cap and shifts risk allocation
          materially. The trigger, the scope of the losses indemnified,
          and the procedural mechanics (notice, defence, settlement)
          determine whether the indemnity is a real protection or a
          paper one.
        </Definition>
        <Definition term="Limitation of Liability" hex={hex}>
          The clause that determines which losses a party must bear, and
          up to what ceiling. Indian courts distinguish between excluding
          liability for breach and capping the quantum of recoverable
          loss — and the distinction materially affects enforceability.
          Liability for fraud, wilful default and gross negligence is not
          subject to limitation or exclusion.
        </Definition>
        <Definition term="Intellectual Property" hex={hex}>
          Ownership of pre-existing IP, ownership of IP created under the
          contract, the scope of any licence granted, the consequences
          of termination on the licence, and the audit rights that
          accompany royalty-bearing arrangements. IP clauses drafted
          carelessly are difficult to unwind.
        </Definition>
        <Definition term="Confidentiality" hex={hex}>
          The definition of confidential information, the permitted uses,
          the obligations on personnel and sub-contractors, the duration
          of the obligation post-termination, and the remedies for
          breach.
        </Definition>
        <Definition term="Termination" hex={hex}>
          The grounds for termination (breach, insolvency, convenience),
          the notice and cure periods, the consequences of termination on
          unsold stock, IP licences, accrued rights and post-term
          restraints. Termination clauses determine how cleanly the
          parties can separate.
        </Definition>
        <Definition term="Exclusivity" hex={hex}>
          Whether the arrangement grants exclusivity, in what territory,
          for what duration, and subject to what performance conditions.
          Exclusivity is frequently the most commercially significant
          term in a distribution or licence arrangement.
        </Definition>
        <Definition term="Dispute Mechanisms" hex={hex}>
          The forum (arbitration, courts, mediation), the seat, the
          governing law, the language, the number of arbitrators and
          the institutional rules. The dispute clause, drafted properly,
          can shorten a dispute by years; drafted poorly, it can extend
          one.
        </Definition>

        <Paragraph>
          For an applied examination of how Indian courts approach
          limitation-of-liability clauses, see the firm&apos;s
          perspective{" "}
          <Link
            href="/perspectives/limitation-of-liability-clauses-commercial-contracts"
            className="link-underline text-ink hover:text-copper"
          >
            on the subject
          </Link>
          .
        </Paragraph>
      </SectionShell>

      {/* 03 Negotiation */}
      <SectionShell
        bg="bg-paper"
        index="03"
        eyebrow="Negotiation"
        hex={hex}
        title={<>Risk allocation as a commercial conversation</>}
        marginNote="Negotiation / 03 — Risk should be allocated to the party able to manage it."
      >
        <Paragraph>
          Negotiation is the stage at which drafted positions are tested
          against the commercial reality of the relationship. The firm
          advises on the negotiation of commercial agreements —
          calibration of clauses to the client&apos;s risk posture and
          bargaining position, identification of the provisions worth
          holding firm on, and the provisions that can be conceded
          without material consequence.
        </Paragraph>
        <Paragraph>
          A useful framing is that risk should be allocated to the party
          able to manage it. The party with control over a risk is
          the party positioned to bear it; the party without control
          should not be made to bear it without compensation. The
          framing is not always followed in practice, but it is a sound
          reference point for evaluating draft positions.
        </Paragraph>
        <Paragraph>
          Negotiation is also where the commercial relationship is
          tested — how each party handles disagreement at the drafting
          stage often foreshadows how they will handle disagreement
          during performance. A party that is unreasonable in
          negotiation is rarely easier to deal with once the contract is
          signed.
        </Paragraph>
      </SectionShell>

      {/* 04 Contract lifecycle */}
      <SectionShell
        index="04"
        eyebrow="Contract Lifecycle"
        hex={hex}
        title={<>The contract does not end at signing</>}
        marginNote="Lifecycle / 04 — Amendments, renewals, disputes, termination, interpretation."
      >
        <Paragraph>
          A contract is a living instrument through its lifecycle. The
          firm advises on amendments (formal variations, side letters,
          waiver letters), renewals (auto-renewal triggers, notice of
          non-renewal, renegotiation of commercial terms), disputes
          (contract review at the point of breach, pre-action
          correspondence, cure-period analysis), termination
          (consequences of termination, transition obligations, post-term
          restraints), and interpretation (how the contract is read by
          a court or tribunal when language is contested).
        </Paragraph>
        <Paragraph>
          Indian courts construe contracts by reference to the plain
          meaning of the language, read in the context of the contract
          as a whole and the surrounding circumstances known to both
          parties at the time of contracting. The interpretation is not
          always what the parties intended; it is what a reasonable
          person would understand the language to mean. Drafting with
          this principle in mind — clear language, defined terms, no
          internal contradictions — is more valuable than any
          bespoke-intent clause.
        </Paragraph>
        <Paragraph>
          Disputes at the lifecycle stage are often most efficiently resolved
          through correspondence and negotiation rather than
          proceedings. The firm&apos;s approach to pre-litigation strategy
          is set out in the{" "}
          <Link
            href="/expertise/dispute-resolution"
            className="link-underline text-ink hover:text-copper"
          >
            Dispute Resolution
          </Link>{" "}
          practice area.
        </Paragraph>
      </SectionShell>

      {/* 05 Common agreement types */}
      <SectionShell
        bg="bg-paper"
        index="05"
        eyebrow="Common Agreement Types"
        hex={hex}
        title={<>The instruments the firm drafts and reviews</>}
        marginNote="A non-exhaustive list — engagements are scoped to the relationship, not to a precedent."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line max-w-4xl">
          {[
            {
              t: "Supply & Manufacturing",
              d: "Manufacturing, supply, tolling and raw-material contracts — quality and warranty regimes, pricing mechanics, minimum off-take obligations, force-majeure.",
            },
            {
              t: "Distribution",
              d: "Distribution, dealership, agency and franchise arrangements — territory, exclusivity, channel restrictions, post-term restraints, brand control.",
            },
            {
              t: "Service",
              d: "Service-level agreements, master services agreements, statements of work — service levels, credits, remedies, transition-out obligations.",
            },
            {
              t: "Licensing",
              d: "Brand licensing, technology licensing, royalty arrangements — scope, audit rights, IP ownership, post-termination rights.",
            },
            {
              t: "Technology",
              d: "SaaS agreements, platform agreements, software development, IP assignment, data processing — scope, IP, data, liability carve-outs.",
            },
            {
              t: "Vendor",
              d: "Vendor agreements, framework supply arrangements, procurement contracts — pricing, performance, audit, termination.",
            },
          ].map((row, i) => (
            <div key={row.t} className="bg-paper p-6">
              <span
                className="mono-num block mb-2"
                style={{ color: hex }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg text-ink mb-2">{row.t}</h3>
              <p className="text-sm text-charcoal leading-relaxed">{row.d}</p>
            </div>
          ))}
        </div>
        <p className="body-condensed text-charcoal mt-6 max-w-2xl measure">
          For a closer examination of distribution arrangements in
          particular, see the firm&apos;s perspective{" "}
          <Link
            href="/perspectives/distribution-agreements-key-considerations"
            className="link-underline text-ink hover:text-copper"
          >
            on what businesses should consider before entering a
            distribution arrangement
          </Link>
          .
        </p>
      </SectionShell>
    </>
  );
}

/* ============================================================
   03 — MERGERS & ACQUISITIONS
   Transaction-focused; "legal due diligence" (NOT "financial
   due diligence"). Sections in transaction-sequence order.
   ============================================================ */
function MergersAndAcquisitionsBody({ hex }: { hex: string }) {
  return (
    <>
      <SectionShell
        index="01"
        eyebrow="Transaction Structuring"
        hex={hex}
        title={<>The first decision shapes everything that follows</>}
        marginNote="STRUCTURE / 01 — Asset, share, slump sale or scheme of arrangement."
      >
        <Paragraph>
          The structure of a transaction is the first decision, and it
          shapes every decision that follows — what is acquired, what
          liabilities are assumed, what regulatory approvals are
          triggered, what the tax cost is, and how long the transaction
          takes. The firm advises on structuring as an asset purchase, a
          share purchase, a slump sale or a scheme of arrangement,
          structured with consideration to relevant tax implications, in coordination with tax advisers where appropriate, the regulatory approvals
          triggered, and the commercial timeline the parties wish to
          achieve.
        </Paragraph>
        <Paragraph>
          A share purchase transfers the target entity whole — including
          its contracts, employees, regulatory licences and liabilities.
          An asset purchase allows the parties to select which assets and
          contracts transfer, but requires the consent of counterparties
          to assign. A slump sale is a going-concern transfer of an
          undertaking for a lump-sum consideration, governed by Section
          50B of the Income-tax Act. A scheme of arrangement under
          Sections 230–232 of the Companies Act, 2013 is a court-driven
          process used for demergers, amalgamations and complex
          reorganisations.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="02"
        eyebrow="Legal Due Diligence"
        hex={hex}
        title={<>A structured examination of legal rights and risks</>}
        marginNote="DUE DILIGENCE / 02 — Identification, not invention, of risk."
      >
        <Paragraph>
          Legal due diligence is a structured examination of the legal
          rights, obligations and risks relevant to a proposed
          transaction. Its purpose is not to find reasons not to
          transact, but to identify the matters that should inform the
          structure, pricing, conditions precedent, representations,
          warranties and indemnities of the transaction.
        </Paragraph>
        <Paragraph>
          The scope of diligence is shaped by the nature of the
          transaction and the industry in which the target operates.
          Corporate, contractual, employment, regulatory, litigation,
          intellectual property and real estate matters are typically
          examined. In sectors with specific regulatory regimes —
          financial services, insurance, telecom, pharmaceuticals — the
          regulatory review is particularly significant.
        </Paragraph>
        <Paragraph>
          The process is as important as the findings. Diligence
          requests must be calibrated to elicit the information that
          matters, not to overwhelm the target with generic requests.
          The review should distinguish between matters that affect
          valuation, matters that affect the transaction structure, and
          matters that require contractual protection through warranties
          or indemnities. The deliverable — typically a risk-ranked
          report — should connect each finding to its commercial
          consequence: does this matter affect price, structure,
          conditions, or warranties?
        </Paragraph>
        <Paragraph>
          The firm does not perform financial due diligence; that is the
          work of the financial advisors and auditors on the
          transaction. The firm&apos;s role is the legal due diligence,
          which is structured to support and inform — not replace —
          the financial and commercial analysis.
        </Paragraph>
        <Paragraph>
          For an extended note on the scope, process and deliverables of
          a legal due-diligence exercise, see the firm&apos;s
          perspective on{" "}
          <Link
            href="/perspectives/key-considerations-legal-due-diligence"
            className="link-underline text-ink hover:text-copper"
          >
            key considerations in legal due diligence
          </Link>
          .
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="03"
        eyebrow="Term Sheets"
        hex={hex}
        title={<>The architecture of the deal, in short form</>}
      >
        <Paragraph>
          The term sheet records the commercial architecture of the
          transaction in short form — what is being acquired, by whom,
          for what consideration, on what conditions, and with what
          mechanics for closing. A well-drafted term sheet surfaces the
          commercial disagreements before the long-form agreement is
          negotiated, when the cost of resolution is lowest.
        </Paragraph>
        <Paragraph>
          The firm advises on which provisions of the term sheet should
          be binding (confidentiality, exclusivity, governing law) and
          which should be non-binding (the commercial terms, subject to
          definitive documentation). The distinction matters: a binding
          commercial term sheet can be enforced before the long-form
          agreement is signed, with consequences the parties may not
          have intended.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="04"
        eyebrow="Share Purchase Agreements"
        hex={hex}
        title={<>The definitive contract for an equity transfer</>}
      >
        <Paragraph>
          A share purchase agreement is the definitive contract by which
          equity in a target entity is transferred. It carries the
          commercial terms (price, structure, adjustment mechanics), the
          representations and warranties given by the seller about the
          target, the indemnities that protect the buyer against specific
          identified risks, the conditions that must be satisfied before
          closing, and the post-closing obligations of the parties.
        </Paragraph>
        <Paragraph>
          The scope of the representations and warranties is the
          contractual translation of the legal due diligence — what the
          buyer has been told about the target, the buyer requires the
          seller to confirm in the contract. The indemnities provide a
          dedicated remedy for specific identified risks that surfaced
          in diligence, sitting outside the general warranty regime.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="05"
        eyebrow="Asset Purchase Agreements"
        hex={hex}
        title={<>Selecting what transfers and what does not</>}
      >
        <Paragraph>
          An asset purchase agreement transfers identified assets of a
          business rather than the equity in the entity that owns them.
          The structure allows the parties to select which assets and
          contracts transfer, and which remain with the seller — useful
          where the buyer does not wish to acquire particular
          liabilities or operations.
        </Paragraph>
        <Paragraph>
          The agreement must address the assignment of contracts (which
          typically requires the consent of the counterparty), the
          transfer of employees (governed by the relevant labour law),
          the transfer of regulatory licences (which may not be
          transferable and may require fresh applications), and the
          allocation of pre-completion liabilities between seller and
          buyer. These moving parts are what distinguish an asset
          purchase from a share purchase in practice.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="06"
        eyebrow="Shareholder Arrangements"
        hex={hex}
        title={<>The governance layer after the acquisition</>}
      >
        <Paragraph>
          Where the transaction results in joint ownership — a joint
          venture, a minority investment, a staggered acquisition — the
          shareholders&apos; agreement is the instrument that allocates
          governance between the parties post-closing. Board composition,
          reserved matters, transfer restrictions, exit mechanics and
          the resolution of deadlocks are the work of this agreement.
        </Paragraph>
        <Paragraph>
          The firm&apos;s corporate advisory practice sets out the
          general approach to{" "}
          <Link
            href="/expertise/corporate-advisory"
            className="link-underline text-ink hover:text-copper"
          >
            shareholder arrangements
          </Link>{" "}
          in more detail.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="07"
        eyebrow="Conditions Precedent"
        hex={hex}
        title={<>What must be satisfied before the transaction can close</>}
      >
        <Paragraph>
          Conditions precedent are the matters that must be satisfied
          between signing and closing — regulatory approvals, third-party
          consents, the resolution of identified diligence items, the
          procurement of missing documents. The agreement must specify
          which conditions are for the buyer&apos;s account, which are
          for the seller&apos;s, the timeframe for satisfaction, and the
          consequences of failure.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="08"
        eyebrow="Closing"
        hex={hex}
        title={<>The mechanics of giving effect to the transaction</>}
      >
        <Paragraph>
          Closing is the act of giving effect to the transaction — the
          transfer of shares or assets, the payment of consideration,
          the delivery of the documents of title, the filings required
          to perfect the transfer. A well-run closing is the result of
          preparation: a closing checklist, a sequence of deliverables,
          and a clear allocation of responsibility between the parties
          and their advisors.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="09"
        eyebrow="Post-closing Matters"
        hex={hex}
        title={<>Integration, harmonisation and wind-down</>}
      >
        <Paragraph>
          Post-closing, the legal work continues: harmonisation of
          contracts, employment structures, regulatory registrations and
          corporate-secretarial records, the wind-down of residual or
          dormant entities, and the management of any post-closing
          adjustments, escrows or earn-outs. The firm advises on the
          integration phase — the legal scaffolding around the
          commercial integration work that the parties themselves drive.
        </Paragraph>
        <Paragraph>
          For regulatory approvals specific to a transaction — the
          Competition Commission of India, the Reserve Bank of India,
          SEBI, sectoral regulators — see the firm&apos;s{" "}
          <Link
            href="/expertise/regulatory-and-compliance"
            className="link-underline text-ink hover:text-copper"
          >
            Regulatory &amp; Compliance
          </Link>{" "}
          practice.
        </Paragraph>
      </SectionShell>
    </>
  );
}

/* ============================================================
   04 — DISPUTE RESOLUTION
   Four numbered stages: before, proceedings, interim, resolution
   ============================================================ */
function DisputeResolutionBody({ hex }: { hex: string }) {
  return (
    <>
      <SectionShell
        index="01"
        eyebrow="Before the Dispute"
        hex={hex}
        title={<>The decisions taken before proceedings shape the outcome</>}
        marginNote="PRE-LITIGATION / 01 — Contract review, evidence, limitation, notice, strategy."
      >
        <Paragraph>
          The decisions taken before proceedings are issued often
          determine the outcome of a commercial dispute. Pre-litigation
          strategy is not merely preparation for a claim — it is the
          process by which a party assesses its position, preserves its
          evidence, and evaluates whether to proceed, negotiate or step
          back.
        </Paragraph>
        <Paragraph>
          Contract review is the first step: the dispute must be located
          in the contractual framework, including the dispute-resolution
          clause, the governing law, the limitations on remedies, and
          any pre-action requirements such as negotiation periods or
          mediation. Evidence preservation — identifying relevant
          communications, documents and witnesses before they are lost
          — is critical, particularly in commercial disputes where the
          documentary record often determines the outcome.
        </Paragraph>
        <Paragraph>
          Limitation analysis is a threshold question. The Limitation
          Act, 1963 sets out the periods within which different claims
          must be brought, and the consequences of missing a limitation
          period are severe. A legal notice under Section 80 of the
          Code of Civil Procedure, 1908 may be a statutory prerequisite
          depending on the parties involved.
        </Paragraph>
        <Paragraph>
          The assessment of settlement leverage — the relative strength
          of each party&apos;s position, the cost and duration of
          proceedings, and the commercial relationship — should inform
          the decision to litigate, negotiate or explore alternative
          resolution. The firm&apos;s approach to pre-litigation
          strategy is set out in its perspective on{" "}
          <Link
            href="/perspectives/pre-litigation-strategy-commercial-disputes"
            className="link-underline text-ink hover:text-copper"
          >
            pre-litigation strategy in commercial disputes
          </Link>
          .
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="02"
        eyebrow="Proceedings"
        hex={hex}
        title={<>Representation across the forums that hear commercial disputes</>}
        marginNote="PROCEEDINGS / 02 — Arbitration, commercial courts, NCLT, tribunals."
      >
        <Paragraph>
          The firm represents clients across the principal forums that
          hear commercial disputes in India — domestic and international
          arbitrations, commercial courts, the National Company Law
          Tribunal, and sector-specific tribunals.
        </Paragraph>
        <Definition term="Commercial Arbitration" hex={hex}>
          Representation in domestic and international arbitrations
          under the Arbitration and Conciliation Act, 1996 — including
          institution-administered arbitrations (SIAC, LCIA, DIAC, MCIA),
          applications for interim relief, and the enforcement and
          challenge of arbitral awards.
        </Definition>
        <Definition term="Commercial Disputes" hex={hex}>
          Suits before the commercial courts in disputes arising from
          commercial contracts, trade receivables, business torts and
          other commercial causes of action — including the
          pre-institution mediation required under the Commercial Courts
          Act, 2015 where applicable.
        </Definition>
        <Definition term="Shareholder Disputes" hex={hex}>
          Disputes arising from shareholders&apos; agreements and joint
          venture arrangements — including oppression and mismanagement
          petitions under Sections 241–242 of the Companies Act, 2013,
          and the rectification of the register of members under
          Section 59 of the Companies Act, 2013.
        </Definition>
        <Definition term="Contractual Disputes" hex={hex}>
          Disputes arising from breach of commercial contracts —
          including the construction of contractual language, the
          assessment of damages, the availability of specific
          performance, and the consequences of termination.
        </Definition>
        <Definition term="Tribunal Matters" hex={hex}>
          Representation before sector-specific tribunals — including
          the National Company Law Appellate Tribunal, the Telecom
          Disputes Settlement and Appellate Tribunal, and statutory
          appellate tribunals where the dispute falls within their
          jurisdiction.
        </Definition>
        <Definition term="Recovery Matters" hex={hex}>
          Recovery of trade receivables and secured debt through
          SARFAESI proceedings, applications under the Insolvency and
          Bankruptcy Code, civil suits, and execution proceedings — see
          also the firm&apos;s{" "}
          <Link
            href="/expertise/insolvency-and-recovery"
            className="link-underline text-ink hover:text-copper"
          >
            Insolvency &amp; Recovery
          </Link>{" "}
          practice.
        </Definition>
      </SectionShell>

      <SectionShell
        index="03"
        eyebrow="Interim Strategy"
        hex={hex}
        title={<>Protecting the position while the dispute is heard</>}
        marginNote="INTERIM / 03 — Urgent relief, protective measures, settlement possibilities."
      >
        <Paragraph>
          Between the initiation of proceedings and the final hearing,
          interim strategy determines whether the position that the
          party is seeking to protect still exists at the time of
          judgment. The firm advises on the procurement of urgent
          interim relief — injunctions, mareva-style asset-preservation
          orders, the appointment of receivers, the preservation of
          property in dispute — and on the protective measures
          available to a party resisting such relief.
        </Paragraph>
        <Paragraph>
          In arbitration, interim relief is available from both the
          arbitral tribunal (under Section 17 of the Arbitration and
          Conciliation Act, 1996) and, in support, from a court (under
          Section 9). The choice of forum and the timing of the
          application are strategic decisions, informed by the seat of
          arbitration and the institutional rules.
        </Paragraph>
        <Paragraph>
          Interim strategy is also the stage at which settlement
          possibilities are realistically assessed. The cost and
          duration of proceedings, the relative strength of each
          party&apos;s position, and the commercial cost of continued
          uncertainty all inform whether a negotiated resolution is
          preferable to a contested outcome. Settlement is not a
          concession; it is a strategic decision.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="04"
        eyebrow="Resolution & Enforcement"
        hex={hex}
        title={<>From award to recovery</>}
        marginNote="ENFORCEMENT / 04 — Settlement, awards, decrees, recovery."
      >
        <Paragraph>
          The conclusion of a dispute is not the same as its resolution.
          A judgment or arbitral award must, in many cases, be enforced
          — and enforcement has its own procedural architecture. The
          firm advises on the enforcement of arbitral awards (under
          Part I and Part II of the Arbitration and Conciliation Act,
          1996), decrees of the court (through execution proceedings),
          and settlements recorded before a court or tribunal.
        </Paragraph>
        <Paragraph>
          Settlement is, in practice, the most common conclusion to a
          commercial dispute. A settlement that is properly recorded —
          clear in its terms, comprehensive in its scope, and capable of
          enforcement — provides a durable resolution. A settlement that
          is poorly drafted often becomes the source of further
          dispute.
        </Paragraph>
        <Paragraph>
          Enforcement of a decree or award may involve the attachment
          and sale of movable and immovable property, the garnishment
          of receivables, and the arrest and detention of a judgment
          debtor in exceptional circumstances. The firm&apos;s work in
          this stage draws on the Code of Civil Procedure, 1908, the
          Arbitration and Conciliation Act, 1996, and, where applicable,
          the SARFAESI Act, 2002 and the Insolvency and Bankruptcy
          Code, 2016.
        </Paragraph>
        <Paragraph>
          Recovery of trade receivables and secured debt is addressed in
          more detail in the firm&apos;s{" "}
          <Link
            href="/expertise/insolvency-and-recovery"
            className="link-underline text-ink hover:text-copper"
          >
            Insolvency &amp; Recovery
          </Link>{" "}
          practice.
        </Paragraph>
      </SectionShell>
    </>
  );
}

/* ============================================================
   05 — REGULATORY & COMPLIANCE
   Sections grouped by regulatory theme; cross-link strongly to
   Alcoholic Beverages, FMCG, Infrastructure, Hospitality,
   Technology, Renewable Energy.
   ============================================================ */
function RegulatoryAndComplianceBody({ hex }: { hex: string }) {
  return (
    <>
      <SectionShell
        index="01"
        eyebrow="Corporate Compliance"
        hex={hex}
        title={<>The statutory baseline every business must meet</>}
        marginNote="CORPORATE / 01 — Companies Act, 2013, secretarial standards, filings."
      >
        <Paragraph>
          Corporate compliance is the statutory baseline every business
          must meet — annual filings under the Companies Act, 2013,
          director-related obligations, the maintenance of statutory
          registers, the holding of meetings at the cadence required,
          and the secretarial standards issued by ICSI. The firm&apos;s
          corporate-compliance work is integrated with its{" "}
          <Link
            href="/expertise/corporate-advisory"
            className="link-underline text-ink hover:text-copper"
          >
            Corporate Advisory
          </Link>{" "}
          practice — the same lawyers who structure a transaction
          oversee the compliance that follows it.
        </Paragraph>
        <Paragraph>
          For listed entities, the compliance baseline rises sharply —
          SEBI&apos;s Listing Obligations and Disclosure Requirements
          (LODR), insider-trading regulations, the substantial-acquisition
          and take-over regulations, and the related-party-transaction
          framework. For unlisted public companies, a calibrated subset
          applies.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="02"
        eyebrow="Licensing"
        hex={hex}
        title={<>The permissions a business needs to operate</>}
      >
        <Paragraph>
          Most businesses require permissions to operate — entity
          registrations, tax registrations, industry-specific licences,
          and operational approvals. The firm advises on the
          identification of the licences required at the federal, state
          and municipal levels, the application process, the maintenance
          of licences through renewal cycles, and the consequences of
          operating without a required licence.
        </Paragraph>
        <Paragraph>
          Licensing work is particularly significant in regulated sectors.
          In{" "}
          <Link href="/sectors#alcoholic-beverages" className="link-underline text-ink hover:text-copper">
            alcoholic beverages
          </Link>
          , state excise regimes govern manufacture, storage, distribution
          and sale — each with its own licensing architecture. In{" "}
          <Link href="/sectors#hospitality" className="link-underline text-ink hover:text-copper">
            hospitality
          </Link>
          , excise licences, tourism registrations and food-safety
          licences operate alongside the commercial contracts that
          underpin operations.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="03"
        eyebrow="Sector Regulation"
        hex={hex}
        title={<>The frameworks that govern specific industries</>}
        marginNote="SECTOR / 03 — RBI, SEBI, excise, consumer-facing regulation, industry licensing."
      >
        <Paragraph>
          Sector-specific regulation is the layer of law that applies
          only to a particular industry. The firm advises on the
          frameworks that govern the industries it serves — the
          Reserve Bank of India for non-banking financial companies
          and payment-system participants; the Securities and Exchange
          Board of India for listed entities and intermediaries; the
          state excise authorities for alcoholic-beverages
          manufacturers and distributors; consumer-facing regulation
          for FMCG and retail; and the sector-specific licensing that
          applies to telecom, insurance, pharmaceuticals and other
          regulated industries.
        </Paragraph>
        <Paragraph>
          The sectoral view informs the firm&apos;s advice across all
          six practice areas — corporate advisory, commercial
          contracts, M&amp;A, dispute resolution, insolvency and
          regulatory work. The sectors most actively regulated by the
          firm&apos;s clients include{" "}
          <Link href="/sectors#alcoholic-beverages" className="link-underline text-ink hover:text-copper">
            alcoholic beverages
          </Link>
          ,{" "}
          <Link href="/sectors#fmcg" className="link-underline text-ink hover:text-copper">
            FMCG
          </Link>
          ,{" "}
          <Link href="/sectors#infrastructure" className="link-underline text-ink hover:text-copper">
            infrastructure
          </Link>
          ,{" "}
          <Link href="/sectors#hospitality" className="link-underline text-ink hover:text-copper">
            hospitality
          </Link>
          ,{" "}
          <Link href="/sectors#technology" className="link-underline text-ink hover:text-copper">
            technology
          </Link>{" "}
          and{" "}
          <Link href="/sectors#renewable-energy" className="link-underline text-ink hover:text-copper">
            renewable energy
          </Link>
          .
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="04"
        eyebrow="Internal Compliance Frameworks"
        hex={hex}
        title={<>Building a defensible compliance trail inside the business</>}
      >
        <Paragraph>
          The most effective regulatory defence is not a document
          prepared after the regulator has come knocking; it is the
          internal framework that the business maintains day-to-day.
          The firm designs and implements internal compliance frameworks
          — policies, training modules, escalation matrices, the
          insider-trading structured digital database required under
          SEBI regulations, and whistle-blower mechanisms appropriate
          to the entity&apos;s scale and risk profile.
        </Paragraph>
        <Paragraph>
          A defensible compliance trail is one that can be placed
          before a board, an audit committee, an external auditor or a
          regulator without reconstruction. The firm&apos;s framework
          work is calibrated to the entity&apos;s scale — the
          compliance architecture of a listed company is materially
          different from that of a closely-held private company, and
          both are different again from that of an operational joint
          venture.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="05"
        eyebrow="Regulatory Notices"
        hex={hex}
        title={<>Responding when the regulator comes asking</>}
        marginNote="NOTICES / 05 — Show-cause, personal hearings, consent, settlement."
      >
        <Paragraph>
          A regulatory notice is rarely the first communication a
          business has with a regulator — and how it is handled
          materially affects the outcome. The firm represents clients
          before SEBI, the RBI, the Ministry of Corporate Affairs and
          sectoral regulators — including responses to show-cause
          notices, applications for interpretive guidance, consent and
          settlement applications, and appearances at personal
          hearings.
        </Paragraph>
        <Paragraph>
          The first response to a notice is often the most important —
          an admission of facts that should have been contested, or a
          failure to put on record the documents that support the
          client&apos;s position, can be difficult to unwind at a later
          stage. The firm&apos;s approach is to engage with the
          regulator on the merits, with a response that is
          comprehensive on the facts, clear on the law, and calibrated
          to the strategic posture the client wishes to take.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="06"
        eyebrow="Regulatory Risk Assessment"
        hex={hex}
        title={<>Identifying risk before it becomes liability</>}
      >
        <Paragraph>
          A regulatory risk assessment is a structured audit of the
          client&apos;s compliance posture across the regulatory regimes
          applicable to its business — identifying gaps, prioritising
          remediation, and producing a defensible compliance trail that
          can be placed before boards and regulators. The assessment is
          typically conducted at the outset of an engagement, on a
          periodic basis, or ahead of a transaction that requires the
          regulatory position to be confirmed.
        </Paragraph>
        <Paragraph>
          The deliverable is a risk-ranked report — what is in order,
          what requires remediation, what requires disclosure, what
          requires escalation. The report is calibrated to the
          audience: a board-level summary, an operational
          remediation plan, and where required a regulatory-facing
          narrative.
        </Paragraph>
      </SectionShell>
    </>
  );
}

/* ============================================================
   06 — INSOLVENCY & RECOVERY
   Indian insolvency terminology: IBC, financial/operational
   creditors, corporate debtors, CIRP, resolution plans,
   liquidation, Sections 7/9/10, NCLT.
   ============================================================ */
function InsolvencyAndRecoveryBody({ hex }: { hex: string }) {
  return (
    <>
      <SectionShell
        index="01"
        eyebrow="IBC Advisory"
        hex={hex}
        title={<>The framework, the parties, the strategy</>}
        marginNote="IBC / 01 — The Insolvency and Bankruptcy Code, 2016, and its procedural architecture."
      >
        <Paragraph>
          The Insolvency and Bankruptcy Code, 2016 (the IBC or the
          Code) is the principal statutory framework for the
          resolution of insolvency and the recovery of debt in India.
          It applies to corporate debtors, personal guarantors to
          corporate debtors, partnership firms and individuals, in
          different processes administered by the National Company
          Law Tribunal (the NCLT) and the Debt Recovery Tribunals.
        </Paragraph>
        <Paragraph>
          The firm advises creditors, debtors and resolution
          professionals on the corporate insolvency resolution
          process (CIRP), the fast-track CIRP and pre-packaged
          insolvency under the Code — including admission, moratorium
          and the appointment of the resolution professional. The
          advice is structured around the strategic position of the
          client — a financial creditor, an operational creditor, a
          corporate debtor or a resolution professional — and the
          remedies available to each.
        </Paragraph>
        <Paragraph>
          For an extended note on the remedies available to creditors
          under the Code, see the firm&apos;s perspective on{" "}
          <Link
            href="/perspectives/creditor-remedies-insolvency-bankruptcy-code"
            className="link-underline text-ink hover:text-copper"
          >
            creditor remedies under the Insolvency and Bankruptcy Code
          </Link>
          .
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="02"
        eyebrow="Financial Creditors"
        hex={hex}
        title={<>Banks, financial institutions and the Section 7 remedy</>}
      >
        <Paragraph>
          A financial creditor — a bank, a financial institution, or
          any person to whom a debt is owed on account of a financial
          contract — may initiate the corporate insolvency resolution
          process against a corporate debtor under Section 7 of the
          Code, by filing an application before the NCLT. The
          application must establish the existence of a default, and
          the financial creditor must be one to whom the debt is owed
          (or, in the case of an assignee, validly assigned).
        </Paragraph>
        <Paragraph>
          The firm represents financial creditors at the admission
          stage and through the CIRP — filing applications under
          Section 7, participating in committee-of-creditors meetings,
          voting on resolution plans in accordance with the commercial
          wisdom of the committee, and addressing the procedural and
          strategic questions that arise through the process.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="03"
        eyebrow="Operational Creditors"
        hex={hex}
        title={<>Suppliers, vendors and the Section 9 route</>}
      >
        <Paragraph>
          An operational creditor — a person to whom a debt is owed
          on account of the supply of goods or services, including
          employees and the government — must follow a different route.
          The operational creditor must first issue a demand notice
          under Section 8 of the Code, providing the corporate debtor
          with a 14-day period within which to bring a claim of
          pre-existing dispute or to pay the debt.
        </Paragraph>
        <Paragraph>
          If the debt remains unpaid and no dispute is brought, the
          operational creditor may file an application under Section 9
          of the Code before the NCLT. The distinction between
          financial and operational creditors — and the evidence
          required to establish each — has been the subject of
          significant adjudication. The firm represents operational
          creditors through the demand-notice and Section 9 process,
          and advises corporate debtors on responding to operational
          creditor claims.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="04"
        eyebrow="Corporate Debtors"
        hex={hex}
        title={<>The Section 10 option and the strategic decision to file</>}
      >
        <Paragraph>
          A corporate debtor may itself initiate a CIRP under Section
          10 of the Code, by filing an application before the NCLT.
          The Section 10 route is a strategic decision — it allows the
          debtor to initiate a process under the protection of the
          moratorium, but it also places the debtor under the
          management of a resolution professional and the oversight
          of the committee of creditors.
        </Paragraph>
        <Paragraph>
          The firm advises corporate debtors on the Section 10 option,
          on responding to applications under Sections 7 and 9 (including
          the establishment of a pre-existing dispute), and on the
          strategic posture to adopt through the CIRP. The decision to
          initiate, defend or settle a CIRP is rarely straightforward;
          it is informed by the debtor&apos;s commercial position, the
          available resolution options, and the consequences of
          liquidation.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="05"
        eyebrow="CIRP"
        hex={hex}
        title={<>The corporate insolvency resolution process</>}
        marginNote="CIRP / 05 — Admission, moratorium, public announcement, claims, CoC."
      >
        <Paragraph>
          The corporate insolvency resolution process is the central
          process under the Code. Once an application under Section 7,
          9 or 10 is admitted, the NCLT declares a moratorium on the
          continuation of pending proceedings and the initiation of new
          ones against the corporate debtor; appoints an interim
          resolution professional; and directs the public announcement
          of the CIRP. Claims are invited from creditors, the
          committee of creditors is constituted, and the resolution
          professional takes over the management of the corporate
          debtor.
        </Paragraph>
        <Paragraph>
          The committee of creditors exercises the commercial judgement
          on the future of the corporate debtor — resolution or
          liquidation. The committee approves the resolution
          professional&apos;s appointment, decides on the
          continuation of critical contracts, evaluates resolution
          plans, and ultimately votes on whether to approve a plan or
          to recommend liquidation. The decisions of the committee are
          largely insulated from judicial review, in deference to the
          commercial wisdom of the committee — a principle repeatedly
          affirmed by the Supreme Court of India.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="06"
        eyebrow="Resolution Plans"
        hex={hex}
        title={<>Drafting, negotiating and presenting the plan</>}
      >
        <Paragraph>
          A resolution plan is the instrument by which a resolution
          applicant proposes to resolve the insolvency of the corporate
          debtor. The plan must address feasibility and viability, the
          ranking of claims, the distribution waterfall set out in
          Section 53 of the Code, the management of the corporate
          debtor post-resolution, and the approvals required from the
          NCLT and, where applicable, the Competition Commission of
          India.
        </Paragraph>
        <Paragraph>
          The firm drafts, reviews and negotiates resolution plans —
          for resolution applicants, for committee members, and for
          stakeholders whose interests are affected by the plan. The
          work is informed by the IBBI regulations, the evolving
          jurisprudence on the scope of resolution plans, and the
          practical realities of securing committee approval.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="07"
        eyebrow="Liquidation"
        hex={hex}
        title={<>When resolution is not achievable</>}
      >
        <Paragraph>
          If the committee of creditors resolves that the corporate
          debtor be liquidated, or if no resolution plan is approved
          within the timelines set by the Code, the corporate debtor
          proceeds to liquidation. A liquidator is appointed, the
          assets of the corporate debtor are realised, and the proceeds
          are distributed in accordance with the waterfall in Section 53
          of the Code.
        </Paragraph>
        <Paragraph>
          The firm advises stakeholders through the liquidation process
          — liquidators on the realisation of assets, creditors on the
          proof and ranking of their claims, and prospective
          purchasers on the acquisition of assets from the
          liquidation estate.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="08"
        eyebrow="Enforcement"
        hex={hex}
        title={<>From decree, award or security interest to recovery</>}
      >
        <Paragraph>
          Recovery of debt is not, in every case, an IBC matter. The
          firm advises on the enforcement of decrees, arbitral awards
          and security interests — including execution petitions, the
          attachment of movable and immovable property, and recovery
          through the SARFAESI Act, 2002, where the client holds an
          enforceable security interest.
        </Paragraph>
        <Paragraph>
          The choice of enforcement route — execution of a decree, an
          application under the SARFAESI Act, a petition under the
          IBC, or a combination — is informed by the nature of the
          underlying claim, the assets against which enforcement is
          available, and the timeline within which recovery is sought.
          The firm&apos;s{" "}
          <Link
            href="/expertise/dispute-resolution"
            className="link-underline text-ink hover:text-copper"
          >
            Dispute Resolution
          </Link>{" "}
          practice covers the litigation aspects of enforcement in
          greater detail.
        </Paragraph>
      </SectionShell>

      <SectionShell
        index="09"
        eyebrow="Debt Recovery"
        hex={hex}
        title={<>Pre-CIRP recovery, structured and unstructured</>}
      >
        <Paragraph>
          Not every debt recovery requires the initiation of formal
          proceedings. The firm advises on pre-CIRP recovery — demand
          correspondence, the structuring of one-time settlements, the
          restructuring of debt, the negotiation of payment plans, and
          the use of security-enforcement remedies under the SARFAESI
          Act, 2002 where the security interest permits.
        </Paragraph>
        <Paragraph>
          A structured workout — formal or informal — can deliver a
          better outcome for both creditor and debtor than a contested
          process, particularly where the underlying commercial
          relationship has a future value. The firm&apos;s
          representations draw on the available toolkit: contractual
          remedies, security enforcement, the IBC, the Recovery of
          Debts Due to Banks and Financial Institutions Act, 1993
          (where applicable), and ordinary civil proceedings.
        </Paragraph>
      </SectionShell>

      <SectionShell
        bg="bg-paper"
        index="10"
        eyebrow="NCLT & Creditor Strategies"
        hex={hex}
        title={<>The forum and the strategy</>}
      >
        <Paragraph>
          The National Company Law Tribunal is the principal forum for
          proceedings under the Code. The firm represents clients
          before the NCLT and the National Company Law Appellate
          Tribunal (NCLAT) — admission hearings, contested matters,
          appeals, and the procedural applications that arise through
          the life of a CIRP.
        </Paragraph>
        <Paragraph>
          Creditor strategies are calibrated to the position of the
          creditor. A financial creditor with a strong documentary
          record may pursue a Section 7 application as a tool of
          recovery as much as of resolution. An operational creditor
          may pursue the Section 8 / Section 9 route, or may
          alternatively pursue recovery through civil proceedings or
          arbitration. The firm&apos;s role is to advise on the
          strategy most likely to deliver the client&apos;s commercial
          objective — recovery, restructuring, or the orderly
          resolution of the corporate debtor&apos;s affairs.
        </Paragraph>
      </SectionShell>
    </>
  );
}

/* ============================================================
   RELATED SECTORS — common across all practice areas
   ============================================================ */
function RelatedSectorsBlock({
  area,
  hex,
  relatedSectors,
}: {
  area: PracticeArea;
  hex: string;
  relatedSectors: typeof sectors;
}) {
  return (
    <section className="bg-beige py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-14">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: hex }}
                aria-hidden="true"
              />
              <span className="mono-num text-stone-dark">
                {String(areaIndex(area)).padStart(2, "0")}
              </span>
            </div>
            <p className="mono-label text-stone-dark">Related Sectors</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-2 text-ink max-w-[20ch]">
              Sectors where this practice is most active
            </h2>
          </div>
        </div>
        <div className="md:pl-[calc(25%+2rem)]">
          {relatedSectors.length > 0 ? (
            <ul className="border-t border-line">
              {relatedSectors.map((sector) => {
                const sectorHex = accentHex[sector.accent];
                return (
                  <li key={sector.slug}>
                    <Link
                      href={`/sectors#${sector.slug}`}
                      className="group relative grid grid-cols-12 gap-4 items-center py-5 md:py-6 border-b border-line hover:bg-paper transition-colors"
                    >
                      <span className="col-span-2 md:col-span-1 flex items-center gap-3">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: sectorHex }}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="col-span-7 md:col-span-5">
                        <span className="font-display text-xl md:text-2xl text-ink">
                          {sector.name}
                        </span>
                      </span>
                      <span className="col-span-3 md:col-span-5 text-sm text-charcoal hidden sm:block">
                        {sector.note}
                      </span>
                      <span className="col-span-3 md:col-span-1 flex items-center justify-end">
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
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="body-condensed text-charcoal max-w-2xl measure">
              No sectors are presently cross-linked to this practice area.
            </p>
          )}
          <p className="mt-6">
            <Link
              href="/sectors"
              className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
            >
              <span>View all sectors</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </p>
        </div>
      </div>
    </section>
  );
}

function areaIndex(area: PracticeArea): number {
  const i = practiceAreas.findIndex((p) => p.slug === area.slug);
  // Related sectors block sits after the practice body — its position
  // in the section sequence varies by area, so we report the data index
  // plus a sensible offset to suggest a later section number.
  return i >= 0 ? i + 6 : 6;
}

/* ============================================================
   RELATED PERSPECTIVES — common across all practice areas
   ============================================================ */
function RelatedPerspectivesBlock({
  area,
  hex,
  perspectives,
}: {
  area: PracticeArea;
  hex: string;
  perspectives: ReturnType<typeof getPerspectivesByPractice>;
}) {
  const index = areaIndex(area) + 1;
  return (
    <section className="bg-ivory py-12 md:py-20 lg:py-24 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-14">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: hex }}
                aria-hidden="true"
              />
              <span className="mono-num text-stone-dark">
                {String(index).padStart(2, "0")}
              </span>
            </div>
            <p className="mono-label text-stone-dark">Related Perspectives</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-2 text-ink max-w-[20ch]">
              Notes on {area.title.toLowerCase()}
            </h2>
          </div>
        </div>
        <div className="md:pl-[calc(25%+2rem)]">
          {perspectives.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {perspectives.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/perspectives/${article.slug}`}
                    className="group block border border-line bg-paper p-6 hover:border-copper transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="mono-label text-copper">
                        {article.type}
                      </span>
                      <span className="mono-num text-stone-dark">
                        {article.dateLabel}
                      </span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl text-ink leading-tight group-hover:text-oxblood transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal line-clamp-2">
                      {article.abstract}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-copper group-hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <svg
                        className="h-4 w-4"
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
                ))}
              </div>
              <p className="mt-8 text-sm text-stone-dark measure leading-relaxed">
                {perspectivesDisclaimer}
              </p>
            </>
          ) : (
            <p className="body-condensed text-charcoal max-w-2xl measure">
              No perspectives have been published for this practice area yet.
              Please check the{" "}
              <Link
                href="/perspectives"
                className="link-underline text-ink hover:text-copper"
              >
                perspectives archive
              </Link>{" "}
              for the firm&apos;s published notes across all areas.
            </p>
          )}
          <p className="mt-6">
            <Link
              href="/perspectives"
              className="group inline-flex items-center gap-2 mono-label text-stone-dark hover:text-copper transition-colors"
            >
              <span>All perspectives</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT STRIP — common across all practice areas
   ============================================================ */
function ContactStrip({ area, hex }: { area: PracticeArea; hex: string }) {
  return (
    <section className="bg-paper text-ink py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="display-2 text-ink max-w-[18ch]">
            Questions about{" "}
            <span style={{ color: hex }}>{area.title.toLowerCase()}</span>?
          </h2>
        </div>
        <div>
          <div className="text-charcoal space-y-1">
            <p>
              <a
                href={contact.emailHref}
                className="link-underline break-all hover:text-copper"
              >
                {contact.email}
              </a>
            </p>
            <p>
              <a
                href={contact.phoneHref}
                className="link-underline hover:text-copper"
              >
                {contact.phone}
              </a>
            </p>
            <p className="mono-label text-stone-dark">{contact.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PREV / NEXT — practice-area navigation
   ============================================================ */
function PrevNextNav({
  prev,
  next,
}: {
  prev: PracticeArea;
  next: PracticeArea;
}) {
  return (
    <nav
      className="bg-ivory border-t border-line"
      aria-label="Practice area navigation"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid grid-cols-2">
        <Link
          href={`/expertise/${prev.slug}`}
          className="group border-r border-line py-8 md:py-10 pr-4 flex flex-col"
        >
          <span className="mono-label text-stone-dark mb-2">
            ← Previous practice area
          </span>
          <span className="font-display text-xl md:text-2xl flex items-center gap-3 text-ink">
            <span
              className="mono-num text-sm"
              style={{ color: accentHex[prev.accent] }}
            >
              {prev.index}
            </span>
            {prev.title}
          </span>
        </Link>
        <Link
          href={`/expertise/${next.slug}`}
          className="group py-8 md:py-10 pl-4 flex flex-col items-end text-right"
        >
          <span className="mono-label text-stone-dark mb-2">
            Next practice area →
          </span>
          <span className="font-display text-xl md:text-2xl flex items-center gap-3 text-ink">
            {next.title}
            <span
              className="mono-num text-sm"
              style={{ color: accentHex[next.accent] }}
            >
              {next.index}
            </span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
