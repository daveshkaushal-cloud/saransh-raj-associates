/**
 * People — only the founder is publicly named on the source website.
 * No additional team members, qualifications or biographies are invented.
 *
 * The extended fields below (approach, representativeWork, quote) describe
 * the firm's verified practice areas and methodology in generic, defensible
 * terms — they do NOT fabricate specific clients, deal values, case outcomes,
 * speaking engagements or affiliations.
 */

export type RepresentativeEngagement = {
  /** Practice area the engagement falls under. */
  area: string;
  /** Generic description of the TYPE of work — no client/case/deal specifics. */
  description: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  summary: string;
  bio: string[];
  /** Editorial paragraphs describing how the person approaches legal counsel. */
  approach: string[];
  /** Generic descriptions of the type of work undertaken across practice areas. */
  representativeWork: RepresentativeEngagement[];
  /** A guiding principle, framed as editorial rather than a verbatim quotation. */
  quote: { text: string; attribution: string };
  qualifications: string[];
  focus: string[];
  bar: string[];
  accent: "electric" | "vermilion" | "marigold" | "jade" | "aubergine" | "ink";
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
      "He established the firm to provide companies, individuals and families with considered corporate legal counsel, combining attention to legal detail with an understanding of clients' commercial realities.",
      "His work across the corporate lifecycle — from entity formation and shareholder arrangements through to restructuring, transactions and, where necessary, litigation — informs a view of counsel that treats each engagement as part of a longer relationship rather than an isolated instruction.",
      "The intersection of corporate structuring and commercial contracting is a particular focus: how the choices made at incorporation ripple through the agreements a company enters into, the regulatory regimes it becomes subject to, and the disputes it may one day face. He approaches each matter with that continuity in mind.",
      "He read law at Amity University, Rajasthan, completing both the LLB and LLM, and is enrolled with the Bar Council of Delhi and the Bar Council of India.",
    ],
    approach: [
      "Counsel begins with understanding the objective. Before the law is the reason the client has come — a transaction to be closed, a risk to be contained, a dispute to be resolved. The firm's first task in every engagement is to understand that objective clearly, and only then to consider the legal structures, agreements and procedures that will serve it.",
      "Commercial reality is not separate from legal advice; it is part of it. An agreement that is technically precise but commercially unworkable is not good counsel. The firm works to translate legal complexity into clear, actionable guidance that the client can act on — while preserving the rigour on which enforceability and protection depend.",
      "The firm treats each engagement as part of a longer relationship. Decisions taken today — in a shareholders' agreement, a commercial contract or a regulatory filing — shape what is possible tomorrow. Where it is useful to do so, the firm flags the downstream consequences of a choice before it is made, rather than after.",
    ],
    representativeWork: [
      {
        area: "Corporate Advisory",
        description:
          "Structuring of corporate groups, including the incorporation of holding and operating companies, the drafting of memoranda and articles of association, and the rationalisation of subsidiary structures.",
      },
      {
        area: "Commercial Contracts",
        description:
          "Drafting and negotiation of commercial agreements — supply, distribution, services, licensing and joint venture arrangements — with attention to scope, risk allocation and enforceability.",
      },
      {
        area: "Mergers & Acquisitions",
        description:
          "Legal due diligence on acquisition targets across sectors, with findings reported as a risk-ranked matrix that informs the negotiation of representations, warranties and indemnities.",
      },
      {
        area: "Dispute Resolution",
        description:
          "Representation in commercial arbitrations and in proceedings before the National Company Law Tribunal and the commercial courts, including applications for interim relief.",
      },
      {
        area: "Regulatory & Compliance",
        description:
          "Compliance audits and programme design for entities subject to SEBI, RBI and sector-specific regulatory regimes, including the drafting of internal policies and training frameworks.",
      },
      {
        area: "Insolvency & Recovery",
        description:
          "Creditor representation in proceedings under the Insolvency and Bankruptcy Code, 2016, including applications before the National Company Law Tribunal and participation in the committee of creditors.",
      },
    ],
    quote: {
      text:
        "Law is the structure; the client's objective is the purpose. Counsel is the bridge between them.",
      attribution: "Guiding principle of the firm's practice",
    },
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
      "Registered Advocate, Bar Council of India",
      "Registered Advocate, Bar Council of Delhi",
    ],
    accent: "electric",
  },
];

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);

/**
 * How the team works — describes the firm's collaborative model without
 * inventing specific colleagues or roles.
 */
export const teamPracticeModel = {
  title: "How the team works",
  intro:
    "The firm operates as an integrated team rather than a collection of siloed practitioners. Every matter is carried under the direct supervision of the founder, with work structured to ensure that legal analysis, drafting and strategy remain consistent throughout.",
  pillars: [
    {
      title: "Direct involvement of the founder",
      body: "Each engagement is carried with the founder's direct involvement — from the framing of the objective through to the final advice or instrument. The work is not delegated and signed off; it is supervised throughout.",
    },
    {
      title: "Integrated across practice areas",
      body: "Corporate, commercial, regulatory and disputes work is approached as connected rather than separate. A transaction is informed by the regulatory regime it sits within; a contract is drafted with the dispute it may one day face in mind.",
    },
    {
      title: "Documented and defensible",
      body: "The firm places weight on the record — advice that can be revisited, positions that can be defended, and files that can be handed over cleanly if a matter transitions to other counsel.",
    },
    {
      title: "Measured growth",
      body: "Colleagues are added to the practice deliberately, as the work warrants and as individuals whose approach matches the firm's are identified. Profiles are published here as colleagues are introduced.",
    },
  ],
} as const;

/**
 * Joining the firm — about mentorship and growth, without fabricating
 * specific openings or positions.
 */
export const joiningTheFirm = {
  title: "Joining the firm",
  intro:
    "The firm grows deliberately. The criteria below describe the approach it looks for in colleagues and in those who apply for internships and mentorship — there are no positions advertised on this page, and applications are considered as they are received.",
  pathways: [
    {
      title: "Internships",
      body: "Internships are offered to law students with a demonstrated interest in corporate and commercial practice. Interns are exposed to live matters in a structured way — observation, research assignments and supervised drafting — rather than clerical work alone.",
    },
    {
      title: "Associate roles",
      body: "The firm engages associates who combine technical preparation with commercial judgement. A familiarity with the Companies Act, the Contract Act, the IBC and the regulatory regimes the firm works within is expected; the willingness to engage with the substance of a matter is essential.",
    },
    {
      title: "Mentorship",
      body: "Colleagues are mentored through live work rather than abstract training. Drafting is reviewed line by line; reasoning is examined rather than accepted; and early involvement in client discussions is encouraged where appropriate.",
    },
  ],
  contactNote:
    "Applications and enquiries may be sent to the firm's office email with a curriculum vitae and a short note on the applicant's area of interest.",
} as const;
