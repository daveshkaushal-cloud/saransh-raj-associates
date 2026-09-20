import { ScrollProgress } from "./scroll-progress";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { DisclaimerGate } from "./disclaimer-gate";

/**
 * Top-level shell (server component). First-time visitors must acknowledge
 * the entry disclaimer before the website shell is rendered. Legal pages
 * remain directly accessible from the gate.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <DisclaimerGate>
      <ScrollProgress />
      <div className="app-shell">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </DisclaimerGate>
  );
}
