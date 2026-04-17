import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-4xl mx-auto">
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-mono text-lightest-slate text-2xl md:text-3xl font-semibold whitespace-nowrap">
          <span className="text-teal mr-2 text-xl">03.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="h-px bg-lightest-navy flex-1" />
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {featuredProjects.map((project) => {
          const isLeft = project.alignLeft;
          return (
            <div key={project.slug}>

              {/* ── Mobile layout: stacked ── */}
              <div className="md:hidden flex flex-col gap-4">
                <Link href={`/projects/${project.slug}`} className="block rounded overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={700}
                    height={440}
                    className="w-full h-auto object-cover"
                  />
                </Link>

                <p className="font-mono text-xs text-teal">Featured Project</p>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-lightest-slate text-xl font-semibold hover:text-teal transition-colors">
                    {project.name}
                  </h3>
                </Link>

                <p className="text-slate text-sm leading-relaxed">{project.overview}</p>

                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.techs.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-slate">{tech}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      className="text-lightest-slate hover:text-teal text-xl transition-colors">
                      <FiGithub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                      className="text-lightest-slate hover:text-teal text-xl transition-colors">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              {/* ── Desktop layout: overlapping grid ── */}
              <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                {/* Image */}
                <div className={`col-span-7 relative group ${isLeft ? "col-start-1" : "col-start-6"} row-start-1`}>
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative overflow-hidden rounded">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={700}
                        height={440}
                        className="w-full h-auto object-cover transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-all duration-500" />
                    </div>
                  </Link>
                </div>

                {/* Text */}
                <div className={`col-span-6 relative z-10 row-start-1 flex flex-col gap-3
                  ${isLeft ? "col-start-7 text-right items-end" : "col-start-1 text-left items-start"}`}>
                  <p className="font-mono text-xs text-teal">Featured Project</p>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-lightest-slate text-xl md:text-2xl font-semibold hover:text-teal transition-colors">
                      {project.name}
                    </h3>
                  </Link>

                  <div className="bg-light-navy p-6 rounded shadow-xl">
                    <p className="text-slate text-sm md:text-base leading-relaxed">{project.overview}</p>
                  </div>

                  <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
                    {project.techs.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-slate">{tech}</span>
                    ))}
                  </div>

                  <div className={`flex items-center gap-4 ${isLeft ? "justify-end" : "justify-start"}`}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="text-lightest-slate hover:text-teal text-xl transition-colors">
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                        className="text-lightest-slate hover:text-teal text-xl transition-colors">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
