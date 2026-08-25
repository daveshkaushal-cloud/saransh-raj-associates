import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteShell } from "@/components/site/site-shell";

/* Self-hosted, properly-licensed fonts:
 *  - Cormorant Garamond (SIL OFL, via Google Fonts) — display headings
 *  - Manrope            (SIL OFL, via Google Fonts) — body & navigation
 *  - IBM Plex Mono      (SIL OFL, local)              — labels, numbering, metadata
 *
 * All fonts use display:"swap" so content renders immediately and
 * reflows gracefully once the webfont arrives.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../../public/fonts/plexmono-regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/plexmono-medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/plexmono-semibold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/plexmono-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.saranshrajassociates.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saransh Raj & Associates — Corporate & Commercial Law Counsel",
    template: "%s — Saransh Raj & Associates",
  },
  description:
    "Saransh Raj & Associates is a New Delhi-based law firm offering counsel in corporate advisory, commercial contracts, mergers & acquisitions, dispute resolution, regulatory compliance and insolvency.",
  keywords: [
    "Saransh Raj Associates",
    "corporate law firm New Delhi",
    "commercial contracts India",
    "mergers and acquisitions counsel",
    "insolvency and bankruptcy",
    "regulatory compliance India",
  ],
  authors: [{ name: "Saransh Raj & Associates" }],
  applicationName: "Saransh Raj & Associates",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Saransh Raj & Associates — Corporate & Commercial Law Counsel",
    description:
      "A New Delhi-based law firm providing counsel across corporate advisory, commercial contracts, M&A, dispute resolution, regulatory compliance and insolvency.",
    url: siteUrl,
    siteName: "Saransh Raj & Associates",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saransh Raj & Associates",
    description:
      "A New Delhi-based law firm providing counsel across corporate and commercial law.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#F7F1E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${manrope.variable} ${plexMono.variable} antialiased bg-ivory text-charcoal font-sans selection:bg-rose selection:text-white`}
      >
        <SiteShell>{children}</SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
