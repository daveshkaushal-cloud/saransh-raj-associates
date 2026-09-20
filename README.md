# Saransh Raj & Associates — Website

A redesigned, production-ready website for Saransh Raj & Associates, a New
Delhi-based corporate and commercial law firm. Built as an immersive, editorial
"Living Legal Intelligence" experience with a mandatory disclaimer gateway,
neutral (non-promotional) language, and full Bar Council of India compliance.

> **Content requires final legal/compliance approval before launch.** See
> [`CONTENT-REVIEW.md`](./CONTENT-REVIEW.md) for contact verification,
> uncertain facts, missing content and compliance decisions.

---

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + custom design tokens
- **UI primitives:** shadcn/ui (New York)
- **Motion:** Framer Motion (reveals, parallax, pinned sections, magnetic links)
- **Typography:** Instrument Serif (display) + Manrope (sans)
- **Database:** Prisma ORM (SQLite) — stores contact-form enquiries
- **Icons:** Lucide
- **Toasts:** Sonner

---

## Design system

**Concept:** "Living Legal Intelligence" — editorial precision combined with
vibrant contemporary Indian modernism.

**Colour tokens** (`src/app/globals.css`):

| Token | Hex | Use |
|---|---|---|
| `ink` | `#10101A` | Primary text / dark sections |
| `ivory` | `#F5F0E7` | Warm foundation background |
| `paper` | `#FBF8F1` | Card / section background |
| `cobalt` | `#3157FF` | Electric accent |
| `vermilion` | `#FF574D` | Warm accent |
| `saffron` | `#FFB21A` | Saffron accent |
| `mint` | `#70DEC0` | Mint accent |
| `violet` | `#8A65FF` | Violet accent |

Colour bursts are section-specific and disciplined — not every colour in every
section. Accent helpers live in `src/lib/accents.ts`.

**Typography:** oversized responsive serif headlines (`display-1/2/3`), masked
line reveals, character animation, and a clean sans-serif body. Avoids tiny
text and excessive all-caps.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, SiteShell
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design tokens, motion utilities, grain
│   ├── sitemap.ts              # sitemap.xml
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # 404
│   ├── api/contact/route.ts    # Contact form endpoint (Prisma)
│   ├── firm/                   # The Firm
│   ├── expertise/              # Practice areas index
│   │   └── [slug]/             # Individual practice area template
│   ├── sectors/                # Sectors
│   ├── people/                 # People index
│   │   └── [slug]/             # Individual profile template
│   ├── insights/               # Insights / publications
│   ├── careers/                # Careers (neutral)
│   ├── contact/                # Contact / offices + form
│   ├── disclaimer/             # Full disclaimer
│   ├── terms/                  # Terms of Use
│   └── privacy/                # Privacy Policy
├── components/
│   ├── site/                   # Header, footer, disclaimer gate, preloader,
│   │                           #   custom cursor, scroll progress, hero visual,
│   │                           #   horizontal expertise scroller, sector grid,
│   │                           #   people preview, insights preview, philosophy
│   │                           #   narrative, page hero, legal layout, contact
│   │                           #   form, site shell
│   ├── motion/                 # Reveal, char-reveal, magnetic primitives
│   └── ui/                     # shadcn/ui components
├── data/                       # CMS-ready content layer
│   ├── firm.ts                 # Firm info, contact, legal pages
│   ├── practice-areas.ts       # 6 practice areas
│   ├── sectors.ts              # 10 sectors
│   ├── people.ts               # Founder profile
│   ├── insights.ts             # Insight topics (forthcoming)
│   └── navigation.ts           # Nav structure
└── lib/
    ├── accents.ts              # Accent colour helpers
    ├── use-in-view.ts          # IntersectionObserver hook
    └── db.ts                   # Prisma client
```

---

## Content layer

All factual content lives in `src/data/` as typed, CMS-ready modules. To update
content (people, practice areas, sectors, contact details), edit the relevant
file in `src/data/`. No page code needs to change.

The data layer is the single source of truth — pages import from it, so updating
a practice area's overview updates both the expertise index and its detail page.

---

## Indian legal-profession compliance

- **Mandatory disclaimer gateway** before first entry (`DisclaimerGate`).
  Requires active "I Agree" selection; remembers acceptance for the browser
  session; provides a "Revisit Disclaimer" link in the footer.
- **Neutral navigation:** Firm, Expertise, Sectors, People, Insights, Careers,
  Contact. No "Book a Consultation", "Hire Us", "Free Consultation" or similar
  conversion language.
- **No** testimonials, ratings, client logos, success rates, victory counts,
  case-result claims, guarantees, comparisons, rankings, urgency, pricing, or
  "best/leading/top/no.1" claims.
- **No** statistics (the source site's "500+ Cases", "98% Satisfaction" were
  removed).
- Standalone **Disclaimer**, **Terms of Use** and **Privacy Policy** pages.
- Contact form includes a non-solicitation notice and does not create a
  lawyer-client relationship.

---

## Motion system

A cohesive motion system (not unrelated effects):

- Smooth native scrolling (no scroll hijacking)
- Scroll-progress indicator (top bar)
- Pinned horizontal expertise explorer (desktop) with horizontal scroll-snap
  fallback on mobile/tablet
- Sticky philosophy narrative with parallax colour field
- Masked headline reveals and character animation
- Magnetic text links and buttons
- Refined custom cursor (pointer devices only; disabled on touch)
- Animated preloader (respects `prefers-reduced-motion`)
- Page transitions and micro-interactions on cards, filters and navigation
- Original animated Canvas hero visual (abstract legal structures)
- Animated footer marquee

**Accessibility:** all motion respects `prefers-reduced-motion` (static
fallbacks). Custom cursor and heavy motion are disabled on touch devices.

---

## Setup and development

```bash
# Install dependencies
bun install

# Start the dev server (port 3000)
bun run dev

# Lint
bun run lint

# Push the Prisma schema to the database (SQLite)
bun run db:push

# Generate the Prisma client
bun run db:generate
```

The dev server runs at `http://localhost:3000`.

### Environment

A `DATABASE_URL` is expected for Prisma (SQLite by default, configured in
`prisma/schema.prisma`). The contact form gracefully degrades if the database
is unavailable — the public response remains calm and non-promotional.

---

## Deployment

The Next.js config uses `output: "standalone"` for efficient containerised
deployment.

1. Build the production bundle:
   ```bash
   bun run build
   ```
2. Run the standalone server:
   ```bash
   bun run start
   ```
3. Ensure the `DATABASE_URL` environment variable is set in production.
4. Confirm the primary domain in `src/app/layout.tsx` (`metadataBase`) and
   `src/app/sitemap.ts` / `src/app/robots.ts` matches the firm's intended
   domain (see `CONTENT-REVIEW.md` §3).

---

## SEO

- Per-page `metadata` with neutral, factual wording and canonical URLs
- `sitemap.xml` and `robots.txt` generated via Next.js metadata routes
- Open Graph and Twitter card configuration in the root layout
- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`, `section`,
  `article`, `address`)
- Correct heading hierarchy (one `h1` per page)
- `alt` text on all meaningful images; decorative visuals are `aria-hidden`

---

## Accessibility

- WCAG-conscious contrast (ink on ivory, ivory on ink)
- Visible focus states (`:focus-visible` outlines)
- Keyboard-navigable navigation, filters, forms and menus
- Mobile menu locks body scroll and is keyboard accessible
- `prefers-reduced-motion` respected throughout
- Touch targets ≥ 44px on interactive elements

---

## Remaining review items

See [`CONTENT-REVIEW.md`](./CONTENT-REVIEW.md) for the full list, including:

- Primary domain confirmation
- Sector-note review
- Additional team profiles
- Published insights
- Firm-approved logo asset
- Final legal/compliance sign-off
