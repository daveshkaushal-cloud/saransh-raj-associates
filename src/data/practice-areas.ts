/**
 * Practice areas — verified factual content from the existing website.
 * Each area carries a colour token used for section-specific visual treatment.
 *
 * `services` and `serviceDetails` are parallel arrays — the former holds the
 * short title shown in compact indexes, the latter holds a 2–3 line editorial
 * description revealed when a service is expanded on the detail page.
 */

export type PracticeArea = {
  slug: string;
  index: string;
  title: string;
  short: string;
  overview: string;
  services: string[];
  serviceDetails: string[];
  accent: "electric" | "vermilion" | "marigold" | "jade" | "aubergine" | "ink";
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-advisory",
    index: "01",
    title: "Corporate Advisory",
    short: "Strategic counsel across the business lifecycle.",
    overview:
      "Counsel on company formation, corporate governance, board structuring, shareholder agreements and regulatory compliance — whether you are starting a new venture or restructuring an established enterprise.",
    services: [
      "Company incorporation & structuring",
      "Shareholder & joint venture agreements",
      "Board governance & compliance",
      "Corporate restructuring & reorganisation",
    ],
    serviceDetails: [
      "Selection of entity type (private limited company, public limited company, LLP or OPC), drafting of the memorandum and articles of association, and structuring of the capitalisation table to align with the founders' commercial intent and anticipated fundraising pathway.",
      "Negotiation and drafting of shareholders' agreements, joint venture agreements and subscription agreements — covering board composition, transfer restrictions, drag-along and tag-along rights, exit mechanics and deadlock-resolution provisions.",
      "Advising on board constitution, independent-director obligations, related-party transaction approvals, meeting cadence and minute-book maintenance, aligned with the Companies Act, 2013 and the applicable secretarial standards issued by ICSI.",
      "Schemes of arrangement, demergers, amalgamations and internal reorganisations — including NCLT approvals, valuation reports, creditor consents and the regulatory filings required to give effect to the restructuring.",
    ],
    accent: "electric",
  },
  {
    slug: "commercial-contracts",
    index: "02",
    title: "Commercial Contracts",
    short: "Contracts that protect interests and clarify risk.",
    overview:
      "Drafting, review and negotiation of a full spectrum of commercial agreements — from supply and distribution contracts to service level agreements and licensing arrangements — with attention to precision, enforceability and commercial alignment.",
    services: [
      "Drafting & review of commercial agreements",
      "Supply, distribution & service contracts",
      "Licensing & IP agreements",
      "Contract dispute advisory",
    ],
    serviceDetails: [
      "End-to-end drafting and review of bespoke commercial agreements — covering scope, commercial terms, liability caps, indemnities, termination rights and dispute-resolution clauses — calibrated to the client's risk posture and bargaining position.",
      "Manufacturing, supply, distribution, franchise and service-level agreements — with attention to territory and exclusivity, minimum off-take obligations, performance benchmarks, pricing mechanics and structured exit provisions.",
      "Technology licensing, software-as-a-service agreements, brand licensing, assignment of intellectual property and know-how arrangements — addressing scope, royalty structures, audit rights, IP ownership and post-termination restrictions.",
      "Pre-litigation review of contractual positions, drafting and issue of formal notices, cure-period analysis, and strategic counsel on enforcement options, termination consequences and the remedies available under the agreement.",
    ],
    accent: "vermilion",
  },
  {
    slug: "mergers-and-acquisitions",
    index: "03",
    title: "Mergers & Acquisitions",
    short: "End-to-end counsel on defining transactions.",
    overview:
      "Guidance through the full M&A lifecycle — from initial structuring and due diligence to negotiation, regulatory approvals and post-merger integration — approached methodically and with close attention to the client's objectives.",
    services: [
      "Transaction structuring & advisory",
      "Legal & financial due diligence",
      "Regulatory filings & approvals",
      "Post-merger integration support",
    ],
    serviceDetails: [
      "Structuring the transaction as an asset purchase, share purchase, slump sale or scheme of arrangement — optimised for tax efficiency, the regulatory approvals triggered, and the commercial timeline that the parties wish to achieve.",
      "Comprehensive legal due diligence on the target — covering corporate, contractual, employment, regulatory, litigation and intellectual-property matters — culminating in a risk register and direct input into the negotiation of representations, warranties and indemnities.",
      "Identification and procurement of the approvals required from the Competition Commission of India, the Reserve Bank of India, SEBI, sectoral regulators and the courts — including foreign-exchange filings and Forms FC-GPR / FC-TRS where applicable.",
      "Legal support for the integration phase — harmonising contracts, employment structures, regulatory registrations and corporate-secretarial records, and advising on the wind-down of residual or dormant entities post-closing.",
    ],
    accent: "aubergine",
  },
  {
    slug: "dispute-resolution",
    index: "04",
    title: "Dispute Resolution",
    short: "Resolving commercial disputes with strategy.",
    overview:
      "Representation in commercial arbitration, mediation and litigation, with an approach that prioritises efficient resolution while protecting rights and commercial relationships — from negotiated settlements to formal proceedings.",
    services: [
      "Commercial arbitration & mediation",
      "Contract & shareholder disputes",
      "Debt recovery & enforcement",
      "Pre-litigation advisory",
    ],
    serviceDetails: [
      "Representation in domestic and international arbitrations under the Arbitration and Conciliation Act, 1996 — including institution-administered arbitrations (SIAC, LCIA, DIAC, MCIA), applications for interim relief, and the enforcement and challenge of arbitral awards.",
      "Advising on disputes arising from breach of commercial contracts, shareholders' agreements and joint-venture arrangements — including oppression and mismanagement petitions under Sections 241–242 of the Companies Act, 2013.",
      "Recovery of trade receivables and secured debt through SARFAESI proceedings, applications under the Insolvency and Bankruptcy Code, civil suits, and execution proceedings — including attachment and sale of movable and immovable assets.",
      "Early-stage assessment of disputes before proceedings are issued — demand-letter drafting, preservation of evidence, limitation-period analysis, and a candid view on the merits, the likely costs, and the prospects of negotiated resolution.",
    ],
    accent: "marigold",
  },
  {
    slug: "regulatory-and-compliance",
    index: "05",
    title: "Regulatory & Compliance",
    short: "Navigating regulatory complexity with confidence.",
    overview:
      "Support in understanding and complying with applicable laws and regulations — from SEBI and RBI guidelines to sector-specific compliance frameworks — with a proactive approach that seeks to identify risk before it becomes liability.",
    services: [
      "SEBI, RBI & sector-specific compliance",
      "Regulatory risk assessments",
      "Compliance programme design",
      "Liaison with regulatory authorities",
    ],
    serviceDetails: [
      "Ongoing compliance support for listed entities under SEBI's Listing Obligations and Disclosure Requirements (LODR) and insider-trading regulations, for non-banking financial companies under RBI directions, and for sectoral regimes such as telecom, insurance and pharmaceuticals.",
      "Structured audits of the client's compliance posture across the applicable regulatory regimes — identifying gaps, prioritising remediation, and producing a defensible compliance trail that can be placed before boards and regulators.",
      "Design and implementation of internal compliance frameworks — policies, training modules, escalation matrices, the insider-trading structured digital database, and whistle-blower mechanisms appropriate to the entity's scale and risk profile.",
      "Representation before SEBI, the RBI, the Ministry of Corporate Affairs and sectoral regulators — including responses to show-cause notices, applications for interpretive guidance, consent and settlement applications, and appearances at personal hearings.",
    ],
    accent: "jade",
  },
  {
    slug: "insolvency-and-recovery",
    index: "06",
    title: "Insolvency & Recovery",
    short: "Counsel through financial distress.",
    overview:
      "Advice to creditors, debtors and resolution professionals on insolvency proceedings under the Insolvency and Bankruptcy Code (IBC) — from initiating proceedings to resolution plan negotiations and asset recovery.",
    services: [
      "IBC proceedings & advisory",
      "Creditor representation",
      "Resolution plan negotiation",
      "Asset recovery & enforcement",
    ],
    serviceDetails: [
      "Advising creditors, debtors and resolution professionals on the corporate insolvency resolution process (CIRP), the fast-track CIRP and pre-packaged insolvency under the Insolvency and Bankruptcy Code, 2016 — including admission, moratorium and the appointment of the resolution professional.",
      "Representation of financial and operational creditors — issuing demand notices under Section 8, filing applications under Sections 7 and 9, participating in committee-of-creditors meetings, and voting on resolution plans in accordance with the commercial wisdom of the committee.",
      "Drafting, review and negotiation of resolution plans — addressing feasibility and viability, the ranking of claims, the distribution waterfall, and the approvals required from the NCLT and the Competition Commission of India, with attention to the IBBI regulations.",
      "Enforcement of decrees, arbitral awards and security interests — including execution petitions, attachment of movable and immovable property, and recovery through the SARFAESI Act, 2002, where the client holds an enforceable security interest.",
    ],
    accent: "ink",
  },
];

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);
