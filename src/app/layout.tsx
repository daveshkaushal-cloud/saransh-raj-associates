import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteShell } from "@/components/site/site-shell";

/* Self-hosted, properly-licensed fonts:
 *  - Bodoni Moda  (SIL OFL)        — display headings
 *  - Satoshi      (Fontshare 100)  — body & navigation
 *  - IBM Plex Mono (SIL OFL)       — labels, numbering, metadata
 */
const bodoniModa = localFont({
  src: [
    { path: "../../public/fonts/bodonimoda.ttf", weight: "400 700", style: "normal" },
    { path: "../../public/fonts/bodonimoda-italic.ttf", weight: "400 700", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../../public/fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
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
  themeColor: "#E2E8F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodoniModa.variable} ${satoshi.variable} ${plexMono.variable} antialiased bg-porcelain text-ink font-sans selection:bg-electric selection:text-white`}
      >
        <SiteShell>{children}</SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
