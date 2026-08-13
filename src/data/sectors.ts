/**
 * Sectors served — verified from the existing website's sector expertise section.
 */

export type Sector = {
  slug: string;
  name: string;
  note: string;
  accent: "cobalt" | "vermilion" | "saffron" | "mint" | "violet" | "ink";
};

export const sectors: Sector[] = [
  { slug: "alcoholic-beverages", name: "Alcoholic Beverages", note: "Licensing, distribution and regulatory frameworks.", accent: "vermilion" },
  { slug: "fmcg", name: "FMCG", note: "Supply chains, branding and consumer contracts.", accent: "saffron" },
  { slug: "manufacturing", name: "Manufacturing", note: "Operations, agreements and compliance.", accent: "cobalt" },
  { slug: "infrastructure", name: "Infrastructure", note: "Project structuring and regulatory counsel.", accent: "ink" },
  { slug: "construction", name: "Construction", note: "Contracts, disputes and regulatory matters.", accent: "vermilion" },
  { slug: "real-estate", name: "Real Estate", note: "Transactions, due diligence and disputes.", accent: "violet" },
  { slug: "technology", name: "Technology", note: "IP, licensing and commercial agreements.", accent: "cobalt" },
  { slug: "logistics", name: "Logistics", note: "Carriage, warehousing and supply contracts.", accent: "mint" },
  { slug: "renewable-energy", name: "Renewable Energy", note: "Project counsel and regulatory frameworks.", accent: "mint" },
  { slug: "hospitality", name: "Hospitality", note: "Operations, licensing and commercial contracts.", accent: "saffron" },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
