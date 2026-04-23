"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import MobileNav from "./mobile-nav";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-teal font-mono text-lg font-semibold hover:opacity-80 transition-opacity"
      >
        rafi.
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map(({ label, href }, i) => {
          const isExternal = href.startsWith('#');
          const Tag = isExternal ? 'a' : Link;
          return (
            <Tag
              key={label}
              href={href}
              className="font-mono text-sm text-slate hover:text-teal transition-colors"
            >
              <span className="text-teal mr-1">0{i + 1}.</span>
              {label}
            </Tag>
          );
        })}
        <a
          href="https://tinyurl.com/46e8rzvb"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "font-mono text-xs border-teal text-teal bg-transparent hover:bg-teal/10",
          )}
        >
          Resume
        </a>
        <ThemeToggle />
      </nav>

      {/* Mobile nav */}
      <div className="flex items-center gap-1 md:hidden">
        <ThemeToggle />
        <MobileNav navLinks={navLinks} />
      </div>
    </header>
  );
}
