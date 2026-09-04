"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const STORAGE_KEY = "sra_disclaimer_accepted_v2";

/**
 * Client component for the disclaimer gate interaction.
 * Renders the disclaimer gate (visible immediately in SSR HTML). Handles:
 *  - Checkbox state (unchecked → button disabled; checked → enabled).
 *  - Proceed button: sets cookie + localStorage, hides gate immediately.
 *  - Legal pages bypass the gate.
 */
export function DisclaimerGateClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [proceeded, setProceeded] = useState(false);
  const pathname = usePathname();

  const isLegalPage =
    pathname === "/disclaimer" ||
    pathname === "/terms" ||
    pathname === "/privacy";

  if (isLegalPage || proceeded) {
    return <>{children}</>;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[200] bg-paper text-ink overflow-y-auto"
    >
      <DisclaimerContent
        onAgree={() => {
          try {
            const expires = new Date(
              Date.now() + 365 * 24 * 60 * 60 * 1000
            ).toUTCString();
            document.cookie = `${STORAGE_KEY}=1; expires=${expires}; path=/; SameSite=Lax`;
            localStorage.setItem(STORAGE_KEY, "1");
          } catch {
            /* storage unavailable */
          }
          setProceeded(true);
        }}
      />
    </div>
  );
}

function DisclaimerContent({ onAgree }: { onAgree: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative w-full min-h-full flex flex-col">
      {/* Top accent rule — aged copper */}
      <div className="h-1.5 shrink-0 bg-copper" />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top bar */}
        <div className="px-6 md:px-12 pt-8 md:pt-10 flex items-center justify-between border-b border-line pb-5">
          <span className="mono-label">Saransh Raj &amp; Associates</span>
          <span className="mono-label text-stone-dark">Cover Sheet · 01</span>
        </div>

        <div className="flex-1 flex items-center px-6 md:px-12 py-10">
          <div className="max-w-3xl mx-auto w-full">
            <p className="mono-label text-copper mb-5">Please read carefully</p>
            <h1
              id="disclaimer-title"
              className="display-2 text-ink mb-8 max-w-[16ch]"
            >
              Before you enter
            </h1>

            <div className="space-y-5 text-charcoal text-[15px] md:text-base leading-relaxed">
              <p>
                This website is the online presence of{" "}
                <span className="text-ink">Saransh Raj &amp; Associates</span>,
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
              <p className="text-stone-dark text-sm">
                The Bar Council of India does not permit advertisement or
                solicitation by advocates in any form or manner. By proceeding,
                you acknowledge that you have read and understood this disclaimer
                and the{" "}
                <Link href="/terms" className="link-underline text-ink">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="link-underline text-ink">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Checkbox */}
            <div className="mt-9">
              <label
                htmlFor="disclaimer-ack"
                className="flex items-start gap-3 cursor-pointer select-none group"
              >
                <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                  <input
                    id="disclaimer-ack"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    className="h-5 w-5 cursor-pointer accent-copper opacity-0 absolute inset-0"
                  />
                  <span
                    className={`block h-5 w-5 border transition-colors ${
                      checked
                        ? "border-copper bg-copper"
                        : "border-line-strong group-hover:border-copper"
                    }`}
                  />
                  {checked && (
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute h-5 w-5 text-white pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-charcoal leading-snug">
                  I have read and understood the disclaimer and confirm that I
                  wish to enter the website.
                </span>
              </label>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onAgree}
                disabled={!checked}
                className="btn-magnetic group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-oxblood text-ivory text-sm font-semibold tracking-wide disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-ink transition-colors duration-150"
              >
                <span>I Acknowledge and Proceed</span>
                <svg
                  className="h-4 w-4 transition-transform duration-150 group-enabled:group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Link
                href="/disclaimer"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-line-strong text-charcoal text-sm font-medium hover:border-copper hover:text-copper transition-colors duration-150"
              >
                Read full disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 pb-8 border-t border-line pt-5">
          <p className="mono-label text-stone-dark">
            If you do not agree with the above, please refrain from accessing this website.
          </p>
        </div>
      </div>
    </div>
  );
}
