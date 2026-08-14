"use client";

import { useEffect, useState } from "react";
import { DisclaimerGate } from "./disclaimer-gate";
import { Preloader } from "./preloader";
import { CustomCursor } from "./custom-cursor";
import { ScrollProgress } from "./scroll-progress";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

/**
 * Top-level shell: disclaimer gateway, preloader, custom cursor,
 * scroll progress, header and footer (sticky-footer layout).
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for first paint so the preloader sits on top cleanly.
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <DisclaimerGate>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <div className="app-shell">
        <SiteHeader />
        <main className={ready ? "opacity-100" : "opacity-0"}>{children}</main>
        <SiteFooter />
      </div>
    </DisclaimerGate>
  );
}
