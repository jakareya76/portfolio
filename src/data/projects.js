import projectOne from "@/assets/images/project_one.webp";
import projectTwo from "@/assets/images/project_two.webp";
import projectThree from "@/assets/images/project_three.webp";

export const portfolioProjects = [
  {
    company: "SNAPBUY",
    year: "2025",
    role: "Full Stack",
    title: "Full Stack Ecommerce System",
    summary:
      "End-to-end ecommerce platform with admin tooling and multi-gateway checkout.",
    results: [
      "Admin dashboard for product management",
      "Secure payments via PayPal & Stripe",
      "User authentication & authorization",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    link: "https://snapbuy.vercel.app",
    image: projectOne,
  },
  {
    company: "Other Opinion",
    year: "2024",
    role: "Full Stack",
    title: "Opinion Sharing Platform",
    summary:
      "Real-time discussion platform with voting, profiles, and content moderation.",
    results: [
      "Real-time voting & discussions",
      "Profile management & moderation",
      "Full stack implementation",
    ],
    tech: ["React", "Firebase", "Realtime DB", "Tailwind"],
    link: "https://other-options.web.app",
    image: projectTwo,
  },
  {
    company: "Headline Hub",
    year: "2024",
    role: "Frontend",
    title: "Real-Time News Aggregator",
    summary:
      "Aggregates news across sources with categorization and fast search.",
    results: [
      "Aggregates news from multiple sources",
      "Categorized updates & search",
      "Optimized performance",
    ],
    tech: ["React", "News API", "Firebase", "Tailwind"],
    link: "https://headline-hub-762d6.web.app",
    image: projectThree,
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Azure",
  "Cloud SSH",
  "Git",
  "GitHub",
];

export const experience = [
  {
    sha: "a4f9c2b",
    date: "Dec 2025 → now",
    type: "feat",
    scope: "intrepide",
    subject: "Full Stack Developer — scaling production systems",
    body: [
      "React + Next.js frontends, Node.js services behind them.",
      "Perf tuning, incident triage, keeping prod from catching fire.",
      "Atlanta, GA · remote from Dhaka.",
    ],
  },
  {
    sha: "7e1d4f0",
    date: "May 2025 – Nov 2025",
    type: "feat",
    scope: "softvence",
    subject: "Frontend Developer — shipping UI at agency speed",
    body: [
      "Client-facing interfaces across multiple projects.",
      "Tight iteration cycles, design-system contributions.",
    ],
  },
  {
    sha: "b03ae81",
    date: "Oct 2024 – Feb 2025",
    type: "feat",
    scope: "naptech",
    subject: "Frontend Web Developer — first professional role",
    body: ["Production React apps with real users.", "Dhaka, Bangladesh."],
  },
  {
    sha: "init",
    date: "earlier",
    type: "chore",
    scope: "career",
    subject: "self-taught full-stack dev — from political science to code",
    body: [
      "Narayanganj University College — Political Science & Government.",
      "Switched tracks, committed hard to shipping real software.",
    ],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/jakareya76" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jakareya-ahmed" },
  { name: "Twitter", url: "https://twitter.com" },
];

export const stats = {
  latestCommit: {
    sha: "1e1bad3",
    message: "polish: fix micro-animation issues and overhaul Projects section",
    repo: "portfolio",
    when: "recent",
  },
  counters: [
    { value: "02+", label: "Years shipping" },
    { value: "15+", label: "Projects built" },
  ],
};
