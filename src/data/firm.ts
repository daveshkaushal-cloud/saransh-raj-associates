/**
 * Firm-level factual content.
 * Source: saranshrajassociates.co.in (audited).
 * Promotional language and statistics removed for Bar Council of India compliance.
 *
 * "Boutique" is used once only. "Companies, individuals and families" is
 * replaced with factual, varied language. Principles are rewritten to be
 * definition-style, not promotional.
 */

export const firm = {
  name: "Saransh Raj & Associates",
  shortName: "Saransh Raj & Associates",
  descriptor:
    "A New Delhi-based corporate and commercial legal practice.",
  summary:
    "A New Delhi–based corporate and commercial legal practice advising businesses, individuals and family-led enterprises across transactional, regulatory and dispute-related matters.",
  purpose:
    "Founded by Advocate Saransh Raj, the firm advises on corporate and commercial law from New Delhi.",
  establishedNote: "Founded by Advocate Saransh Raj",
  basedIn: "New Delhi",
  principles: [
    {
      title: "Context",
      body: "Understand the circumstances before applying the law.",
    },
    {
      title: "Precision",
      body: "Detail often determines legal and commercial outcomes.",
    },
    {
      title: "Clarity",
      body: "Advice must be clear enough to support a decision.",
    },
    {
      title: "Continuity",
      body: "Today's legal decision can shape tomorrow's position.",
    },
  ],
  approach: [
    {
      number: "01",
      title: "Context",
      body: "Understand commercial, regulatory and practical circumstances before prescribing legal action.",
    },
    {
      number: "02",
      title: "Analysis",
      body: "Identify relevant rights, obligations, law, precedent and exposure.",
    },
    {
      number: "03",
      title: "Strategy",
      body: "Evaluate realistic courses of action and their consequences.",
    },
    {
      number: "04",
      title: "Execution",
      body: "Carry the strategy through documentation, negotiation, representation or proceedings.",
    },
  ],
} as const;

export const contact = {
  address: {
    line1: "G-14B, Basement",
    line2: "Kalkaji, New Delhi – 110019",
    country: "India",
    full: "G-14B, Basement, Kalkaji, New Delhi – 110019, India",
  },
  phone: "+91 79067 08411",
  phoneHref: "tel:+917906708411",
  email: "office@saranshrajassociates.co.in",
  emailHref: "mailto:office@saranshrajassociates.co.in",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM",
  mapQuery: "G-14B, Kalkaji, New Delhi 110019",
} as const;

export const legalPages = {
  disclaimer: { title: "Disclaimer", path: "/disclaimer" },
  terms: { title: "Terms of Use", path: "/terms" },
  privacy: { title: "Privacy Policy", path: "/privacy" },
} as const;
