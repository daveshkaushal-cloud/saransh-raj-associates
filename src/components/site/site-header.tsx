"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/navigation";
import { firm } from "@/data/firm";

/**
 * Editorial site header — warm ivory, sticky on scroll, with a
 * full-screen overlay menu on mobile.
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeIndex = primaryNav.findIndex(
    (item) =>
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href))
  );

  return (
    <header
      className={`sticky top-0 z-[110] border-b transition-colors duration-300 ${
        scrolled
          ? "bg-paper border-line"
          : "bg-paper border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex h-16 md:h-[72px] items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${firm.name} — home`}
          >
            <span
              className="grid place-items-center h-7 w-7 bg-oxblood text-ivory"
              aria-hidden="true"
            >
              <span className="font-display text-sm leading-none">S</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.1rem] md:text-[1.2rem] text-ink tracking-tight leading-none">
                Saransh Raj
              </span>
              <span className="mono-label text-stone-dark mt-1 hidden sm:block">
                &amp; Associates · New Delhi
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-0"
          >
            {primaryNav.map((item, i) => {
              const active = activeIndex === i;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-baseline gap-2 px-3.5 py-2 transition-colors ${
                    active ? "text-ink" : "text-charcoal hover:text-ink"
                  }`}
                >
                  <span className="mono-num text-[0.8125rem] text-stone-dark group-hover:text-copper transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium tracking-tight">
                    {item.label}
                  </span>
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-px h-[2px] bg-copper origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3">
            <span className="mono-label text-stone-dark hidden md:inline">
              {activeIndex >= 0
                ? `INDEX ${String(activeIndex + 1).padStart(2, "0")}`
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

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-paper text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pt-20 pb-10 overflow-y-auto">
          <p className="mono-label text-stone-dark mb-6">Index</p>
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((item, i) => {
              const active = activeIndex === i;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline justify-between border-b border-line py-5"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="mono-num text-[0.7rem] text-stone-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-4xl md:text-5xl transition-colors ${
                        active ? "text-rose" : "text-ink group-hover:text-copper"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <svg
                    className="h-5 w-5 text-stone-dark transition-transform group-hover:translate-x-1 group-hover:text-rose"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-10">
            <p className="mono-label text-stone-dark mb-2">Office</p>
            <p className="text-sm text-charcoal">
              {contact_address_line1}<br />
              {contact_address_line2}
            </p>
            <p className="text-sm text-stone-dark mt-1">
              Mon – Sat · 10:00 – 19:00 IST
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

// Inline the address so we don't need to import contact here (keeps the
// component lean and avoids a circular reference in the mobile menu).
const contact_address_line1 = "G-14B, Basement";
const contact_address_line2 = "Kalkaji, New Delhi – 110019";
