import projectOne from "@/assets/images/project_one.webp";
import projectTwo from "@/assets/images/project_two.webp";
import projectThree from "@/assets/images/project_three.webp";

export const portfolioProjects = [
  {
    year: "2025",
    title: "Snapbuy",
    summary:
      "End-to-end ecommerce platform with an admin dashboard, secure multi-gateway checkout, and full user authentication.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    link: "https://snapbuy.vercel.app",
    image: projectOne,
  },
  {
    year: "2024",
    title: "Other Opinion",
    summary:
      "Real-time opinion-sharing platform with voting, profiles, and content moderation built on a realtime database.",
    tech: ["React", "Firebase", "Realtime DB", "Tailwind"],
    link: "https://other-options.web.app",
    image: projectTwo,
  },
  {
    year: "2024",
    title: "Headline Hub",
    summary:
      "News aggregator pulling from multiple sources with categorized feeds and fast search, tuned for performance.",
    tech: ["React", "News API", "Firebase", "Tailwind"],
    link: "https://headline-hub-762d6.web.app",
    image: projectThree,
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
