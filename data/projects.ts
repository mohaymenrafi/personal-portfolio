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
    techs: ["Next.js", "TypeScript", "React Query", "Stripe", "Zod", "PostHog", "Tailwind CSS"],
    image: "/project-images/airwork.png",
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
    techs: ["Next.js", "React", "Vite", "TypeScript", "OpenAI API", "Cloudflare R2", "JWT"],
    image: "/project-images/expatal.png",
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
    techs: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "react-beautiful-dnd"],
    image: "/project-images/offsight.png",
    featured: true,
    alignLeft: true,
  },
  {
    slug: "rey",
    name: "Rey — E-commerce Platform",
    overview:
      "A niche full-stack e-commerce application built with the MERN stack. Features product listings, cart management, user authentication, and an admin dashboard.",
    features: [
      "Full MERN stack implementation",
      "User authentication with JWT",
      "Product catalog with search and filtering",
      "Cart and checkout flow",
      "Admin dashboard for product and order management",
    ],
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    image: "/project-images/rey.jpg",
    githubUrl: "https://github.com/mohaymenrafi/rey-client",
    gitBackend: "https://github.com/mohaymenrafi/rey-server",
    liveUrl: "https://rey-client.vercel.app",
    featured: false,
    alignLeft: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
