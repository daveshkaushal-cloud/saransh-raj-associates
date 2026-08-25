import { legalPages } from "./firm";

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Firm", href: "/firm" },
  { label: "Expertise", href: "/expertise" },
  { label: "Sectors", href: "/sectors" },
  { label: "People", href: "/people" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "The Firm", href: "/firm" },
  { label: "Expertise", href: "/expertise" },
  { label: "Sectors", href: "/sectors" },
  { label: "People", href: "/people" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: legalPages.disclaimer.title, href: legalPages.disclaimer.path },
  { label: legalPages.terms.title, href: legalPages.terms.path },
  { label: legalPages.privacy.title, href: legalPages.privacy.path },
];
