"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footerNav, legalNav } from "@/data/navigation";
import { firm, contact, legalPages } from "@/data/firm";

/**
 * Document-style footer: a colour-blocked colophon with a marquee of
 * practice areas, a contact panel, legal links and a non-solicitation
 * notice. Year is mount-guarded to avoid SSR/client clock mismatch.
 */
export function SiteFooter() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  const palette: { label: string; hex: string }[] = [
    { label: "Electric", hex: "#2457FF" },
    { label: "Vermilion", hex: "#FF493D" },
    { label: "Marigold", hex: "#FFB000" },
    { label: "Jade", hex: "#17B890" },
    { label: "Aubergine", hex: "#673DE6" },
    { label: "Ink", hex: "#0B1020" },
  ];

  return (
    <footer className="mt-auto bg-ink text-porcelain relative overflow-hidden">
      {/* Marquee strip — practice areas as a running editorial header */}
      <div className="relative border-b border-line-on-ink overflow-hidden">
        <div className="flex">
          <div className="marquee-track py-5 md:py-7 shrink-0">
            {Array.from({ length: 2 }).map((_, dup) => (
              <span key={dup} className="inline-flex items-center">
                {["Corporate Advisory", "Commercial Contracts", "Mergers & Acquisitions", "Dispute Resolution", "Regulatory & Compliance", "Insolvency & Recovery"].map((t, i) => (
                  <span key={`${dup}-${i}`} className="inline-flex items-center">
                    <span className="font-display text-3xl md:text-5xl text-porcelain/90 px-5">{t}</span>
                    <span className="inline-block h-1.5 w-1.5 bg-marigold mx-2" aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          .marquee-track {
            display: inline-flex;
            white-space: nowrap;
            will-change: transform;
            animation: footer-marquee 38s linear infinite;
          }
          @keyframes footer-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
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
