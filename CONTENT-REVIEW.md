# Content Review

This document records contact-detail verification, uncertain facts, missing
content, and compliance decisions for the Saransh Raj & Associates website
redesign. It is an internal project document and is **not** part of the public
interface.

> **Content requires final legal/compliance approval before launch.** All
> factual content below is sourced from the audited existing website
> (saranshrajassociates.co.in). No people, qualifications, offices, dates,
> clients, matters, awards or statistics have been invented.

---

## 1. Source of truth

The existing website at **https://www.saranshrajassociates.co.in/** is treated
as the factual source of truth. The following pages were crawled and audited:

- `/` (Home)
- `/about` (About the Firm)
- `/practice-areas` (Practice Areas)
- `/contact` (Contact)

No other public pages were found on the existing site (no People, Sectors,
Insights, Careers, Disclaimer, Terms or Privacy pages existed).

---

## 2. Verified facts (preserved)

| Field | Value | Source |
|---|---|---|
| Firm name | Saransh Raj & Associates | All pages |
| Firm type | Boutique corporate and commercial law firm | `/about` |
| Founder | Advocate Saransh Raj | `/about` |
| Founder qualifications | LLB, Amity University Rajasthan; LLM, Amity University Rajasthan | `/about` |
| Bar memberships | Registered Advocate, Bar Council of India; Bar Council of Delhi | `/about` |
| Based in | New Delhi | `/about`, `/contact` |
| Serves across | India | `/about` |
| Office address | G-14, LGF, Kalkaji, New Delhi – 110019, India | `/contact`, footer |
| Phone | +91 79067 08411 | `/contact`, footer |
| Email | Office@saranshrajassociates.co.in | `/contact`, footer |
| Office hours | Monday – Saturday, 10:00 AM – 7:00 PM | `/contact` |
| Practice areas | Corporate Advisory; Commercial Contracts; Mergers & Acquisitions; Dispute Resolution; Regulatory & Compliance; Insolvency & Recovery | `/practice-areas` |
| Sectors | Alcoholic Beverages; FMCG; Manufacturing; Infrastructure; Construction; Real Estate; Technology; Logistics; Renewable Energy; Hospitality | Home |
| Principles | Integrity; Precision; Client-first; Clarity | `/about` |

Contact details were consistent across the Home, About, Practice Areas and
Contact pages of the source site.

---

## 3. Contact-detail corrections / discrepancies

1. **Canonical URL mismatch.** The source homepage declares a canonical URL of
   `https://saranshraj.com/` while the site is served at
   `https://www.saranshrajassociates.co.in/`. The redesigned site uses
   `https://www.saranshrajassociates.co.in` consistently for canonical, sitemap,
   Open Graph and robots. **Action required:** confirm the firm's intended
   primary domain (`saranshraj.com` vs `saranshrajassociates.co.in`) and update
   `metadataBase` in `src/app/layout.tsx` and the `sitemap.ts` / `robots.ts`
   base URL if needed.

2. **Copyright year.** The source site displays "© 2026". The redesign displays
   the current year dynamically. No correction needed, but noted for the record.

---

## 4. Uncertain facts / placeholders

1. **People beyond the founder.** The source site names only Advocate Saransh
   Raj. No other team members, qualifications, roles or biographies are
   available. The redesign publishes only the founder's profile and adds a
   clearly-labelled editorial note on the People page stating that further
   profiles will be added as colleagues are introduced. **No team members were
   invented.**

2. **Insights / publications.** The source site contains no published articles,
   papers or thought-leadership content. Rather than fabricate publications, the
   redesign presents an honest "Insights" index that lists intended areas of
   writing, each clearly marked "Forthcoming", with an explicit notice that no
   articles have been published yet and that titles are intended areas only.
   **No publication dates, authors or claims were invented.**

3. **Sector notes.** The source site lists sector names without descriptions.
   The redesign adds short, factual one-line notes describing the general nature
   of legal work in each sector (e.g. "Licensing, distribution and regulatory
   frameworks" for Alcoholic Beverages). These are generic, non-promotional
   descriptions of the field and do not claim specific matters or clients.
   **Action required:** the firm should review these notes and confirm they are
   acceptable, or supply its own descriptions.

4. **Founder biography.** The source "About" page provides a brief founder
   biography. The redesign expands it only with information already present on
   the source site (practice focus areas, which mirror the firm's six practice
   areas). No additional experience, matters, clients or achievements were
   added.

5. **Careers.** The source site has no careers page. The redesign adds a neutral
   Careers page that states no positions are currently advertised and invites
   introductions by email. No roles, count of openings, or hiring claims were
   invented.

---

## 5. Compliance decisions (Bar Council of India)

The following content from the source site was **removed or reworded** to keep
the website informational and non-promotional, in line with Bar Council of
India rules against advertisement or solicitation by advocates:

| Source content | Decision | Reason |
|---|---|---|
| "500+ Cases Handled" | Removed | Statistic / implied track record |
| "98% Client Satisfaction" | Removed | Statistic / success-rate claim |
| "500+ Commercial Contracts Drafted & Negotiated" | Removed | Statistic / volume claim |
| "6 Practice Areas / Track Record" | Reworded to "6 focused" (fact only) | Removed "Track Record" framing |
| "Trusted Legal Counsel. Proven Results." | Softened to neutral descriptor | "Proven Results" implies outcome claims |
| "Consult Now" / "Book a Consultation" CTAs | Removed | Conversion / solicitation language |
| "Ready to Work With Us?" | Removed | Solicitation language |
| "Ready to Protect What Matters?" | Removed | Solicitation language |
| "Need Legal Counsel? Schedule a confidential consultation" | Removed | Solicitation language |
| Hero "Lady Justice" image | Removed | Clichéd legal imagery (per brief) |
| Cookie consent banner | Simplified to essential-only | Privacy-first; no advertising cookies |

The redesign adds a **mandatory full-screen disclaimer gateway** that the user
must actively accept ("I Agree") before entering the site, with session
persistence and a "Revisit Disclaimer" link in the footer. Standalone
Disclaimer, Terms of Use and Privacy Policy pages are included.

Navigation uses neutral labels (Firm, Expertise, Sectors, People, Insights,
Careers, Contact). No testimonials, ratings, client logos, success rates,
victory counts, case-result claims, guarantees, comparisons, rankings, urgency,
pricing, or "best/leading/top/no.1" claims are used.

---

## 6. Missing content (recommended next steps for the firm)

- [ ] Confirm primary domain (`saranshraj.com` vs `saranshrajassociates.co.in`).
- [ ] Review and confirm the one-line sector notes, or supply firm-approved
      descriptions.
- [ ] Provide additional team member profiles (name, role, qualifications, bar
      memberships, short bio) as colleagues are introduced.
- [ ] Provide published insights/articles, or confirm the "Forthcoming"
      framing is acceptable.
- [ ] Supply a firm-approved logo asset (the redesign uses an original
      typographic "S" logomark as a placeholder).
- [ ] Final legal/compliance review of all public-facing copy before launch.

---

## 7. Images and visual assets

All visuals in the redesign are **original CSS/SVG/Canvas artwork** created for
this website — animated hero canvas, abstract monogram portraits, geometric
colour fields, grain textures and gradient meshes. **No images were copied or
hotlinked** from the source site or the reference sites (azbpartners.com,
khaitanco.com). No clichéd legal imagery (gavels, scales, pillars, law books,
handshakes) is used. Every decorative visual is marked `aria-hidden`; the map
on the Contact page uses OpenStreetMap's embed.
