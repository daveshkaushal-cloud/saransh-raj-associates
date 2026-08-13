/**
 * Practice areas — verified factual content from the existing website.
 * Each area carries a colour token used for section-specific visual treatment.
 */

export type PracticeArea = {
  slug: string;
  index: string;
  title: string;
  short: string;
  overview: string;
  services: string[];
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
    accent: "ink",
  },
];

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);
