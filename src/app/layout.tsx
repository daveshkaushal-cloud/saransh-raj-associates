import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteShell } from "@/components/site/site-shell";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
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
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#F5F0E7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${manrope.variable} antialiased bg-ivory text-ink font-sans selection:bg-cobalt/20 selection:text-ink`}
      >
        <SiteShell>{children}</SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
