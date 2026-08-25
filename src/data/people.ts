/**
 * People — only the founder is publicly named.
 * No additional team members, qualifications or biographies are invented.
 *
 * The bio is limited to three concise paragraphs. Approach, quote and
 * representative-work sections have been removed — the public profile
 * presents only verified, defensible information.
 */

export type Person = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  summary: string;
  bio: string[];
  qualifications: string[];
  focus: string[];
  bar: string[];
  accent: "rose" | "burgundy" | "espresso" | "blush" | "beige" | "porcelain";
};

export const people: Person[] = [
  {
    slug: "saransh-raj",
    name: "Saransh Raj",
    role: "Founder & Principal Advocate",
    initials: "SR",
    summary:
      "Advocate Saransh Raj is the founder and principal advocate of the firm, advising on corporate and commercial law.",
    bio: [
      "Saransh Raj is the founder and principal advocate of Saransh Raj & Associates. His practice centres on corporate and commercial law, with a focus on corporate structuring, commercial contracts, mergers and acquisitions, dispute resolution, regulatory compliance and insolvency proceedings.",
      "He established the firm to provide companies, individuals and families with considered corporate legal counsel, combining attention to legal detail with an understanding of commercial realities.",
      "He read law at Amity University, Rajasthan, completing both the LLB and LLM, and is an enrolled advocate.",
    ],
    qualifications: [
      "LLB — Amity University, Rajasthan",
      "LLM — Amity University, Rajasthan",
    ],
    focus: [
      "Corporate structuring",
      "Commercial contracts",
      "Mergers & acquisitions",
      "Dispute resolution",
      "Regulatory compliance",
      "Insolvency & recovery",
    ],
    bar: [
      "Enrolled advocate — Bar Council details available on request",
    ],
    accent: "rose",
  },
];

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);
