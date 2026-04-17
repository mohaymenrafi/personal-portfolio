export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  url?: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Airwork AI",
    title: "Lead Frontend Engineer",
    location: "Bangladesh (Remote)",
    period: "Feb 2025 – Present",
    bullets: [
      "Architected and led frontend development of a full-scale B2B SaaS platform from scratch with dual portals (organizations and talent) using Next.js, React, and TypeScript.",
      "Designed a resilient authentication system with Google OAuth, HTTP-only cookie sessions, and a request-queuing mechanism for token refresh to eliminate race conditions on concurrent API calls.",
      "Integrated Stripe subscription billing with upgrade/downgrade flows, Stripe Elements for secure card entry, and payment method lifecycle management.",
      "Established an OpenAPI-first pipeline auto-generating TypeScript SDK, Zod schemas, and typed hooks from backend spec — eliminating manual API sync overhead.",
      "Implemented full-funnel analytics using PostHog and Meta Pixel, including React Query error tracking and conversion event capture.",
    ],
  },
  {
    company: "Expatal",
    title: "Software Engineer",
    location: "Germany (Remote)",
    period: "May 2024 – Jan 2025",
    bullets: [
      "Built a two-sided AI recruitment platform with a Candidate Portal (Next.js) and Recruiter Portal (React + Vite).",
      "Integrated OpenAI API for AI-driven resume parsing, candidate summarization, and natural language smart search enabling recruiters to query candidates using free-text.",
      "Architected a role-based authentication system supporting email/password, Google OAuth, and LinkedIn OAuth with middleware-protected routes and JWT-based session management.",
      "Implemented a full Applicant Tracking System (ATS) with multi-stage interview pipeline management, drag-and-drop workflows, and real-time status tracking.",
      "Engineered file handling pipelines using Cloudflare R2 (with AWS S3 and Google Cloud Storage fallback) for secure resume uploads and AI processing.",
    ],
  },
  {
    company: "Usko Health",
    title: "Software Engineer",
    location: "USA (Remote)",
    period: "Oct 2023 – Mar 2024",
    bullets: [
      "Built 5 dynamic campaign landing pages in React + TypeScript with a shared component architecture supporting A/B testing across treatment variants.",
      "Led end-to-end frontend delivery of a contractor time tracking system supporting 50+ contractors, covering full timesheet and entry lifecycles from creation through manager approval.",
      "Engineered clock-in/clock-out workflows with task capture, timezone-aware timestamp handling, and overnight-entry safeguards for accurate cross-day shift recording.",
      "Built reusable, responsive, performance-optimised page sections with a focus on conversion UX, reducing component build time across treatment-specific rollouts.",
    ],
  },
  {
    company: "Supertal / Offsight",
    title: "Software Engineer",
    location: "Singapore (Remote)",
    period: "Mar 2023 – Jan 2024",
    bullets: [
      "Led migration of a modular construction management system from Angular.js → React.js, raw CSS → Tailwind CSS, and JavaScript → TypeScript, resulting in a 30% improvement in development efficiency.",
      "Reduced loading time by 65% through performance optimization and reduced API calls, achieving a 10× boost in user satisfaction — serving 43 global enterprise clients.",
      "Developed production/labor/order tracking, analytics, a PDF editor like DocuSign, workflow automation, report generation, and forecasting.",
      "Built a dynamic drag-and-drop form builder supporting 7+ field types with conditional subtask dependencies, per-field file attachments, and a three-layer regex-based validation engine.",
    ],
  },
];
