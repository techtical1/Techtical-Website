import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { bricolageGrotesque, instrumentSerif, jetBrainsMono, kalam } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Techtical Solution | Product Design and Development Studio",
    template: "%s | Techtical Solution",
  },
  description:
    "Techtical Solution designs apps, websites, SaaS platforms, and digital products founders can ship with clarity.",
  metadataBase: new URL("https://techtical.com"),
  keywords: [
    "Techtical Solution",
    "product design studio",
    "Next.js development",
    "SaaS design",
    "UX audit",
    "MVP sprint",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Techtical Solution | Products Founders Can Ship",
    description:
      "Apps, websites, and digital products that look right, work right, and help businesses grow.",
    url: "https://techtical.com",
    siteName: "Techtical Solution",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techtical Solution | Products Founders Can Ship",
    description:
      "Apps, websites, and digital products that look right, work right, and help businesses grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} ${kalam.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
