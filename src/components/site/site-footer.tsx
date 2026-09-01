"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footerNav, legalNav } from "@/data/navigation";
import { firm, contact } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";

/**
 * Document-style footer on warm beige: a colour-blocked colophon with
 * a complete practice-areas index, a contact panel, legal links and a
 * non-solicitation notice. Year is mount-guarded.
 */
export function SiteFooter() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <footer className="mt-auto bg-oxblood text-ivory relative overflow-hidden border-t border-line">
      {/* Practice-areas index */}
      <div className="relative border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-8 md:py-12">
          <div className="flex items-baseline justify-between gap-6 mb-6 md:mb-8">
            <p className="mono-label text-stone">Practice Areas</p>
            <p className="mono-num text-stone">06 practice areas</p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6">
            {practiceAreas.map((area) => {
              return (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group inline-flex items-center gap-3"
                  >
                    <span
                      className="inline-block h-3 w-3 shrink-0 transition-transform duration-300 group-hover:scale-125"
                      style={{ background: accentHex[area.accent] }}
                      aria-hidden="true"
                    />
                    <span className="font-display text-2xl md:text-4xl text-ivory/90 leading-none transition-colors duration-300 group-hover:text-clay">
                      {area.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Aged-copper accent strip */}
      <div className="h-1 bg-copper" />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                className="relative grid place-items-center h-9 w-9 bg-copper text-ivory"
                aria-hidden="true"
              >
                <span className="font-display text-lg">S</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl text-ivory">Saransh Raj</span>
                <span className="mono-label text-stone mt-1">&amp; Associates</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/80">
              {firm.summary}
            </p>
            <p className="mt-5 mono-label text-stone">
              {firm.basedIn} · India
            </p>
          </div>

          {/* Nav index */}
          <div className="md:col-span-3">
            <p className="mono-label text-stone mb-5">Index</p>
            <ul className="space-y-2.5">
              {footerNav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-3 text-[0.92rem] text-ivory/80 hover:text-clay transition-colors"
                  >
                    <span className="mono-num text-[0.65rem] text-stone group-hover:text-clay transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div className="md:col-span-4">
            <p className="mono-label text-stone mb-5">Office</p>
            <address className="not-italic space-y-3 text-sm text-ivory/80">
              <p className="leading-relaxed">
                {contact.address.line1}<br />
                {contact.address.line2}<br />
                {contact.address.country}
              </p>
              <p>
                <a href={contact.phoneHref} className="link-underline hover:text-clay">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={contact.emailHref} className="link-underline hover:text-clay break-all">
                  {contact.email}
                </a>
              </p>
              <p className="text-stone">{contact.hours}</p>
            </address>
          </div>
        </div>

        {/* Legal + meta */}
        <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mono-label text-stone hover:text-clay transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mono-label text-stone">
            ©{year ? ` ${year} ` : " "}
            {firm.name}. All rights reserved.
          </p>
        </div>

        <p className="mt-6 text-[0.72rem] leading-relaxed text-stone max-w-3xl">
          This website is informational and does not constitute legal advice or
          an invitation to create a lawyer-client relationship. The Bar Council
          of India does not permit advertisement or solicitation by advocates in
          any form or manner.
        </p>
      </div>
    </footer>
  );
}
