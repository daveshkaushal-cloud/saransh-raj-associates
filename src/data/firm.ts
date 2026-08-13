/**
 * Firm-level factual content.
 * Source: saranshrajassociates.co.in (audited).
 * Promotional language and statistics removed for Bar Council of India compliance.
 */

export const firm = {
  name: "Saransh Raj & Associates",
  shortName: "Saransh Raj & Associates",
  descriptor:
    "A New Delhi-based law firm providing counsel across corporate and commercial law.",
  summary:
    "Saransh Raj & Associates is a boutique corporate and commercial law firm built on the principles of integrity, precision and a client-first approach to counsel.",
  purpose:
    "Founded by Advocate Saransh Raj, the firm was established to provide companies, individuals and families with considered corporate legal counsel.",
  principles: [
    {
      title: "Integrity",
      body: "We hold ourselves to the highest ethical standards in every matter we undertake.",
    },
    {
      title: "Precision",
      body: "Legal outcomes often turn on detail. We approach each matter with disciplined attention to the record.",
    },
    {
      title: "Client-first",
      body: "The interests of those we advise guide every decision we make.",
    },
    {
      title: "Clarity",
      body: "We work to make the law understandable, translating complexity into clear, actionable guidance.",
    },
  ],
  basedIn: "New Delhi",
  servesAcross: "India",
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
  email: "Office@saranshrajassociates.co.in",
  emailHref: "mailto:Office@saranshrajassociates.co.in",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM",
  mapQuery: "G-14, Kalkaji, New Delhi 110019",
} as const;

export const legalPages = {
  disclaimer: { title: "Disclaimer", path: "/disclaimer" },
  terms: { title: "Terms of Use", path: "/terms" },
  privacy: { title: "Privacy Policy", path: "/privacy" },
} as const;
