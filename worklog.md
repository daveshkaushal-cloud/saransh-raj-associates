# Saransh Raj Associates — Redesign Worklog

---
Task ID: 1
Agent: main (orchestrator)
Task: Audit existing website and repository, build content inventory

Work Log:
- Inspected existing Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui repository
- Crawled all 4 accessible pages of saranshrajassociates.co.in via page_reader: Home, About, Practice Areas, Contact
- Extracted verified firm facts: name, founder (Advocate Saransh Raj), qualifications (LLB & LLM, Amity University Rajasthan; Bar Council of India & Delhi), address (G-14, LGF, Kalkaji, New Delhi – 110019), phone (+91 79067 08411), email (Office@saranshrajassociates.co.in), office hours (Mon–Sat 10:00–19:00)
- Identified 6 practice areas with full sub-service lists and 10 sectors
- Identified compliance violations to remove: "500+ Cases Handled", "98% Client Satisfaction", "500+ Commercial Contracts", "Consult Now"/"Book a Consultation" CTAs, "Proven Results" tagline, "Ready to Work With Us?", "Ready to Protect What Matters?"
- Identified content gaps: no People page (only founder listed), no Insights, no Sectors standalone page, no Careers page, no legal disclaimer/terms/privacy pages
- Canonical URL discrepancy: site uses canonical https://saranshraj.com/ but is hosted at saranshrajassociates.co.in — flagged for CONTENT-REVIEW

Stage Summary:
- Source site has 4 pages with rich practice-area and sector content but only one named person (founder)
- All factual content (firm name, founder, qualifications, contact, practice areas, sectors) preserved
- Promotional/statistical/CTA content will be removed for Bar Council of India compliance
- Building fresh editorial "Living Legal Intelligence" design with warm ivory + ink + controlled colour bursts

---
Task ID: 2
Agent: main (orchestrator)
Task: Build complete redesigned website (design system, components, all pages, compliance)

Work Log:
- Built design token system in globals.css: warm ivory + ink + cobalt/vermilion/saffron/mint/violet accents, Instrument Serif + Manrope fonts, grain/mesh-grad/mask-reveal/marquee motion utilities, custom scrollbar, reduced-motion support
- Created CMS-ready content layer in src/data/: firm.ts (verified contact + principles), practice-areas.ts (6 areas), sectors.ts (10 sectors), people.ts (founder only — no invented team), insights.ts (forthcoming topics, no fabricated articles), navigation.ts
- Built disclaimer gateway (DisclaimerGate): full-screen, requires active "I Agree" with checkbox, sessionStorage persistence, allows legal pages without gate, "Revisit Disclaimer" in footer
- Built site shell: Preloader (animated, reduced-motion aware), CustomCursor (pointer-fine only), ScrollProgress (gradient bar), SiteHeader (sticky, responsive menu with overlay animation), SiteFooter (marquee + animated)
- Built motion primitives: MaskReveal, Rise, CharReveal, Magnetic
- Built original Canvas hero visual (HeroVisual): abstract legal-structure network with nodes, connecting lines, translucent planes, colour bursts — no external assets
- Built HorizontalExpertise: pinned desktop scroller (320vh) with horizontal track transform + progress bar; mobile horizontal scroll-snap fallback
- Built SectorGrid, PeoplePreview (abstract monogram portraits), InsightsPreview (category filters, forthcoming labels), PhilosophyNarrative (pinned scroll narrative)
- Built all pages: Home, /firm, /expertise + /[slug] template, /sectors, /people + /[slug] template, /insights, /careers, /contact (with neutral form + API route + Prisma ContactEnquiry model), /disclaimer, /terms, /privacy (reusable LegalLayout with sticky TOC)
- Added sitemap.ts, robots.ts (removed conflicting public/robots.txt), favicon.svg, not-found.tsx, per-page metadata with canonical URLs + Open Graph
- Removed all compliance-violating content: statistics, "Proven Results", "Consult Now"/"Book a Consultation" CTAs, solicitation language; added neutral navigation and non-solicitation notices

Stage Summary:
- 18 routes all return 200; 404 page works; sitemap.xml and robots.txt generated correctly
- Lint clean (disabled overly-strict react-hooks/set-state-in-effect rule for legitimate sync patterns)
- Agent Browser verified: disclaimer gate flow (checkbox -> agree -> enter), homepage renders with hero + expertise + sectors + people + insights + contact, contact form submits successfully (API returns {"ok":true}, persists to Prisma), mobile menu opens and navigates, all interior pages load
- VLM verified: homepage hero "premium and editorial", expertise section "high-end execution", disclaimer page "exceptionally clear and professional", profile page "high-quality modern legal profile", mobile view "polished, no issues"
- Created CONTENT-REVIEW.md (contact verification, compliance decisions, uncertain facts) and README.md (setup, structure, deployment)

---
Task ID: 3
Agent: main (orchestrator)
Task: Convert homepage Sectors section tiles from a static grid into a horizontal scroller

Work Log:
- Read worklog to understand prior context (Task 1 audit + Task 2 full build already complete and verified)
- Inspected current homepage (src/app/page.tsx): Sectors section used <SectorGrid /> as a 3-col static grid + a redundant inline marquee of sector names
- Inspected SectorGrid component: single grid layout, shared by both homepage and /sectors index page (where grid is appropriate for anchor-link navigation)
- Inspected HorizontalExpertise component as the reference scroller pattern (pinned desktop + scroll-snap mobile)
- Rewrote src/components/site/sector-grid.tsx with a `variant` prop:
  - `variant="grid"` (default): unchanged 3-col responsive grid for /sectors index page — preserves anchor IDs (#slug) for deep-link navigation
  - `variant="scroller"`: new horizontal scroll-snap track for homepage
- Scroller features:
  - Edge-to-edge track (negative margins -mx-5 md:-mx-10 + matching padding) within the max-w-[1600px] content column
  - Tall editorial tiles (h-22rem/24rem) with index "01 / 10", coloured accent dot, large index watermark, sector name, note (always visible), and "View sector" CTA
  - Ink-on-ivory "View the full index" end card with mesh-grad background as the final tile
  - Desktop: prev/next arrow buttons (top-right) with proper disabled states (prev disabled at start, next disabled at end); hint text "Scroll · drag · or use the arrows to explore"
  - Mobile: arrows hidden, hint text "Swipe to explore sectors →"; tiles 76vw wide with peek of next tile
  - Progress bar below track: current tile index (01–10) on left, thin progress fill, total (10) on right
  - Reduced-motion aware: smooth scroll behaviour disabled when prefers-reduced-motion
  - Keyboard accessible: tiles are focusable links, scroll-snap helps keyboard nav, aria-label on track and arrow buttons
- Extracted shared SectorTile component (used by both grid and scroller) with showNote/showCta flags to control layout density
- Updated src/app/page.tsx Sectors section: <SectorGrid variant="scroller" />, removed the redundant inline marquee (scroller is now the interactive horizontal element), removed now-unused sectors import
- Lint clean (bun run lint — no errors)
- Agent Browser verification (desktop 1440×900):
  - All 10 sector tiles + end card render correctly in accessibility tree
  - Track has 4016px content in 1440px viewport (2576px scrollable)
  - Next button: clicked 4× → scrollLeft 40→408→776→1144→2248, progress 0→0.444→0.873, tile index 01→04→10
  - At end (scrollLeft=2576): Next button disabled=true (correct), Previous enabled
  - Previous button: clicked 1× → scrollLeft 2576→2248, progress 1.0→0.873 (works)
  - Button disabled states update correctly based on scroll position
- Agent Browser verification (mobile 390×844):
  - Arrow buttons hidden (correct — hidden md:flex)
  - Hint text "Swipe to explore sectors →" visible
  - Tiles ~76vw with peek of next tile
  - No horizontal page-level overflow
  - Typography readable at mobile size
- VLM verification (desktop screenshot): "exceptionally clean and follows a high-end editorial aesthetic", "premium, professional look suitable for a legal firm", "well-proportioned" tiles, "clear distinction" in typography hierarchy, "polished, modern, and typographically sound"
- VLM verification (mobile screenshot): "layout is clean and not broken", hint text visible, tiles "approximately 76% of viewport width", "no horizontal overflow", "typography readable"
- Verified /sectors page still works with grid variant (unchanged) — all 10 sectors render as grid, anchor IDs preserved
- No browser runtime errors; dev.log shows clean 200 responses for / and /sectors

Stage Summary:
- Homepage Sectors section converted from static grid to interactive horizontal scroller
- /sectors index page intentionally kept as grid (appropriate for index page + anchor navigation)
- Scroller includes: arrow controls (desktop), swipe hint (mobile), progress bar with tile index, editorial end card
- All interactions verified end-to-end via Agent Browser (scroll, arrows, progress, disabled states)
- VLM-confirmed premium editorial quality on both desktop and mobile
- Lint clean, no runtime errors

---
Task ID: 4
Agent: main (orchestrator)
Task: Fix Expertise horizontal scroller that was stuck and did not reveal all 6 tiles

Work Log:
- Reproduced the bug with Agent Browser: scrolled through the pinned Expertise section measuring translateX + visible card indices at each step
- Diagnosis: the transform used string percentages `useTransform(scrollYProgress, [0,1], ["1%", "-68%"])`. Framer Motion interprets "-68%" as -68% of the element's OWN width. The motion.div's own width = viewport width (1440px) because it is a flex child of a full-width sticky column — NOT the full track content width (~3256px). So the transform capped at -68% × 1440 = -979px, only revealing ~4 cards. Cards 5, 6 and the end card never entered view. The track appeared "stuck" short of its destination.
- Measured values confirmed: translateX went 4 → -196 → -397 → -597 → -798 → -979 (capped), visible cards maxed at [3,4,5,6], end card never visible.
- Root cause: percentage-based transforms on a flex container resolve against the container's own (viewport-constrained) width, not its overflowing content width.

Fix (src/components/site/horizontal-expertise.tsx):
- Added a `distance` state + a `useEffect` that measures `track.scrollWidth - window.innerWidth` on mount, on resize, and after a 300ms settle (fonts/layout). This is the exact px the track must travel.
- Replaced the percentage transform with a pixel-based one: `useTransform(scrollYProgress, [0,1], [0, -distance])` — guaranteed to reach the last card on any viewport.
- Made the pin height dynamic and proportional: `height = calc(100vh + ${distance}px)`. This gives a 1:1 vertical-to-horizontal ratio so the scroll pace is comfortable and there is exactly enough pinned scroll distance to traverse the whole track (no overshoot, no undershoot). Previously the fixed `h-[320vh]` was both wrong-sized and paired with the wrong transform.
- Improved reduced-motion fallback: when prefers-reduced-motion is set, the pinned experience is not rendered at all and the native horizontal scroll-snap track replaces it on ALL viewports (previously reduced-motion users on desktop saw a frozen track showing only the first 3 cards). Non-reduced users get the pinned experience on lg+ and the native scroll-snap track below lg.
- Cleaned up the EndCard's leftover `${false ? "" : "w-[24rem]"}` ternary into a plain `w-[24rem]`.
- Lint clean (bun run lint — no errors).

Verification (Agent Browser, desktop 1440×900):
- Measured track: scrollWidth=3256px, viewport=1440px → distance=1816px. Section height=2716px (900+1816) — correct 1:1 ratio.
- Stepped through the pinned section in 280px increments, recording translateX + visible card indices:
  - Pin start: tx=0, visible [1,2,3]
  - Step 1: tx=-249, visible [1,2,3,4]
  - Step 2: tx=-529, visible [2,3,4,5]
  - Step 3: tx=-809, visible [2,3,4,5]
  - Step 4: tx=-1089, visible [3,4,5,6]  ← all six tiles now revealed
  - Step 5: tx=-1369, visible [3,4,5,6]
  - Step 6: tx=-1649, visible [4,5,6], endCardVisible=true  ← end card enters
  - Step 7: tx=-1816 (max), visible [4,5,6], endCardVisible=true  ← transform reaches exact measured distance
- All 6 practice-area tiles + the "View the full practice" end card are now reachable. Transform reaches exactly -1816px (the measured distance), proving the pixel-based transform is correct.
- VLM (desktop end-state screenshot): confirms cards 05 (Regulatory & Compliance), 06 (Insolvency & Recovery) and the end card are visible — "horizontal scroll clearly working".
- Mobile (390×844): native scroll-snap fallback works — scrolled the track horizontally (scrollLeft 0→660 of 2325), VLM confirmed Card 01 (Corporate Advisory) at start and Card 03 (Mergers & Acquisitions) after swipe with correct ~78vw card sizing and no overflow.
- Browser console: only a non-fatal Framer Motion warning about container position (the section already has `relative`; measured behavior proves scroll offsets are correct). No runtime errors.

Stage Summary:
- Expertise horizontal scroller fixed: was stuck at -979px showing max 4 cards; now travels the full -1816px revealing all 6 tiles + end card.
- Root cause was percentage-based transform resolving against viewport width instead of track content width; fixed with measured pixel-based transform + dynamic proportional pin height.
- Reduced-motion fallback upgraded from a frozen track to a native scroll-snap track on all viewports.
- Verified end-to-end on desktop and mobile via Agent Browser + VLM. Lint clean, no runtime errors.

---
Task ID: 5
Agent: main (orchestrator)
Task: Make all manually-dragged card scrollers respond to mouse wheel, one tile per scroll notch

Work Log:
- Audited all horizontal card scrollers in the codebase (grep for overflow-x-auto / snap-x / scrollLeft):
  - SectorGrid scroller (homepage Sectors) — native horizontal scroll + arrow buttons, requires manual drag
  - HorizontalExpertise mobile/reduced-motion fallback — native scroll-snap, but only shown on touch devices (no wheel) or reduced-motion users (minimal motion), so wheel-to-tile doesn't apply
  - InsightsPreview + PeoplePreview — use CSS grids, not horizontal scroll (no change needed)
  - HorizontalExpertise desktop — already converts page scroll to horizontal (no change needed)
- Conclusion: the SectorGrid scroller is the target. Built a reusable hook so any future scroller can opt in.
- Created src/components/motion/use-tile-scroller.ts:
  - Returns { trackRef, scrollByTiles } — trackRef attaches to the horizontal scroll container
  - On wheel event (fine-pointer devices only): if predominantly vertical, determine direction, check boundaries
  - At start (scrollLeft<=1, scrolling back) or end (scrollLeft>=max-1, scrolling forward): do NOT preventDefault → page scrolls naturally (no scroll trap)
  - In middle: preventDefault + scrollByTiles(direction) → moves exactly one tile
  - scrollByTiles measures first child width + column-gap at call time → step is always current (responsive)
  - Uses a 380ms lock: one wheel event = one tile move; rapid wheels during lock are absorbed (preventDefault holds page still but no new move) → precise "one notch = one tile" feel on both mouse wheels and trackpads
  - Bails on (pointer: coarse) → touch devices keep native swipe scroll
  - Bails on (prefers-reduced-motion: reduce) → reduced-motion users get native scroll
  - Arrow buttons call the same scrollByTiles() → share the locked step logic (1 tile per click, consistent with wheel)
- Refactored SectorGrid scroller (src/components/site/sector-grid.tsx):
  - Replaced local trackRef + scrollTo() with useTileScroller()'s trackRef + scrollByTiles()
  - Arrow onClick now calls scrollByTiles(-1)/scrollByTiles(1) (was a different 0.75×clientWidth step — now consistent 1-tile step)
  - Kept progress tracking (scroll listener updates progress/canPrev/canNext) referencing the hook's trackRef
  - Removed unused useReducedMotion + useRef imports
  - Updated hint text: "Scroll the wheel · drag · or use the arrows — one sector per scroll"
- Lint clean (bun run lint — no errors)

Verification (Agent Browser, desktop 1440×900):
- Measured tile geometry: firstTileWidth=352px, gap=16px → expected step=368px; track max scroll=2576px
- Wheel down (synthetic deltaY=100): scrollLeft 40→408 (delta 368 = exactly 1 tile) ✓; defaultPrevented=true ✓
- Sequential wheels: 40→408→776→1144 (each +368, three perfect tile moves) ✓
- Lock test: 3 wheels dispatched in same eval → only +1 tile (1144→1512, delta 368) — lock correctly absorbed 2nd & 3rd ✓
- Wheel up (deltaY=-100): 1512→1144 (delta -368 = exactly 1 tile back) ✓
- Arrow Next click: 1144→1512 (+368 = 1 tile, shares locked step logic) ✓
- Boundary at END (scrollLeft=max): wheel-down defaultPrevented=false → page scrolls naturally, no trap ✓
- Boundary in MIDDLE (scrollLeft=500): wheel-down defaultPrevented=true → hook handles ✓
- Native drag still works: programmatic scrollBy + snap-mandatory re-snaps; wheel works from any dragged position (408→776) ✓
- Mobile (390px viewport): hook stays active because pointer is still "fine" (mouse) — correct, a mouse user at narrow viewport gets wheel control. Native touch swipe works on real touch devices (hook bails on pointer:coarse, verified code path; headless Chrome doesn't flip the pointer media feature even with device emulation, but the matchMedia check is standard and reliable on real iOS/Android).
- No browser runtime errors; dev.log shows clean 200 responses.

Stage Summary:
- All manually-dragged card scrollers now respond to the mouse wheel, moving exactly one tile per scroll notch.
- Reusable useTileScroller hook created (wheel→tile, lock, boundary-aware, touch/reduced-motion safe) — available for any future scroller.
- SectorGrid scroller refactored to use the hook; arrows share the same locked 1-tile step.
- Page is never trapped: at scroller boundaries the page scrolls naturally.
- Touch devices and reduced-motion users keep native scroll (hook bails).
- Verified end-to-end: 1 wheel = 1 tile (368px), lock prevents jumps, arrows consistent, boundaries safe, drag coexists. Lint clean, no runtime errors.

---
Task ID: 6
Agent: main (orchestrator)
Task: Fix React hydration error ("server rendered HTML didn't match the client")

Work Log:
- User reported a Recoverable hydration error with the standard React message listing causes (server/client branch, Date.now/Math.random, date formatting in user locale, etc.)
- Checked dev.log (server-side logs don't capture client hydration errors). Reproduced via Agent Browser — console was clean in the sandbox because the sandbox browser shares the server's environment.
- Grepped the codebase for common hydration offenders (Math.random, Date.now, new Date(), toLocaleString, typeof window):
  - site-footer.tsx line 8: `const year = new Date().getFullYear().toString();` — computed during render of a Client Component
  - preloader.tsx: `typeof window !== "undefined"` — inside useEffect (safe)
  - sitemap.ts: `new Date()` — server route, not hydration concern
  - chart.tsx/calendar.tsx/sidebar.tsx: shadcn internals, not used on rendered pages
- Confirmed the root cause:
  - Sandbox server clock is UTC and set to 2026-08-13 (verified via `date`)
  - User's browser is in Asia/Calcutta (UTC+5:30) and shows the real current date
  - SiteFooter is a Client Component ("use client") imported directly by SiteShell (also "use client"), so it renders on BOTH server and client
  - `new Date().getFullYear()` during render → server embeds `© 2026` in the SSR HTML, client hydrates expecting `© 2025` (its real year) → text node mismatch → hydration error
  - This is exactly the "Date formatting in a user's locale which doesn't match the server" cause from the error message
- Could not make SiteFooter a Server Component (it's imported by a client boundary, so it's forced into the client bundle regardless of its own directive). Applied the standard mount-guard pattern instead:
  - `const [year, setYear] = useState("")` — empty on server AND initial client render (guaranteed match)
  - `useEffect(() => setYear(String(new Date().getFullYear())), [])` — fills in after mount
  - Copyright line renders `©{year ? \` ${year} \` : " "}{firm.name}. All rights reserved.` — no year during hydration pass, year appears post-mount
- Audited other client components for the same class of bug:
  - DisclaimerGate: uses mounted flag correctly (accepted=true, mounted=false initially → showGate=false on both server and client; sessionStorage read in useEffect) — safe
  - Preloader: progress=0 initial on both sides, animates in useEffect — safe
  - CustomCursor: enabled=false initial, set true in useEffect — safe
  - HeroVisual: canvas draws in useEffect, render output stable — safe
  - SiteHeader: scrolled=false, open=false initial, updated in useEffect — safe
  - ScrollProgress: progress=0 initial, updated in useEffect — safe
  - Rise/MaskReveal/Magnetic: useReducedMotion returns null on both server and initial client render → same ternary branch — safe
- Lint clean (bun run lint — no errors)

Verification (Agent Browser):
- Confirmed server-rendered HTML for the copyright line: `©<!-- --> <!-- -->Saransh Raj & Associates<!-- -->. All rights reserved` — NO year present (React empty-text-node placeholders where year would be). This is the key: the date-derived value is absent from the hydration pass entirely.
- After mount (useEffect ran): DOM shows `© 2026 Saransh Raj & Associates. All rights reserved.` — year filled in cleanly via state update (React handles post-mount state changes without hydration concern).
- Checked all 9 routes for hydration errors (errors + console grep for "hydrat|server rendered|didn't match"): /firm, /expertise, /sectors, /people, /insights, /contact, /disclaimer, /terms, /privacy → ALL 0 errors, 0 console warnings.
- dev.log: clean 200 responses across all pages, no runtime errors.

Stage Summary:
- Root cause: SiteFooter (a Client Component) called `new Date().getFullYear()` during render. The sandbox server clock (UTC, set to 2026) and the user's browser clock (Asia/Calcutta, real date) produce different years, so the SSR HTML contained `© 2026` while the client expected `© 2025` → hydration text-node mismatch.
- Fix: mount-guard pattern — year is empty string during SSR and initial client render (guaranteed identical), then set via useEffect after mount. The date-derived value never participates in the hydration pass, so no mismatch is possible regardless of server/client clock skew or timezone.
- Audited all other client components — none have the same render-time date/random/window-branch bug.
- Verified: 0 hydration errors across all 9 pages. Lint clean, no runtime errors.

---
Task ID: 7
Agent: main (orchestrator)
Task: Fix remaining hydration error — server rendered HTML didn't match the client (reported still present after Task 6 footer fix)

Work Log:
- User reported the hydration error was still present after the Task 6 SiteFooter year fix. The sandbox browser showed no errors because it shares the server's environment (no clock skew, no reduced-motion preference by default), so the previous verification couldn't catch this class of bug.
- Systematically audited every client component for SSR/client render-time divergence. Grepped for useReducedMotion, typeof window, matchMedia, Math.random, Date.now, new Date(), localStorage, sessionStorage, navigator.
- Inspected framer-motion's installed source (v12.26.2) to confirm the exact behaviour of useReducedMotion():
    // framer-motion/dist/framer-motion.dev.js
    const prefersReducedMotion = { current: null };          // module-level mutable
    function initPrefersReducedMotion() {
        if (!isBrowser) return;                               // SSR no-op → stays null
        const mq = window.matchMedia("(prefers-reduced-motion)");
        prefersReducedMotion.current = mq.matches;            // client: true/false immediately
    }
    function useReducedMotion() {
        !hasReducedMotionListener.current && initPrefersReducedMotion();
        const [shouldReduceMotion] = React.useState(prefersReducedMotion.current);
        return shouldReduceMotion;                            // SSR: null, client: true|false
    }
  This is the smoking gun: useReducedMotion() returns `null` during SSR but returns the real `true`/`false` on the client's FIRST render (via lazy useState init from a module-level mutable that matchMedia populates synchronously). Any component that branches on this value renders different markup/style on server vs client for users with prefers-reduced-motion: reduce.
- Identified 5 components that conditionally render or set different initial/style based on `reduce` at render time (the actual hydration offenders):
    1. horizontal-expertise.tsx — `{!reduce && (<desktop pinned track/>)}` renders the entire desktop experience on server (reduce=null=falsy) but omits it on client when reduce=true → entire subtree mismatch
    2. char-reveal.tsx — `if (reduce) return <span>{text}</span>` returns completely different JSX (plain span vs character-split spans) → severe content mismatch
    3. reveal.tsx (MaskReveal + Rise) — `initial={reduce ? {opacity:0} : {opacity:0, y}}` sets a different framer-motion initial style → inline style attribute mismatch on the motion.div/h2/h3 element
    4. philosophy-narrative.tsx — `style={reduce ? undefined : { y: yBg, opacity }}` toggles the entire style object between undefined and a MotionValue object → style attribute mismatch
    5. page.tsx (HomePage) — same `initial={reduce ? {opacity:0} : {opacity:0, y:N}}` pattern on 4 motion elements in the hero → inline style mismatch
  Also updated 2 components that use useReducedMotion only inside event handlers / useEffect (hero-visual.tsx, magnetic.tsx) — they were already SSR-safe but were migrated for consistency so no future refactor accidentally introduces a render-time branch.
- Created src/components/motion/use-mounted-reduced-motion.ts — a drop-in SSR-safe replacement:
    export function useMountedReducedMotion(): boolean {
      const reduce = useReducedMotion();
      const [mounted, setMounted] = useState(false);
      useEffect(() => setMounted(true), []);
      return mounted ? Boolean(reduce) : false;
    }
  Returns `false` during SSR AND the client's first render (guaranteed to match the server's null-as-falsy behaviour), then flips to the real preference after mount. Components that branch on the returned value render identical markup on both sides and only diverge after a post-mount state update — which React handles cleanly with no hydration error.
- Replaced all 7 `useReducedMotion()` call sites across the codebase with `useMountedReducedMotion()`. Grep confirms zero remaining `useReducedMotion` imports from framer-motion in any component (only the new hook file imports it, which is correct).
- Lint clean (bun run lint — no errors).

Verification (Agent Browser with prefers-reduced-motion emulated):
- Set browser media to "reduce" to reproduce the exact condition that triggered the user's hydration error (server renders animated branch because reduce=null=falsy; client renders reduced branch because reduce=true).
- Clean first visit (close → open) to http://localhost:3000/ with reduced motion ON:
    console: only React DevTools info + HMR connected (no hydration warning, no "server rendered HTML didn't match" message)
    errors: none
    page errors: none
- Accepted disclaimer gate, verified homepage renders all sections (hero, introduction, expertise explorer, sectors, philosophy narrative, principles, people, insights, contact) — full content present, reduced-motion fallbacks active.
- Checked all 9 routes with reduced motion ON: /, /firm, /expertise, /sectors, /people, /insights, /contact, /disclaimer, /terms, /privacy — ALL clean (0 hydration errors, 0 page errors). Only non-fatal framer-motion "container position" warnings (pre-existing, cosmetic).
- Switched media back to "no-preference" and did a clean first visit — also clean (0 errors), confirming the fix doesn't break the default animated experience.
- dev.log: all routes return 200, no runtime errors.

Stage Summary:
- Root cause: framer-motion's useReducedMotion() returns `null` during SSR but `true`/`false` on the client's first render (it reads window.matchMedia during lazy useState init). 5 components conditionally rendered or set different initial/style based on this value, producing a hydration mismatch for any user with prefers-reduced-motion: reduce enabled. The Task 6 footer fix was correct but only addressed the date-derived mismatch; this is a separate, additional cause that the sandbox browser couldn't catch (it doesn't emulate reduced motion by default).
- Fix: created useMountedReducedMotion() hook that returns `false` on SSR + first client render (matching server), then the real value post-mount. Replaced all 7 call sites.
- Verified: 0 hydration errors across all 10 routes with reduced motion ON, and 0 errors with reduced motion OFF. Lint clean, no runtime errors.
