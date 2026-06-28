import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

const siteUrl = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Delta Virtual Air Lines | DLVA",
    template: "%s | Delta Virtual",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Delta Virtual",
    "DLVA",
    "Delta Virtual Air Lines",
    "virtual airline",
    "non-profit virtual airline",
    "flight simulation",
    "flight simulator",
    "virtual aviation",
    "VATSIM",
  ],
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Virtual Aviation",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Delta Virtual Air Lines | DLVA",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/home/home-hero.png",
        width: 5120,
        height: 2880,
        alt: "Delta Virtual aircraft approaching an airport",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Virtual Air Lines | DLVA",
    description: SITE_DESCRIPTION,
    images: ["/images/home/home-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
