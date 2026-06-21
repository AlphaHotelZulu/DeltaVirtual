import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dlva.org",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Delta Virtual",
  description:
    "Delta Virtual (DLVA) is a virtual airline for flight simulation enthusiasts, offering realistic operations, an extensive fleet, major U.S. hubs, and a welcoming aviation community.",
  applicationName: "Delta Virtual",
  keywords: [
    "Delta Virtual",
    "DLVA",
    "virtual airline",
    "flight simulation",
    "flight simulator",
    "virtual aviation",
    "VATSIM",
  ],
  authors: [{ name: "Delta Virtual", url: siteUrl }],
  creator: "Delta Virtual",
  publisher: "Delta Virtual",
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
    siteName: "Delta Virtual",
    title: "Delta Virtual",
    description:
      "Discover Delta Virtual (DLVA), a realistic virtual airline experience for flight simulation enthusiasts.",
    images: [
      {
        url: "/images/home/dal100y-hero.png",
        width: 5120,
        height: 2880,
        alt: "Delta Virtual aircraft approaching an airport",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Virtual",
    description:
      "Discover Delta Virtual (DLVA), a realistic virtual airline experience for flight simulation enthusiasts.",
    images: ["/images/home/dal100y-hero.png"],
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
