/**
 * Perspectives — legal articles, case notes, explainers and sector briefings.
 *
 * Each article is a genuine piece of legal writing on a topic the firm is
 * equipped to address. Articles are informational and educational — not
 * legal advice. Each article includes a clear disclaimer.
 *
 * No fabricated clients, case names, transaction values or outcomes.
 * Reading times are calculated dynamically from word count (~220 wpm).
 * Legal statements are appropriately qualified — not absolute.
 */

export type PerspectiveCategory =
  | "Legal Update"
  | "Case Note"
  | "Explainer"
  | "Sector Briefing"
  | "Corporate Note"
  | "Practice Note";

export type Perspective = {
  slug: string;
  type: PerspectiveCategory;
  title: string;
  date: string; // ISO format YYYY-MM-DD
  dateLabel: string; // human-readable e.g. "01 SEP 2026"
  practice: string; // practice area slug
  practiceLabel: string;
  abstract: string;
  body: string[]; // article paragraphs
  author: string;
  authorSlug: string;
  relatedSectors: string[];
};

export const perspectiveCategories: PerspectiveCategory[] = [
  "Legal Update",
  "Case Note",
  "Explainer",
  "Sector Briefing",
  "Corporate Note",
  "Practice Note",
];

/** Calculate reading time from word count at ~220 words per minute */
function calculateReadTime(body: string[]): string {
  const wordCount = body.join(" ").split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));
  return `${minutes} min read`;
}

/** Add readTime to each perspective dynamically */
function withReadTimes(items: Perspective[]): Perspective[] {
  return items.map((p) => ({
    ...p,
    readTime: calculateReadTime(p.body),
  }));
}

export const perspectives: Perspective[] = withReadTimes([
  {
    slug: "limitation-of-liability-clauses-commercial-contracts",
    type: "Explainer",
    title: "Understanding limitation-of-liability clauses in commercial contracts",
    date: "2026-09-01",
    dateLabel: "01 SEP 2026",
    practice: "commercial-contracts",
    practiceLabel: "Commercial Contracts",
    abstract:
      "A limitation-of-liability clause determines which losses a party must bear, and up to what ceiling. This note examines how Indian courts approach these clauses, the distinction between excluding and capping liability, and the clauses most likely to be challenged.",
    body: [
      "A limitation-of-liability clause is one of the most consequential provisions in a commercial contract. It determines which losses a party must bear, up to what ceiling, and which categories of loss are excluded entirely. Indian courts approach these clauses by distinguishing between excluding liability for breach and capping the quantum of recoverable loss — and the distinction materially affects enforceability.",
      "Certain categories of liability — including fraud, wilful misconduct and, depending on the governing law and contractual wording, gross negligence — may be treated differently under applicable law and may not be capable of exclusion in particular circumstances. The enforceability of exclusions and liability caps depends on the governing law, the contractual wording and the circumstances in which the clause is relied upon.",
      "Clauses that purport to exclude indirect or consequential loss are common and are generally considered where the language is clear, but the distinction between direct and consequential loss is often contested at the point of enforcement. The classification of a particular loss depends on the commercial context and the structure of the contract.",
      "Caps on aggregate liability — typically set at a multiple of the contract value or the fees paid in a defined period — may be considered enforceable when properly drafted, but a cap that bears no reasonable relationship to the foreseeable risk may be vulnerable to challenge. Parties should also consider carve-outs from the cap: liability for confidentiality breach, IP infringement and indemnities are frequently excluded from the aggregate cap.",
      "The interaction between limitation-of-liability clauses, indemnities and warranty regimes requires careful structuring. An indemnity that sits outside the general liability cap can shift risk allocation significantly. This note examines how these provisions are construed, the clauses most likely to be challenged, and the practical considerations that should inform drafting.",
    ],
    author: "Saransh Raj",
    authorSlug: "saransh-raj",
    relatedSectors: ["technology", "manufacturing", "fmcg"],
  },
  {
    slug: "distribution-agreements-key-considerations",
    type: "Corporate Note",
    title: "What businesses should consider before entering a distribution arrangement",
    date: "2026-08-15",
    dateLabel: "15 AUG 2026",
    practice: "commercial-contracts",
    practiceLabel: "Commercial Contracts",
    abstract:
      "Distribution agreements often determine far more than territory and price. Exclusivity, minimum purchase obligations, channel restrictions, termination rights and unsold inventory can materially affect the commercial relationship.",
    body: [
      "Distribution agreements often determine far more than territory and price. Exclusivity, minimum purchase obligations, channel restrictions, termination rights and the treatment of unsold inventory can materially affect the commercial relationship — and the legal consequences that follow when the relationship ends.",
      "Exclusivity is frequently the most commercially significant term. An exclusive distributor acquires a degree of control over the principal's market presence, and the principal should consider whether the arrangement supports its channel strategy or constrains it. Minimum purchase obligations, if not calibrated to realistic demand, can create liability for the distributor while offering the principal a remedy that is difficult to enforce commercially.",
      "Channel restrictions — online sales, grey-market controls, geographic boundaries — should be examined against both the contract and the applicable regulatory framework, including competition law considerations. Termination rights, notice periods and the consequences of termination on unsold stock, IP licences and post-term restraints determine how cleanly the parties can separate.",
      "This note outlines the commercial and legal considerations that should inform the negotiation and drafting of a distribution agreement, with attention to the provisions most likely to become contentious on termination or breach.",
    ],
    author: "Saransh Raj",
    authorSlug: "saransh-raj",
    relatedSectors: ["fmcg", "alcoholic-beverages", "manufacturing"],
  },
  {
    slug: "shareholder-reserved-matters",
    type: "Explainer",
    title: "A practical overview of shareholder reserved matters",
    date: "2026-07-20",
    dateLabel: "20 JUL 2026",
    practice: "corporate-advisory",
    practiceLabel: "Corporate Advisory",
    abstract:
      "Reserved matters are decisions that require specified shareholder or board approval. This explainer examines how they function, how they are drafted, and why they are often the most contested provision in a shareholders' agreement.",
    body: [
      "Reserved matters are decisions that require specified shareholder or board approval under a governance arrangement. They function as a veto mechanism: by listing the decisions that require consent, the parties allocate control over the most consequential commercial choices.",
      "In a shareholders' agreement, reserved matters typically cover the issuance of new shares, changes to capital structure, major acquisitions or disposals, related-party transactions, changes to the business scope, and the appointment or removal of key management. The list should be tailored to the specific commercial relationship — a generic template will often either over-include routine decisions or under-include matters that are critical to a particular shareholder.",
      "The threshold for approval matters as much as the list itself. A matter reserved to a specific shareholder's consent gives that shareholder a veto; a matter requiring a supermajority creates a different balance. The interaction between reserved matters, board composition, quorum requirements and dispute-resolution mechanisms determines how governance operates in practice.",
      "This explainer examines how reserved matters are drafted, how they interact with the Companies Act, 2013, and why they are often the most contested provision in a shareholders' agreement.",
    ],
    author: "Saransh Raj",
    authorSlug: "saransh-raj",
    relatedSectors: ["technology", "manufacturing"],
  },
  {
    slug: "pre-litigation-strategy-commercial-disputes",
    type: "Practice Note",
    title: "Pre-litigation strategy in commercial disputes",
    date: "2026-06-10",
    dateLabel: "10 JUN 2026",
    practice: "dispute-resolution",
    practiceLabel: "Dispute Resolution",
    abstract:
      "The decisions taken before proceedings are issued often determine the outcome. This practice note examines pre-litigation strategy: contract review, evidence preservation, limitation analysis, legal notices and the assessment of settlement leverage.",
    body: [
      "The decisions taken before proceedings are issued often determine the outcome of a commercial dispute. Pre-litigation strategy is not merely preparation for a claim — it is the process by which a party assesses its position, preserves its evidence, and evaluates whether to proceed, negotiate or step back.",
      "Contract review is the first step: the dispute should be located in the contractual framework, including the dispute-resolution clause, the governing law, the limitations on remedies, and any pre-action requirements such as negotiation periods or mediation. Evidence preservation — identifying relevant communications, documents and witnesses before they are lost — is critical, particularly in commercial disputes where the documentary record often determines the outcome.",
      "Limitation analysis is a threshold question. The Limitation Act, 1963 sets out the periods within which different claims may be brought, and the consequences of missing a limitation period can be significant. A legal notice under Section 80 of the Code of Civil Procedure, 1908 may be a statutory prerequisite depending on the parties involved.",
      "The assessment of settlement leverage — the relative strength of each party's position, the cost and duration of proceedings, and the commercial relationship — should inform the decision to litigate, negotiate or explore alternative resolution. This practice note examines these considerations and how they shape pre-litigation strategy.",
    ],
    author: "Saransh Raj",
    authorSlug: "saransh-raj",
    relatedSectors: ["real-estate", "construction", "manufacturing"],
  },
  {
    slug: "key-considerations-legal-due-diligence",
    type: "Corporate Note",
    title: "Key considerations in legal due diligence",
    date: "2026-05-05",
    dateLabel: "05 MAY 2026",
    practice: "mergers-and-acquisitions",
    practiceLabel: "Mergers & Acquisitions",
    abstract:
      "Legal due diligence is a structured examination of the legal rights, obligations and risks relevant to a proposed transaction. This note examines the scope, process and deliverables of a diligence exercise.",
    body: [
      "Legal due diligence is a structured examination of the legal rights, obligations and risks relevant to a proposed transaction. Its purpose is not to find reasons not to transact, but to identify the matters that should inform the structure, pricing, conditions precedent, representations, warranties and indemnities of the transaction.",
      "The scope of diligence is shaped by the nature of the transaction — a share purchase, an asset purchase, a slump sale or a scheme of arrangement — and the industry in which the target operates. Corporate, contractual, employment, regulatory, litigation, intellectual property and real estate matters are typically examined. In sectors with specific regulatory regimes — such as financial services, insurance or telecom — the regulatory review may be particularly significant.",
      "The process is as important as the findings. Diligence requests should be calibrated to elicit the information that matters, not to overwhelm the target with generic requests. The review should distinguish between matters that affect valuation, matters that affect the transaction structure, and matters that require contractual protection through warranties or indemnities.",
      "The deliverable — typically a risk-ranked report — should connect each finding to its commercial consequence: does this matter affect price, structure, conditions, or warranties? This note examines the scope, process and deliverables of a legal due diligence exercise.",
    ],
    author: "Saransh Raj",
    authorSlug: "saransh-raj",
    relatedSectors: ["technology", "manufacturing", "real-estate"],
  },
  {
    slug: "creditor-remedies-insolvency-bankruptcy-code",
    type: "Legal Update",
    title: "Understanding creditor remedies under the Insolvency and Bankruptcy Code",
    date: "2026-04-01",
    dateLabel: "01 APR 2026",
    practice: "insolvency-and-recovery",
    practiceLabel: "Insolvency & Recovery",
    abstract:
      "The Insolvency and Bankruptcy Code, 2016 provides creditors with a structured framework for recovery. This note examines the remedies available to financial and operational creditors under Sections 7, 8 and 9.",
    body: [
      "The Insolvency and Bankruptcy Code, 2016 provides creditors with a structured framework for recovery when a corporate debtor defaults. The Code distinguishes between financial creditors and operational creditors, and the remedies available to each differ in scope and procedure.",
      "A financial creditor may initiate the corporate insolvency resolution process under Section 7 by filing an application before the National Company Law Tribunal. An operational creditor is generally required to first issue a demand notice under Section 8 and, if the debt remains unpaid, may file an application under Section 9. The distinction between the two categories — and the evidence required to establish each — has been the subject of significant adjudication.",
      "The moratorium that comes into effect on admission of a CIRP application is one of the most consequential features of the Code: it restrains the continuation of pending proceedings and the initiation of new ones against the corporate debtor. The committee of creditors, formed once the resolution professional is appointed, exercises commercial judgement on the future of the corporate debtor — resolution or liquidation.",
      "This note examines the remedies available to creditors under the Code, the procedural requirements, and the strategic considerations that may inform the decision to initiate proceedings. It is informational and does not constitute legal advice.",
    ],
    author: "Saransh Raj",
    authorSlug: "saransh-raj",
    relatedSectors: ["infrastructure", "real-estate", "manufacturing"],
  },
  {
    slug: "building-regulatory-map-before-entering-new-sector",
    type: "Explainer",
    title: "Building a regulatory map before entering a new sector",
    date: "2026-03-15",
    dateLabel: "15 MAR 2026",
    practice: "regulatory-and-compliance",
    practiceLabel: "Regulatory & Compliance",
    abstract:
      "Before entering a new sector, a business should identify the regulators, licences and ongoing compliance obligations that apply to its operations. This explainer outlines a practical approach to regulatory mapping.",
    body: [
      "Before entering a new sector, a business should identify the regulators, licences and ongoing compliance obligations that apply to its operations. Regulatory mapping is the process of charting the applicable regulatory landscape — identifying the authorities with jurisdiction, the approvals required to commence operations, and the continuing obligations that attach once operations begin.",
      "The first step is to identify the regulators. Depending on the sector, these may include central regulators such as the Reserve Bank of India, the Securities and Exchange Board of India, the Competition Commission of India, sector-specific regulators for telecom, insurance or pharmaceuticals, and state-level authorities for matters such as excise, labour and local licensing. A business operating across states may face overlapping jurisdictions.",
      "The second step is to identify the licences and approvals required. These may include incorporation-related registrations, sector-specific operating licences, environmental clearances, employment-related registrations, and local municipal approvals. The conditions attached to each licence — operating hours, sourcing requirements, reporting obligations — should be understood before commencing operations.",
      "The third step is to map ongoing compliance obligations: periodic filings, reporting requirements, audit obligations, and the internal frameworks needed to monitor compliance. Regulatory landscapes change, and a compliance framework should include a mechanism for monitoring and responding to regulatory developments that may affect the business.",
      "This explainer outlines a practical approach to regulatory mapping. It is informational and does not constitute legal advice. Specific regulatory requirements should be assessed based on the nature and location of the proposed operations.",
    ],
    author: "Saransh Raj",
    authorSlug: "saransh-raj",
    relatedSectors: ["fmcg", "technology", "renewable-energy", "hospitality"],
  },
]);

export const getPerspective = (slug: string) =>
  perspectives.find((p) => p.slug === slug);

export const getFeaturedPerspective = () => perspectives[0];

export const getLatestPerspectives = (count: number = 3) =>
  perspectives.slice(0, count);

export const getPerspectivesByPractice = (practiceSlug: string) =>
  perspectives.filter((p) => p.practice === practiceSlug);

export const getPerspectivesBySector = (sectorSlug: string) =>
  perspectives.filter((p) => p.relatedSectors.includes(sectorSlug));

export const perspectivesDisclaimer =
  "This publication is intended for general informational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for advice based on specific facts and circumstances.";
