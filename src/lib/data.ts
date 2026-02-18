export interface Project {
    title: string;
    description: string;
    important: boolean;
    href: string;
  }
  
  export interface Link {
    title: string;
    href: string;
  }

  export interface SkillCategory {
    name: string;
    items: string[];
  }

  export interface WorkEntry {
    company: string;
    role: string;
    period: string;
    href?: string;
  }

  export const WorkData: WorkEntry[] = [
    { company: "Dines", role: "Backend Engineer", period: "Nov 2025 – Present" },
    // Add past roles as needed, e.g.:
    // { company: "Previous Co", role: "Software Engineer", period: "2022 – 2024", href: "https://..." },
  ];

  export const SkillData: SkillCategory[] = [
    { name: "Stack", items: ["Go", "Python", "TypeScript", "Node.js", "PostgreSQL", "Redis", "MongoDB"] },
    { name: "Infra", items: ["Docker", "AWS", "GitHub Actions"] },
  ];
  
  export const ProjectData: Project[] = [
    {
      title: "ChatterBox",
      description: "Chatterbox is a AI-powered assistant using multiple AI models and web search capabilities.",
      important: true,
      href: "https://github.com/jackkslash/ChatterBox",
    },
    {
      title: "Huddle",
      important: true,
      description: " A Modern Fullstack Social News Website and Forum",
      href: "https://github.com/jackkslash/huddl",
    },
    {
      title: "Tombot",
      description:
        "Discord bot that watches the ethereum block for user submitted wallets",
      important: true,
      href: "https://github.com/jackkslash/tombot",
    },
    {
      title: "MSAI",
      description: "Meme reverse image search using vector database and AI.",
      important: true,
      href: "https://github.com/jackkslash/MSAI",
    },
  ];
  
  export const Links: Link[] = [
    {
      title: "github",
      href: "https://github.com/jackkslash",
    },
    {
      title: "twitter",
      href: "https://twitter.com/jackkslash",
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/jackaaronfaulkner/",
    },
    {
      title: "email",
      href: "mailto:jackfaulknerbis@hotmail.co.uk",
    },
  ];