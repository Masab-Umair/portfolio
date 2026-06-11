import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import MouseFollower from "./components/MouseFollower";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masab Umair — Full Stack Developer & Creative Lead",
  description:
    "I build high-performance web applications and custom software architectures that help international brands and local businesses scale smoothly.",
  authors: [{ name: "Masab Umair" }],
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Web Development",
    "Creative Lead",
    "Pakistan",
  ],
  openGraph: {
    title: "Masab Umair — Full Stack Developer & Creative Lead",
    description:
      "I build high-performance web applications and custom software architectures.",
    type: "website",
    url: "https://masab.vercel.app",
    siteName: "Masab Umair Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-zinc-950 text-zinc-50 antialiased`}
      >
        <MouseFollower />
        <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-zinc-900/20 via-zinc-950 to-zinc-950" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
