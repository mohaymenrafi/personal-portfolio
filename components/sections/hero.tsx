import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 max-w-4xl mx-auto">
      <p className="font-[family-name:var(--font-sf-mono)] text-[var(--color-teal)] text-sm md:text-base mb-5 tracking-wide">
        Hi, my name is
      </p>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-[var(--color-white-ish)] leading-tight mb-2">
        Abdullah Rafi.
      </h1>

      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[var(--color-slate)] leading-tight mb-8">
        I build things for the web.
      </h2>

      <p className="text-[var(--color-slate)] text-lg md:text-xl max-w-xl leading-relaxed mb-12">
        Lead Frontend Engineer with 5+ years of experience building production-grade{" "}
        <span className="text-[var(--color-lightest-slate)]">React</span> and{" "}
        <span className="text-[var(--color-lightest-slate)]">TypeScript</span> applications. Specialized in
        large-scale architecture, B2B SaaS, and AI-powered platforms. Currently building{" "}
        <a
          href="https://airwork.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-teal)] hover:underline"
        >
          Airwork AI
        </a>
        .
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "font-[family-name:var(--font-sf-mono)] text-sm border-[var(--color-teal)] text-[var(--color-teal)] bg-transparent hover:bg-[var(--color-teal)]/10 px-7 py-6"
          )}
        >
          Check out my work <FiArrowRight className="ml-2 inline" />
        </a>
        <a
          href="#contact"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "font-[family-name:var(--font-sf-mono)] text-sm text-[var(--color-slate)] hover:text-[var(--color-teal)] hover:bg-transparent px-7 py-6"
          )}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
