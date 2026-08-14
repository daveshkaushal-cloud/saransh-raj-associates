"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footerNav, legalNav } from "@/data/navigation";
import { firm, contact, legalPages } from "@/data/firm";
import { practiceAreas } from "@/data/practice-areas";
import { accentHex } from "@/lib/accents";

/**
 * Document-style footer: a colour-blocked colophon with a complete
 * practice-areas index (each marked with its own accent colour),
 * a contact panel, legal links and a non-solicitation notice.
 * Year is mount-guarded to avoid SSR/client clock mismatch.
 */
export function SiteFooter() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  const palette: { label: string; hex: string }[] = [
    { label: "Electric", hex: accentHex.electric },
    { label: "Vermilion", hex: accentHex.vermilion },
    { label: "Marigold", hex: accentHex.marigold },
    { label: "Jade", hex: accentHex.jade },
    { label: "Aubergine", hex: accentHex.aubergine },
    { label: "Ink", hex: accentHex.ink },
  ];

  return (
    <footer className="mt-auto bg-ink text-porcelain relative overflow-hidden">
      {/* Practice-areas index — complete, non-truncated editorial header.
          Each area is marked with its own accent colour, reinforcing the
          "Arguments in Colour" identity. All six chapters are always visible. */}
      <div className="relative border-b border-line-on-ink">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-8 md:py-12">
          <div className="flex items-baseline justify-between gap-6 mb-6 md:mb-8">
            <p className="mono-label text-porcelain/50">
              Practice Areas
            </p>
            <p className="mono-num text-porcelain/40">
              06 chapters
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6">
            {practiceAreas.map((area) => {
              // The "ink" accent matches the footer background, so render it
              // as a porcelain-outlined hollow square — the foundation chapter.
              const isInk = area.accent === "ink";
              return (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group inline-flex items-center gap-3"
                  >
                    <span
                      className={
                        "inline-block h-3 w-3 shrink-0 transition-transform duration-300 group-hover:scale-125 " +
                        (isInk ? "border-2 border-porcelain" : "")
                      }
                      style={
                        isInk
                          ? { background: "transparent" }
                          : { background: accentHex[area.accent] }
                      }
                      aria-hidden="true"
                    />
                    <span className="font-display text-2xl md:text-4xl text-porcelain/90 leading-none transition-colors duration-300 group-hover:text-porcelain">
                      {area.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Palette swatches — colour identity strip */}
      <div className="relative grid grid-cols-6">
        {palette.map((p) => (
          <div key={p.label} className="h-2" style={{ background: p.hex }} aria-hidden="true" title={p.label} />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand + descriptor */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative grid place-items-center h-9 w-9 bg-porcelain text-ink" aria-hidden="true">
                <span className="font-display text-lg">S</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl">Saransh Raj</span>
                <span className="mono-label text-porcelain/55 mt-1">&amp; Associates</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-porcelain/65">
              {firm.summary}
            </p>
            <p className="mt-5 mono-label text-porcelain/45">
              {firm.basedIn} · Serving across {firm.servesAcross}
            </p>
          </div>

          {/* Chapter index */}
          <div className="md:col-span-3">
            <p className="mono-label text-porcelain/45 mb-5">Chapters</p>
            <ul className="space-y-2.5">
              {footerNav.map((item, i) => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex items-baseline gap-3 text-[0.92rem] text-porcelain/75 hover:text-porcelain transition-colors">
                    <span className="mono-num text-[0.65rem] text-porcelain/35 group-hover:text-marigold transition-colors">
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
            <p className="mono-label text-porcelain/45 mb-5">Office</p>
            <address className="not-italic space-y-3 text-sm text-porcelain/75">
              <p className="leading-relaxed">
                {contact.address.line1}<br />
                {contact.address.line2}<br />
                {contact.address.country}
              </p>
              <p>
                <a href={contact.phoneHref} className="link-underline hover:text-porcelain">{contact.phone}</a>
              </p>
              <p>
                <a href={contact.emailHref} className="link-underline hover:text-porcelain break-all">{contact.email}</a>
              </p>
              <p className="text-porcelain/55">{contact.hours}</p>
            </address>
          </div>
        </div>

        {/* Legal + meta */}
        <div className="mt-14 pt-6 border-t border-line-on-ink flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="mono-label text-porcelain/55 hover:text-porcelain transition-colors">
                {item.label}
              </Link>
            ))}
            <Link href={legalPages.disclaimer.path} className="mono-label text-porcelain/55 hover:text-porcelain transition-colors">
              Revisit Disclaimer
            </Link>
          </div>
          <p className="mono-label text-porcelain/40">
            ©{year ? ` ${year} ` : " "}{firm.name}. All rights reserved.
          </p>
        </div>

        <p className="mt-6 text-[0.68rem] leading-relaxed text-porcelain/35 max-w-3xl">
          This website is informational and does not constitute legal advice or an
          invitation to create a lawyer-client relationship. The Bar Council of
          India does not permit advertisement or solicitation by advocates in any
          form or manner.
        </p>
      </div>
    </footer>
  );
}
