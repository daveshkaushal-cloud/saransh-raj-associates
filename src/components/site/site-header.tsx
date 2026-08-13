"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/navigation";
import { firm } from "@/data/firm";

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

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-[110] transition-colors duration-300 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${firm.name} — home`}
          >
            <Logomark />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[1.15rem] md:text-[1.35rem] text-ink tracking-tight">
                Saransh Raj
              </span>
              <span className="text-[0.6rem] md:text-[0.65rem] font-sans tracking-[0.28em] uppercase text-ink/55 mt-0.5">
                &amp; Associates
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-[0.82rem] font-medium tracking-wide transition-colors ${
                    active ? "text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-ink origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative z-50 flex h-11 w-11 items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-10 overflow-y-auto">
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((item, i) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline justify-between border-b border-line py-5"
                  style={{
                    transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  }}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-sans text-[0.7rem] tabular-nums text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-4xl transition-colors ${
                        active ? "text-cobalt" : "text-ink group-hover:text-cobalt"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <svg
                    className="h-5 w-5 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-cobalt"
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
            <p className="eyebrow text-ink/50 mb-2">Office</p>
            <p className="text-sm text-ink/75">G-14, LGF, Kalkaji, New Delhi – 110019</p>
            <p className="text-sm text-ink/75 mt-1">Monday – Saturday · 10:00 – 19:00</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Logomark() {
  return (
    <span
      className="relative grid place-items-center h-9 w-9 md:h-10 md:w-10 bg-ink text-ivory"
      aria-hidden="true"
    >
      <span className="font-display text-lg md:text-xl leading-none">S</span>
      <span className="absolute -right-1 -bottom-1 h-2.5 w-2.5 bg-vermilion" />
    </span>
  );
}
