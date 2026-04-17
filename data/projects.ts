export interface Project {
  slug: string;
  name: string;
  overview: string;
  features: string[];
  techs: string[];
  image: string;
  githubUrl?: string;
  gitBackend?: string;
  liveUrl?: string;
  featured: boolean;
  alignLeft: boolean;
}

export const projects: Project[] = [
  {
    slug: "airwork-ai",
    name: "Airwork AI",
    overview:
      "A full-scale B2B SaaS talent marketplace with dual portals for organizations and talent. Features Stripe billing, Google OAuth, OpenAPI-generated TypeScript SDK, and PostHog analytics.",
    features: [
      "Dual portal architecture (organization + talent)",
      "Stripe subscription billing with upgrade/downgrade flows",
      "OpenAPI-first SDK generation (TypeScript + Zod schemas)",
      "Multi-step onboarding with server-side route guards",
      "PostHog & Meta Pixel analytics integration",
    ],
    techs: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Stripe",
      "Zod",
      "PostHog",
      "Tailwind CSS",
    ],
    image: "/project-images/airwork-landing.png",
    featured: true,
    alignLeft: true,
  },
  {
    slug: "expatal",
    name: "Expatal — AI Recruitment Platform",
    overview:
      "A two-sided AI recruitment platform with a Candidate Portal and Recruiter Portal. Integrates OpenAI for resume parsing, candidate summarization, and natural language smart search. Includes a full ATS with drag-and-drop pipeline management.",
    features: [
      "OpenAI-powered resume parsing and candidate summarization",
      "Natural language smart search for recruiters",
      "Full ATS with multi-stage interview pipeline (drag-and-drop)",
      "Role-based auth: email, Google OAuth, LinkedIn OAuth",
      "File handling via Cloudflare R2 with S3/GCS fallback",
    ],
    techs: [
      "Next.js",
      "React",
      "Vite",
      "TypeScript",
      "OpenAI API",
      "Cloudflare R2",
      "JWT",
    ],
    image: "/project-images/talt-expatal.png",
    featured: true,
    alignLeft: false,
  },
  {
    slug: "offsight",
    name: "Offsight — Construction Management",
    overview:
      "Led the frontend migration of a modular construction management SaaS from Angular.js to React.js. Reduced load times by 65%, serving 43 global enterprise clients and generating millions in revenue.",
    features: [
      "Angular → React + TypeScript migration with 30% dev efficiency gain",
      "65% load time reduction through performance optimization",
      "Drag-and-drop form builder with 7+ field types and conditional logic",
      "PDF editor, workflow automation, and report generation",
      "Forecasting, analytics, and feature-permission management",
    ],
    techs: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "react-beautiful-dnd",
    ],
    image: "/project-images/offsight-landing.png",
    featured: true,
    alignLeft: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
