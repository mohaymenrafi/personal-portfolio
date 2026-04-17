import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 max-w-4xl mx-auto">
      <p className="font-mono text-teal text-sm md:text-base mb-5 tracking-wide">
        Hi, my name is
      </p>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white-ish leading-tight mb-2">
        Abdullah Rafi.
      </h1>

      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate leading-tight mb-8">
        I build things for the web.
      </h2>

      <p className="text-slate text-lg md:text-xl max-w-xl leading-relaxed mb-12">
        Lead Frontend Engineer with 5+ years of experience building production-grade{" "}
        <span className="text-lightest-slate">React</span> and{" "}
        <span className="text-lightest-slate">TypeScript</span> applications. Specialized in
        large-scale architecture, B2B SaaS, and AI-powered platforms. Currently building{" "}
        <a
          href="https://airwork.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal hover:underline"
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
            "font-mono text-sm border-teal text-teal bg-transparent hover:bg-teal/10 px-7 py-6"
          )}
        >
          Check out my work <FiArrowRight className="ml-2 inline" />
        </a>
        <a
          href="#contact"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "font-mono text-sm text-slate hover:text-teal hover:bg-transparent px-7 py-6"
          )}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
