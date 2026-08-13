"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const STORAGE_KEY = "sra_disclaimer_accepted_v1";

/**
 * Mandatory full-screen disclaimer gateway.
 * - Shows before first entry to the website.
 * - Requires active "I Agree" selection.
 * - Remembers acceptance for the browser session.
 * - Provides a link to revisit the full disclaimer.
 */
export function DisclaimerGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    try {
      const v = sessionStorage.getItem(STORAGE_KEY);
      setAccepted(v === "1");
    } catch {
      setAccepted(false);
    }
  }, []);

  // Allow direct deep-links to legal pages without the gate
  const isLegalPage =
    pathname === "/disclaimer" ||
    pathname === "/terms" ||
    pathname === "/privacy";

  const showGate = mounted && !accepted && !isLegalPage;

  if (showGate) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        className="fixed inset-0 z-[200] flex items-center justify-center bg-ink text-ivory"
      >
        <DisclaimerContent
          onAgree={() => {
            try {
              sessionStorage.setItem(STORAGE_KEY, "1");
            } catch {}
            setAccepted(true);
          }}
        />
      </div>
    );
  }

  return <>{children}</>;
}

function DisclaimerContent({ onAgree }: { onAgree: () => void }) {
  const [tick, setTick] = useState(false);

  return (
    <div className="relative w-full h-full overflow-y-auto">
      {/* animated colour field */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mesh-grad" />
      <div className="pointer-events-none absolute inset-0 grain" />
      <div className="relative z-10 min-h-full flex flex-col">
        <div className="px-6 md:px-12 pt-8 md:pt-10 flex items-center justify-between">
          <span className="eyebrow text-ivory/60">Saransh Raj &amp; Associates</span>
          <span className="eyebrow text-ivory/40">Informational Gateway</span>
        </div>

        <div className="flex-1 flex items-center px-6 md:px-12 py-10">
          <div className="max-w-3xl mx-auto w-full">
            <p className="eyebrow text-mint mb-5">Please read carefully</p>
            <h1
              id="disclaimer-title"
              className="display-2 text-ivory mb-8"
            >
              Before you enter
            </h1>

            <div className="space-y-5 text-ivory/75 text-[15px] md:text-base leading-relaxed font-sans">
              <p>
                This website is the online presence of{" "}
                <span className="text-ivory">Saransh Raj &amp; Associates</span>,
                a law firm based in New Delhi, India. It has been prepared and is
                maintained solely for informational purposes.
              </p>
              <p>
                By entering this website, you confirm that you are accessing it
                voluntarily and on your own initiative. The website does not
                solicit work or employment, does not advertise or offer legal
                services, and does not constitute legal advice. Nothing contained
                here should be construed as an invitation to create a
                lawyer-client relationship. A lawyer-client relationship will be
                formed only upon a formal engagement with the firm.
              </p>
              <p>
                The content here is not intended to be relied upon for any legal
                decision. You should seek appropriate professional advice before
                acting on any information presented. The firm accepts no liability
                for any reliance placed on this website.
              </p>
              <p className="text-ivory/55 text-sm">
                The Bar Council of India does not permit advertisement or
                solicitation by advocates in any form or manner. By proceeding,
                you acknowledge that you have read and understood this disclaimer
                and the{" "}
                <Link
                  href="/terms"
                  className="link-underline text-ivory"
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="link-underline text-ivory"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <label className="mt-9 flex items-start gap-3 cursor-pointer select-none group">
              <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                <input
                  type="checkbox"
                  checked={tick}
                  onChange={(e) => setTick(e.target.checked)}
                  className="peer sr-only"
                />
                <span className="block h-5 w-5 border border-ivory/40 transition-colors peer-checked:border-mint" />
                {tick && (
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute h-5 w-5 text-mint"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-ivory/75 leading-snug">
                I have read and understood the disclaimer and confirm that I wish
                to enter the website.
              </span>
            </label>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onAgree}
                disabled={!tick}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ivory text-ink text-sm font-semibold tracking-wide disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-mint transition-colors duration-300"
              >
                <span>I Agree &amp; Enter</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-enabled:group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <Link
                href="/disclaimer"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-ivory/30 text-ivory/80 text-sm font-medium hover:border-ivory hover:text-ivory transition-colors duration-300"
              >
                Read full disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 pb-8">
          <p className="text-[11px] text-ivory/40">
            If you do not agree with the above, please refrain from accessing this
            website.
          </p>
        </div>
      </div>
    </div>
  );
}
