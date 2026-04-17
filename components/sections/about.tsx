import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = [
  "TypeScript", "React.js", "Next.js", "React Native",
  "Redux / Redux Toolkit", "React Query", "Node.js", "Express.js",
  "Tailwind CSS", "Zod", "Jest", "GraphQL",
  "WebSocket", "OpenAI APIs", "Stripe", "MongoDB",
  "PostgreSQL", "Firebase", "Expo", "CI/CD",
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto">
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-[family-name:var(--font-sf-mono)] text-[var(--color-lightest-slate)] text-2xl md:text-3xl font-semibold whitespace-nowrap">
          <span className="text-[var(--color-teal)] mr-2 text-xl">01.</span>
          About Me
        </h2>
        <div className="h-px bg-[var(--color-lightest-navy)] flex-1" />
      </div>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
        {/* Text */}
        <div className="space-y-4 text-[var(--color-slate)] text-lg leading-relaxed">
          <p>
            I&apos;m a Software Engineer based in Rajshahi, Bangladesh with 5+ years of experience building
            production-grade web applications. I hold a{" "}
            <span className="text-[var(--color-lightest-slate)]">Top Rated badge on Upwork</span> from 4 years of
            freelance delivery.
          </p>
          <p>
            My focus is on{" "}
            <span className="text-[var(--color-lightest-slate)]">large-scale frontend architecture</span>,
            migrations, and scalable UI development across B2B SaaS, healthtech, and AI-powered platforms. I enjoy
            turning complex problems into elegant, performant interfaces.
          </p>
          <p>
            I&apos;ve shipped complex features across the stack — from auth systems and payment integrations to
            real-time workflows and AI tooling — with a strong emphasis on{" "}
            <span className="text-[var(--color-lightest-slate)]">performance, scalability, and clean state management</span>.
          </p>
          <p>Here are some technologies I&apos;ve been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 mt-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="font-[family-name:var(--font-sf-mono)] text-sm text-[var(--color-slate)] flex items-center gap-2 before:content-['▹'] before:text-[var(--color-teal)] before:text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Profile image */}
        <div className="relative group mx-auto w-64 md:w-full max-w-[280px]">
          <div className="relative z-10 rounded overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/images/profile.jpg"
              alt="Abdullah Al Mohaymen Rafi"
              width={280}
              height={280}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[var(--color-teal)]/20 group-hover:bg-transparent transition-all duration-300" />
          </div>
          {/* Decorative border */}
          <div className="absolute top-3 left-3 w-full h-full border-2 border-[var(--color-teal)] rounded z-0 group-hover:top-4 group-hover:left-4 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
