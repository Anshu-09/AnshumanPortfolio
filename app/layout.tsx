import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolio.name} — Full-Stack Developer`,
  icons: {
    icon: '/a.svg',
  },
  description: portfolio.bio,
  keywords: ["full-stack developer", "CS undergrad", "KIIT", "React", "Spring Boot", "Next.js"],
  authors: [{ name: portfolio.name }],
  openGraph: {
    title: `${portfolio.name} — Full-Stack Developer`,
    description: portfolio.bio,
    type: "website",
    url: "https://anshuman.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — Full-Stack Developer`,
    description: portfolio.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://anshuman-giri.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="font-sans bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
