import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LeftSidebar from "@/components/layout/left-sidebar";
import RightSidebar from "@/components/layout/right-sidebar";
import { Toaster } from "@/components/ui/sonner";

const calibre = localFont({
  src: [
    { path: "../public/fonts/Calibre/Calibre-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Calibre/Calibre-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/Calibre/Calibre-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Calibre/Calibre-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Calibre/Calibre-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Calibre/Calibre-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/Calibre/Calibre-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Calibre/Calibre-SemiboldItalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-calibre",
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
  title: "Abdullah Al Mohaymen Rafi — Frontend Engineer",
  description:
    "Lead Frontend Engineer specializing in large-scale React & TypeScript applications, B2B SaaS, and AI-powered platforms.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Bangladesh"],
  authors: [{ name: "Abdullah Al Mohaymen Rafi" }],
  openGraph: {
    title: "Abdullah Al Mohaymen Rafi — Frontend Engineer",
    description:
      "Lead Frontend Engineer specializing in large-scale React & TypeScript applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${calibre.variable} ${sfMono.variable}`}>
      <body
        className="font-sans antialiased min-h-screen"
        style={{ fontFamily: "var(--font-calibre), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <LeftSidebar />
            <RightSidebar />
            <main className="px-6 md:px-12 lg:px-24 xl:px-36">{children}</main>
            <Footer />
            <Toaster richColors closeButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
