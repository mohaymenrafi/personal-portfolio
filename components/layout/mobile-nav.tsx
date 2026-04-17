"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

export default function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "text-teal hover:bg-teal/10"
          )}
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-72 bg-light-navy border-lightest-navy flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-lightest-slate hover:text-teal transition-colors flex flex-col items-center gap-1"
              >
                <span className="text-teal text-xs">0{i + 1}.</span>
                {label}
              </a>
            ))}
            <a
              href="/Resume_Abdullah_Al_Mohaymen_Rafi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "mt-4 font-mono text-xs border-teal text-teal bg-transparent hover:bg-teal/10"
              )}
            >
              Resume
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
