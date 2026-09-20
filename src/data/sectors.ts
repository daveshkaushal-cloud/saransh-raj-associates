/**
 * Sectors served — verified from the existing website's sector expertise section.
 */

export type Sector = {
  slug: string;
  name: string;
  note: string;
  /** 2–3 line editorial description shown when the row is expanded. */
  description: string;
  accent: "rose" | "burgundy" | "espresso" | "blush" | "beige" | "porcelain";
};

export const sectors: Sector[] = [
  {
    slug: "alcoholic-beverages",
    name: "Alcoholic Beverages",
    note: "Licensing, distribution and regulatory frameworks.",
    description:
      "The firm advises across the licensing lifecycle under state excise regimes — distribution and franchise arrangements, label approvals, and the regulatory puzzles that arise when spirits cross state lines. Engagements span legacy manufacturers and newer craft and import-led brands.",
    accent: "burgundy",
  },
  {
    slug: "fmcg",
    name: "FMCG",
    note: "Supply chains, branding and consumer contracts.",
    description:
      "Work spans supply chain contracting, brand and endorsement agreements, consumer promotions, and the regulatory perimeter around advertising and packaging. The firm acts for principals, distributors and modern trade alike.",
    accent: "blush",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    note: "Operations, agreements and compliance.",
    description:
      "The firm structures operating and tolling agreements, quality and warranty regimes, and industrial compliance across factories and clusters. Labour, environmental and standards work is woven into the commercial advice, not treated as a separate stream.",
    accent: "rose",
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    note: "Project structuring and regulatory counsel.",
    description:
      "Engagements cover project structuring, concession and EPC contracting, authority-side agreements, and the regulatory clearances that gate large infrastructure. The firm carries an integrated view across roads and urban public works.",
    accent: "porcelain",
  },
  {
    slug: "construction",
    name: "Construction",
    note: "Contracts, disputes and regulatory matters.",
    description:
      "Work covers construction and works contracts, EPC and design-build arrangements, consultancy appointments, and the disputes that follow delays, defects and payments. The firm acts for developers, contractors and consultants.",
    accent: "burgundy",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    note: "Transactions, due diligence and disputes.",
    description:
      "The firm handles sale and lease documentation, joint development arrangements, due diligence on land parcels, and disputes around title, possession and approvals. Work spans residential, commercial and mixed-use assets.",
    accent: "espresso",
  },
  {
    slug: "technology",
    name: "Technology",
    note: "IP, licensing and commercial agreements.",
    description:
      "Engagements span IP assignment and licensing, SaaS and platform agreements, data and privacy compliance, and the commercial contracts that underpin product launches. The firm acts for founders, product teams and enterprises.",
    accent: "rose",
  },
  {
    slug: "logistics",
    name: "Logistics",
    note: "Carriage, warehousing and supply contracts.",
    description:
      "Work covers carriage and multimodal transport contracts, warehousing and third-party logistics arrangements, freight forwarding, and the claims that follow goods in transit. The firm brings a practical view of trade terms and bailment.",
    accent: "beige",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    note: "Project counsel and regulatory frameworks.",
    description:
      "Engagements cover project development and power purchase arrangements, open-access and connectivity, regulatory approvals, and the contracting that underpins solar, wind and hybrid projects. The firm acts for developers, EPC contractors and investors.",
    accent: "beige",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    note: "Operations, licensing and commercial contracts.",
    description:
      "Work spans operations and management agreements, licensing under excise and tourism frameworks, franchise and brand arrangements, and the commercial contracts around guest services. The firm acts for hotel owners, operators and restaurateurs.",
    accent: "blush",
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
