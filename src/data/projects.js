import vehrbal from "@/assets/images/vehrbal.webp";
import myops from "@/assets/images/myops.webp";
import helppages from "@/assets/images/helppages.webp";

export const portfolioProjects = [
  {
    year: "2026",
    title: "Vehrbal",
    summary:
      "AI scribe that turns patient conversations into HIPAA-compliant SOAP notes in seconds, with customizable templates and multi-format EHR-ready exports. Built the frontend and integrated the documentation APIs.",
    tech: ["React", "Tailwind", "REST API"],
    link: "https://app.vehrbal.ai",
    image: vehrbal,
  },
  {
    year: "2025",
    title: "MyOps",
    summary:
      "AI-powered command center for real estate operations — workflow automation, real-time financial analytics, and an on-demand CFO assistant. Built the frontend and wired up the API integration.",
    tech: ["React", "Tailwind", "REST API"],
    link: "https://myops.ai",
    image: myops,
  },
  {
    year: "2026",
    title: "HelpPages",
    summary:
      "Full-stack AI documentation platform that generates docs from uploads, URLs, or web scraping, paired with a CMS, custom subdomains, and one-click publishing. Built end to end.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    link: "https://helppages.ai",
    image: helppages,
  },
];

export const experience = [
  {
    title: "Full-Stack Developer",
    org: "Intrepide — remote",
    period: "Dec 2025 — Present",
  },
  {
    title: "Frontend Developer",
    org: "Softvence",
    period: "May 2025 — Nov 2025",
  },
  {
    title: "Frontend Web Developer",
    org: "Naptech",
    period: "Oct 2024 — Feb 2025",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Prisma"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB"] },
  { label: "Cloud & Tools", items: ["Azure", "Git", "GitHub"] },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/jakareya76" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jakareya-ahmed" },
];

export const email = "jakareya1306@gmail.com";
