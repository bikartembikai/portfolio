export const profile = {
  name: "Muhammad Amir Afham",
  role: "Full-Stack Developer",
  tagline: "Building impactful digital experiences — from idea to production.",
  bio: "I'm a passionate full-stack developer who loves turning complex problems into elegant, scalable solutions. I enjoy working across the entire stack — from crafting intuitive UIs to designing robust backend systems. When I'm not coding, I'm exploring new technologies and contributing to open-source.",
  location: "Malaysia 🇲🇾",
  email: "hello@youremail.com",
  github: "https://github.com/bikartembikai",
  linkedin: "https://linkedin.com/in/amir-afham-7a44a2327",
  cvUrl: "/Resume_MuhammadAmirAfham.pdf",
};

export const skills = [
  // Languages
  "TypeScript", "JavaScript", "PHP", "Python", "SQL",
  // Frontend
  "React", "Next.js", "Tailwind CSS", "shadcn/ui",
  // Backend
  "Laravel", "Node.js", "REST APIs",
  // DevOps & Tools
  "Docker", "MySQL", "PostgreSQL", "Git", "Linux",
];

export const projects = [
  {
    title: "PaperFlo",
    description:
      "A full-featured conference management platform supporting multi-role workflows — organizers, authors, reviewers, and committee members. Handles paper submissions, review assignments, and acceptance decisions.",
    tech: ["Laravel", "PHP", "MySQL", "Docker", "Blade"],
    github: "https://github.com/yourusername/paperflo",
    live: "",
    featured: true,
  },
  {
    title: "FalconWFM",
    description:
      "A workforce management system that streamlines facilitator assignment and event scheduling. Features a rule-based smart recommendation engine and role-based access control (RBAC).",
    tech: ["Laravel", "Sanctum", "MySQL", "REST API", "Blade"],
    github: "https://github.com/yourusername/falconwfm",
    live: "",
    featured: true,
  },
  {
    title: "Entry-Level Job Finder",
    description:
      "A job discovery dashboard focused on fresh graduates and entry-level candidates (0–2 years experience). Integrates a live job API, MySQL stored procedures, and a clean, filterable UI.",
    tech: ["Next.js", "MySQL", "Node.js", "REST API"],
    github: "https://github.com/yourusername/job-finder",
    live: "",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "This very site! A modern personal portfolio built with Next.js 14 App Router, shadcn/ui components, Tailwind CSS, and Framer Motion animations. Dark-mode only with a purple accent theme.",
    tech: ["Next.js", "shadcn/ui", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "#",
    featured: false,
  },
];

export const experience = [
  {
    role: "Full-Stack Developer (Intern)",
    company: "Your Company",
    period: "Jan 2025 – Present",
    description:
      "Built and maintained web applications using Laravel and React. Implemented API authentication, refactored core services for maintainability, and containerized apps with Docker.",
    skills: ["Laravel", "React", "Docker", "MySQL"],
  },
  {
    role: "Final Year Project — FalconWFM",
    company: "University",
    period: "Sep 2025 – Feb 2026",
    description:
      "Designed and developed a workforce management system for a client. Implemented RBAC, a rule-based recommendation engine, and token-based API auth with Laravel Sanctum.",
    skills: ["Laravel", "Sanctum", "RBAC", "MySQL"],
  },
  {
    role: "Group Software Project — PaperFlo",
    company: "University",
    period: "Sep 2025 – Oct 2025",
    description:
      "Led backend development for a conference management platform. Built Docker-based deployment pipeline and implemented feature tests with PHPUnit.",
    skills: ["Laravel", "Docker", "PHPUnit", "MySQL"],
  },
];
