/**
 * Firm-level factual content.
 * Source: saranshrajassociates.co.in (audited).
 * Promotional language and statistics removed for Bar Council of India compliance.
 */

export const firm = {
  name: "Saransh Raj & Associates",
  shortName: "Saransh Raj & Associates",
  descriptor:
    "A boutique law firm advising on corporate and commercial law.",
  summary:
    "A boutique corporate & commercial law firm. Counsel for companies, individuals and families.",
  purpose:
    "Founded by Advocate Saransh Raj, the firm advises on corporate and commercial law from New Delhi.",
  principles: [
    {
      title: "Integrity",
      body: "The firm holds itself to the standards expected of the profession in every matter it undertakes.",
    },
    {
      title: "Precision",
      body: "Legal outcomes often turn on detail. Each matter is approached with disciplined attention to the record.",
    },
    {
      title: "Clarity",
      body: "The firm works to translate legal complexity into clear, considered guidance that can be acted upon.",
    },
    {
      title: "Continuity",
      body: "Decisions taken today shape what is possible tomorrow. Long-term consequences are weighed before choices are made.",
    },
  ],
  basedIn: "New Delhi",
  establishedNote: "Founded by Advocate Saransh Raj",
} as const;

export const contact = {
  address: {
    line1: "G-14, Lower Ground Floor",
    line2: "Kalkaji, New Delhi – 110019",
    country: "India",
    full: "G-14, LGF, Kalkaji, New Delhi – 110019, India",
  },
  phone: "+91 79067 08411",
  phoneHref: "tel:+917906708411",
  email: "office@saranshrajassociates.co.in",
  emailHref: "mailto:office@saranshrajassociates.co.in",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM",
  mapQuery: "G-14, Kalkaji, New Delhi 110019",
} as const;

export const legalPages = {
  disclaimer: { title: "Disclaimer", path: "/disclaimer" },
  terms: { title: "Terms of Use", path: "/terms" },
  privacy: { title: "Privacy Policy", path: "/privacy" },
} as const;
