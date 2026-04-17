"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [active, setActive] = useState(experiences[0].company);
  const current = experiences.find((e) => e.company === active)!;

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto">
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-lightest-slate text-2xl md:text-3xl font-semibold whitespace-nowrap">
          <span className="text-teal mr-2 text-xl">02.</span>
          Where I&apos;ve Worked
        </h2>
        <div className="h-px bg-lightest-navy flex-1" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">

        {/* Mobile: select dropdown */}
        <div className="md:hidden">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full bg-light-navy border border-lightest-navy text-lightest-slate font-mono text-sm rounded px-3 py-2.5 outline-none focus:border-teal"
          >
            {experiences.map((exp) => (
              <option key={exp.company} value={exp.company}>
                {exp.company}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop: vertical tab list */}
        <div className="hidden md:flex flex-col border-l border-lightest-navy shrink-0">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              onClick={() => setActive(exp.company)}
              className={`font-mono text-sm px-5 py-3 text-left whitespace-nowrap border-l-2 transition-all -ml-px
                ${active === exp.company
                  ? "text-teal border-teal bg-lightest-navy/50"
                  : "text-slate border-transparent hover:text-teal hover:bg-lightest-navy/30"
                }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-lightest-slate text-xl font-semibold">
              {current.title}{" "}
              <span className="text-teal">@ {current.company}</span>
            </h3>
            <p className="font-mono text-xs text-slate mt-1">
              {current.period} · {current.location}
            </p>
          </div>

          <ul className="space-y-3">
            {current.bullets.map((bullet, i) => (
              <li key={i} className="text-slate text-base leading-relaxed flex gap-3">
                <span className="text-teal mt-1 shrink-0">▹</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
