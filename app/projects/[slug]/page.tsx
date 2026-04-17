import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.name} — Rafi` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-32 pb-24 max-w-3xl mx-auto">
      <Link
        href="/#projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "mb-8 text-slate hover:text-teal hover:bg-transparent -ml-2"
        )}
      >
        <FiArrowLeft className="mr-2" />
        Back to projects
      </Link>

      <p className="font-[family-name:var(--font-sf-mono)] text-xs text-teal mb-2">
        Featured Project
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold text-lightest-slate mb-4">
        {project.name}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-teal text-xl transition-colors"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        )}
        {project.gitBackend && (
          <a
            href={project.gitBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-sf-mono)] text-xs text-slate hover:text-teal transition-colors"
          >
            Backend repo
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-teal text-xl transition-colors"
            aria-label="Live site"
          >
            <FiExternalLink />
          </a>
        )}
      </div>

      <div className="relative rounded overflow-hidden mb-10">
        <Image
          src={project.image}
          alt={project.name}
          width={900}
          height={560}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-10">
        <div>
          <h2 className="text-lightest-slate text-xl font-semibold mb-4">Overview</h2>
          <p className="text-slate leading-relaxed mb-8">{project.overview}</p>

          <h2 className="text-lightest-slate text-xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li key={i} className="text-slate flex gap-3 leading-relaxed">
                <span className="text-teal shrink-0 mt-1">▹</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lightest-slate text-xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="font-[family-name:var(--font-sf-mono)] text-xs border-lightest-navy text-slate"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
