"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  "TypeScript",
  "React.js",
  "Next.js",
  "React Native",
  "Redux / Redux Toolkit",
  "React Query",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Zod",
  "Jest",
  "GraphQL",
  "WebSocket",
  "OpenAI APIs",
  "Stripe",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Expo",
  "CI/CD",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Heading line
    gsap.from(".about-heading", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-heading",
        start: "top 88%",
        once: true,
      },
    });

    // Text paragraphs stagger
    gsap.from(".about-text", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 88%",
        once: true,
      },
    });

    // Skill badges stagger
    gsap.from(".about-skill", {
      opacity: 0,
      y: 10,
      duration: 0.4,
      stagger: 0.04,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-skill",
        start: "top 90%",
        once: true,
      },
    });

    // Profile image
    gsap.from(".about-image", {
      opacity: 0,
      x: 30,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 88%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="py-24 max-w-4xl mx-auto">
      {/* Section heading */}
      <div className="about-heading flex items-center gap-4 mb-12">
        <h2 className="font-(family-name:--font-sf-mono) text-lightest-slate text-2xl md:text-3xl font-semibold whitespace-nowrap">
          <span className="text-teal mr-2 text-xl">01.</span>
          About Me
        </h2>
        <div className="h-px bg-lightest-navy flex-1" />
      </div>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
        {/* Text */}
        <div className="space-y-4 text-slate text-lg leading-relaxed">
          <p className="about-text">
            I&apos;m a Software Engineer based in Rajshahi, Bangladesh with 5+
            years of experience building production-grade web applications. I
            hold a{" "}
            <span className="text-lightest-slate">
              Top Rated badge on Upwork
            </span>{" "}
            from 4 years of freelance delivery.
          </p>
          <p className="about-text">
            My focus is on{" "}
            <span className="text-lightest-slate">
              large-scale frontend architecture
            </span>
            , migrations, and scalable UI development across B2B SaaS,
            healthtech, and AI-powered platforms. I enjoy turning complex
            problems into elegant, performant interfaces.
          </p>
          <p className="about-text">
            I&apos;ve shipped complex features across the stack — from auth
            systems and payment integrations to real-time workflows and AI
            tooling — with a strong emphasis on{" "}
            <span className="text-lightest-slate">
              performance, scalability, and clean state management
            </span>
            .
          </p>
          <p className="about-text">
            Here are some technologies I&apos;ve been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-2 mt-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="about-skill font-mono text-sm text-slate flex items-center gap-2 before:content-['▹'] before:text-teal before:text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Profile image */}
        <div className="about-image relative group mx-auto w-64 md:w-full max-w-[280px]">
          <div className="relative z-10 rounded overflow-hidden transition-all duration-300">
            <Image
              src="/images/rafi_portfolio.jpg"
              alt="Abdullah Al Mohaymen Rafi"
              width={280}
              height={280}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all duration-300" />
          </div>
          {/* Decorative border */}
          <div className="absolute top-3 left-3 w-full h-full border-2 border-teal rounded z-0 group-hover:top-4 group-hover:left-4 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
