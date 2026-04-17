"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experiences } from "@/data/experience";

export default function Experience() {
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

      <Tabs defaultValue={experiences[0].company} orientation="vertical" className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Tab list */}
        <TabsList className="flex md:flex-col h-auto bg-transparent border-b md:border-b-0 md:border-l border-lightest-navy p-0 gap-0 overflow-x-auto md:overflow-x-visible shrink-0">
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.company}
              value={exp.company}
              className="font-mono text-sm text-slate data-[state=active]:text-teal data-[state=active]:bg-lightest-navy/50 rounded-none border-b-2 md:border-b-0 md:border-l-2 border-transparent data-[state=active]:border-teal px-5 py-3 justify-start whitespace-nowrap hover:text-teal hover:bg-lightest-navy/30 transition-all"
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab content */}
        {experiences.map((exp) => (
          <TabsContent key={exp.company} value={exp.company} className="mt-0 flex-1">
            <div className="space-y-4">
              <div>
                <h3 className="text-lightest-slate text-xl font-semibold">
                  {exp.title}{" "}
                  <span className="text-teal">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-xs text-slate mt-1">
                  {exp.period} · {exp.location}
                </p>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-slate text-base leading-relaxed flex gap-3"
                  >
                    <span className="text-teal mt-1 shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
