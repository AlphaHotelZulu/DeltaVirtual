import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Virtual",
  description:
    "Delta Virtual provides an immersive virtual airline experience for aviators, aspiring pilots, and aviation enthusiasts.",
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
