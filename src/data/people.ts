/**
 * People — the founder is the only public profile.
 *
 * Language: "Leadership" / "The Founder" — does not imply a larger team
 * than exists. The bio is an authoritative editorial biography of
 * 350-500 words, written factually. No fabricated clients, cases, awards
 * or transaction values.
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
  sectors: string[];
  languages: string[];
  accent: "rose" | "burgundy" | "espresso" | "blush" | "beige" | "porcelain";
};

export const people: Person[] = [
  {
    slug: "saransh-raj",
    name: "Saransh Raj",
    role: "Founder & Principal Advocate",
    initials: "SR",
    summary:
      "Founder & Principal Advocate. New Delhi. Advises on corporate and commercial law — structuring, contracts, transactions, disputes, regulatory and insolvency matters.",
    bio: [
      "Saransh Raj is the founder and principal advocate of Saransh Raj & Associates. His practice centres on corporate and commercial law, with a focus on corporate structuring, commercial contracts, mergers and acquisitions, dispute resolution, regulatory compliance and insolvency proceedings. He established the practice to provide considered legal counsel grounded in an understanding of the commercial and regulatory circumstances within which legal questions arise.",
      "His approach to a matter begins with context — the commercial objective, the regulatory environment, the practical constraints — before turning to the identification of relevant rights, obligations and exposure. He works on shareholder arrangements, corporate structuring and ongoing governance matters; on commercial agreements across distribution, supply and service relationships; and on corporate and commercial disputes, including arbitration and tribunal proceedings.",
      "He studied law at Amity University, Rajasthan, where he completed both his LLB and LLM, and is an enrolled advocate. His academic interest in corporate and commercial law informs a practice that treats each engagement as part of a longer relationship rather than an isolated instruction — decisions taken today, whether in a shareholders' agreement, a commercial contract or a regulatory filing, shape what is possible tomorrow.",
      "He advises businesses, promoter-led enterprises and individuals on transactional, regulatory and dispute-related matters, and is conscious of the Bar Council of India's restrictions on advertisement and solicitation by advocates. Professional engagements are formed only upon a formal retainer, and this website is maintained solely for informational purposes.",
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
    sectors: [
      "Alcoholic Beverages",
      "FMCG",
      "Manufacturing",
      "Technology",
      "Real Estate",
    ],
    languages: ["English", "Hindi"],
    accent: "rose",
  },
];

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);
