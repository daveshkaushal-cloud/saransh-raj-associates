"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footerNav, legalNav } from "@/data/navigation";
import { firm, contact, legalPages } from "@/data/firm";

export function SiteFooter() {
  // Compute the year only after mount. The sandbox server clock and the
  // visitor's browser clock can disagree (different timezones, or a skewed
  // server date), and calling `new Date().getFullYear()` during render would
  // embed one value in the SSR HTML and another during client hydration,
  // triggering a hydration error. Empty on the first client render so it
  // matches the server, then filled in post-mount.
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="mt-auto bg-ink text-ivory relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mesh-grad" />
      <div className="pointer-events-none absolute inset-0 grain" />

      {/* Marquee strip */}
      <div className="relative border-b border-ivory/12 overflow-hidden marquee-paused">
        <div className="marquee-track py-6 md:py-8">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="inline-flex items-center">
              {[
                "Corporate Advisory",
                "Commercial Contracts",
                "Mergers & Acquisitions",
                "Dispute Resolution",
                "Regulatory & Compliance",
                "Insolvency & Recovery",
              ].map((t, i) => (
                <span key={`${dup}-${i}`} className="inline-flex items-center">
                  <span className="font-display text-4xl md:text-6xl text-ivory/85 px-6">
                    {t}
                  </span>
                  <span className="inline-block h-2 w-2 rounded-full bg-vermilion mx-2" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative grid place-items-center h-10 w-10 bg-ivory text-ink">
                <span className="font-display text-xl">S</span>
                <span className="absolute -right-1 -bottom-1 h-2.5 w-2.5 bg-vermilion" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl">Saransh Raj</span>
                <span className="text-[0.62rem] font-sans tracking-[0.28em] uppercase text-ivory/55 mt-1">
                  &amp; Associates
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/65">
              {firm.summary}
            </p>
            <p className="mt-5 text-[0.7rem] font-sans uppercase tracking-[0.22em] text-ivory/45">
              {firm.basedIn} · Serving across {firm.servesAcross}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="eyebrow text-ivory/50 mb-5">Navigate</p>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.92rem] text-ivory/75 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="eyebrow text-ivory/50 mb-5">Office</p>
            <address className="not-italic space-y-3 text-sm text-ivory/75">
              <p className="leading-relaxed">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.country}
              </p>
              <p>
                <a
                  href={contact.phoneHref}
                  className="link-underline hover:text-ivory"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={contact.emailHref}
                  className="link-underline hover:text-ivory break-all"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-ivory/55">{contact.hours}</p>
            </address>
          </div>
        </div>

        {/* Legal + meta */}
        <div className="mt-14 pt-6 border-t border-ivory/12 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.78rem] text-ivory/55 hover:text-ivory transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={legalPages.disclaimer.path}
              className="text-[0.78rem] text-ivory/55 hover:text-ivory transition-colors"
            >
              Revisit Disclaimer
            </Link>
          </div>
          <p className="text-[0.72rem] text-ivory/40">
            ©{year ? ` ${year} ` : " "}{firm.name}. All rights reserved.
          </p>
        </div>

        <p className="mt-6 text-[0.68rem] leading-relaxed text-ivory/35 max-w-3xl">
          This website is informational and does not constitute legal advice or an
          invitation to create a lawyer-client relationship. The Bar Council of
          India does not permit advertisement or solicitation by advocates in any
          form or manner.
        </p>
      </div>
    </footer>
  );
}
