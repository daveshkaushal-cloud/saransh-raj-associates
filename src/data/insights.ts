/**
 * Insights / Publications.
 *
 * The audited source website contains no published articles, papers or
 * thought-leadership content. Rather than fabricate publications (which would
 * violate the factual-integrity rules), this page presents an honest editorial
 * frame: the firm's intended areas of writing, with a clear notice that
 * published work will appear here. No titles, dates, authors or claims are
 * invented.
 */

export type InsightTopic = {
  slug: string;
  category: string;
  title: string;
  description: string;
  status: "forthcoming";
};

export const insightCategories = [
  "All",
  "Corporate",
  "Contracts",
  "Disputes",
  "Regulatory",
  "Insolvency",
] as const;

export const insightTopics: InsightTopic[] = [
  {
    slug: "corporate-governance",
    category: "Corporate",
    title: "Notes on corporate governance",
    description:
      "Considerations in board structuring, shareholder agreements and the governance of growing enterprises.",
    status: "forthcoming",
  },
  {
    slug: "commercial-contracts",
    category: "Contracts",
    title: "Drafting commercial agreements",
    description:
      "Practical observations on structuring supply, distribution and service contracts with clarity.",
    status: "forthcoming",
  },
  {
    slug: "ma-process",
    category: "Corporate",
    title: "The M&A process in India",
    description:
      "A walkthrough of transaction structuring, due diligence and regulatory filings.",
    status: "forthcoming",
  },
  {
    slug: "dispute-resolution",
    category: "Disputes",
    title: "Choosing between arbitration and litigation",
    description:
      "Factors that inform the choice of forum in commercial disputes.",
    status: "forthcoming",
  },
  {
    slug: "regulatory-compliance",
    category: "Regulatory",
    title: "SEBI and RBI compliance: an overview",
    description:
      "A framing of sector-specific compliance obligations for companies operating in India.",
    status: "forthcoming",
  },
  {
    slug: "insolvency-code",
    category: "Insolvency",
    title: "The Insolvency and Bankruptcy Code",
    description:
      "An introduction to proceedings, creditor representation and resolution plans under the IBC.",
    status: "forthcoming",
  },
];

export const insightsNotice =
  "This section will host the firm's publications and notes. No articles have been published yet. Titles shown are intended areas of writing and will be replaced with published work as it becomes available.";
