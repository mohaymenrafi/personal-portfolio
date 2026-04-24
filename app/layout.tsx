import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const sfMono = localFont({
  src: [
    { path: "../public/fonts/SFMono/SFMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/SFMono/SFMono-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/SFMono/SFMono-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/SFMono/SFMono-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/SFMono/SFMono-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/SFMono/SFMono-SemiboldItalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-sf-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mhabdullah.vercel.app"),
  title: {
    default: "Abdullah Al Mohaymen Rafi — Frontend Engineer",
    template: "%s — Rafi",
  },
  description:
    "Lead Frontend Engineer specializing in large-scale React & TypeScript applications, B2B SaaS, and AI-powered platforms.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Bangladesh"],
  authors: [{ name: "Abdullah Al Mohaymen Rafi" }],
  openGraph: {
    title: "Abdullah Al Mohaymen Rafi — Frontend Engineer",
    description:
      "Lead Frontend Engineer specializing in large-scale React & TypeScript applications, B2B SaaS, and AI-powered platforms.",
    url: "https://mhabdullah.vercel.app",
    siteName: "Abdullah Al Mohaymen Rafi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Mohaymen Rafi — Frontend Engineer",
    description:
      "Lead Frontend Engineer specializing in large-scale React & TypeScript applications, B2B SaaS, and AI-powered platforms.",
    creator: "@mohaymenrafi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${sfMono.variable}`}>
      <body
        className="font-sans antialiased min-h-screen"
        style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Toaster richColors closeButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
