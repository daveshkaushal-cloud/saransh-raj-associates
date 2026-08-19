"use client";

import { DisclaimerGate } from "./disclaimer-gate";
import { ScrollProgress } from "./scroll-progress";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

/**
 * Top-level shell: disclaimer gateway, scroll progress, header and
 * footer (sticky-footer layout). Content renders immediately with
 * opacity:1 — no preloader, no custom cursor, no entrance delay.
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
