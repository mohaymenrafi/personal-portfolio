import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-4xl mx-auto">
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-[family-name:var(--font-sf-mono)] text-[var(--color-lightest-slate)] text-2xl md:text-3xl font-semibold whitespace-nowrap">
          <span className="text-[var(--color-teal)] mr-2 text-xl">03.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="h-px bg-[var(--color-lightest-navy)] flex-1" />
      </div>

      <div className="flex flex-col gap-24">
        {featuredProjects.map((project, index) => {
          const isLeft = project.alignLeft;
          return (
            <div key={project.slug} className="relative grid md:grid-cols-12 gap-4 items-center">
              {/* Image */}
              <div
                className={`md:col-span-7 relative group ${
                  isLeft ? "md:col-start-1" : "md:col-start-6"
                } row-start-1`}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative overflow-hidden rounded">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={700}
                      height={440}
                      className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-[var(--color-navy)]/60 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                </Link>
              </div>

              {/* Text */}
              <div
                className={`md:col-span-6 relative z-10 row-start-1 ${
                  isLeft
                    ? "md:col-start-7 md:text-right"
                    : "md:col-start-1 md:text-left"
                } flex flex-col gap-3 ${isLeft ? "md:items-end" : "md:items-start"}`}
              >
                <p className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-teal)]">
                  Featured Project
                </p>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-[var(--color-lightest-slate)] text-xl md:text-2xl font-semibold hover:text-[var(--color-teal)] transition-colors">
                    {project.name}
                  </h3>
                </Link>

                <div className="bg-[var(--color-light-navy)] p-6 rounded shadow-xl">
                  <p className="text-[var(--color-slate)] text-sm md:text-base leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="font-[family-name:var(--font-sf-mono)] text-xs text-[var(--color-slate)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-4 ${isLeft ? "justify-end" : "justify-start"}`}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-[var(--color-lightest-slate)] hover:text-[var(--color-teal)] text-xl transition-colors"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="text-[var(--color-lightest-slate)] hover:text-[var(--color-teal)] text-xl transition-colors"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
