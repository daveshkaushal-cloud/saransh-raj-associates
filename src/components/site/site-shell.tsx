import { ScrollProgress } from "./scroll-progress";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

/**
 * Top-level shell (server component). The disclaimer gate has been
 * temporarily removed — the website opens directly without requiring
 * the "I Accept" click. The /disclaimer route and footer "Revisit
 * Disclaimer" link still work for reference.
 *
 * Content renders immediately with opacity:1 — no preloader, no custom
 * cursor, no entrance delay, no route-transition overlay.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <div className="app-shell">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
