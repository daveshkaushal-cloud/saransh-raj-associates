"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/navigation";
import { firm } from "@/data/firm";

/**
 * Editorial site header — a thin document-style top rule.
 *  - Left: wordmark
 *  - Centre/right: section index with mono numbers (01–07)
 *  - A folio-style "chapter" indicator on the right
 *  - Mobile: full-screen chapter index overlay
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const activeIndex = primaryNav.findIndex(
    (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
  );

  return (
    <header
      className={`sticky top-0 z-[110] border-b transition-colors duration-300 ${
        scrolled
          ? "bg-porcelain/90 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label={`${firm.name} — home`}>
            <span className="grid place-items-center h-7 w-7 bg-ink text-porcelain" aria-hidden="true">
              <span className="font-display text-sm leading-none">S</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.05rem] md:text-[1.15rem] text-ink tracking-tight leading-none">
                Saransh Raj
              </span>
              <span className="mono-label text-ink/55 mt-1 hidden sm:block">
                &amp; Associates · New Delhi
              </span>
            </span>
          </Link>

          {/* Desktop chapter index */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-0">
            {primaryNav.map((item, i) => {
              const active = activeIndex === i;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-baseline gap-2 px-3.5 py-2 transition-colors ${
                    active ? "text-ink" : "text-ink/55 hover:text-ink"
                  }`}
                >
                  <span className="mono-num text-[0.6rem] text-ink/35 group-hover:text-electric transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.82rem] font-medium tracking-tight">{item.label}</span>
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-px h-[2px] bg-electric origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right folio + mobile toggle */}
          <div className="flex items-center gap-3">
            <span className="mono-label text-ink/45 hidden md:inline">
              {activeIndex >= 0
                ? `CH. ${String(activeIndex + 1).padStart(2, "0")}`
                : "INDEX"}
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-6">
                <span className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`absolute left-0 bottom-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile chapter overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-ink text-porcelain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pt-20 pb-10 overflow-y-auto">
          <p className="mono-label text-porcelain/40 mb-6">Index — Chapters</p>
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((item, i) => {
              const active = activeIndex === i;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline justify-between border-b border-line-on-ink py-5"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="mono-num text-[0.7rem] text-porcelain/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-display text-4xl md:text-5xl transition-colors ${active ? "text-marigold" : "text-porcelain group-hover:text-marigold"}`}>
                      {item.label}
                    </span>
                  </span>
                  <svg className="h-5 w-5 text-porcelain/30 transition-transform group-hover:translate-x-1 group-hover:text-marigold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-10">
            <p className="mono-label text-porcelain/40 mb-2">Office</p>
            <p className="text-sm text-porcelain/75">G-14, LGF, Kalkaji, New Delhi – 110019</p>
            <p className="text-sm text-porcelain/60 mt-1">Mon – Sat · 10:00 – 19:00 IST</p>
          </div>
        </div>
      </div>
    </header>
  );
}
