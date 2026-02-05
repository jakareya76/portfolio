import projectOne from "@/assets/images/project_one.webp";
import projectTwo from "@/assets/images/project_two.webp";
import projectThree from "@/assets/images/project_three.webp";

import javascriptIcon from "@/assets/skills/javascript.svg";
import htmlIcon from "@/assets/skills/html.svg";
import cssIcon from "@/assets/skills/css.svg";
import reactIcon from "@/assets/skills/react.svg";
import githubIcon from "@/assets/skills/github.svg";
import gitIcon from "@/assets/skills/git.svg";
import nodeIcon from "@/assets/skills/node.js.svg";
import nextIcon from "@/assets/skills/next.js.svg";
import mongodbIcon from "@/assets/skills/mongodb.svg";
import postgresqlIcon from "@/assets/skills/postgresql.svg";
import typescriptIcon from "@/assets/skills/typescript.svg";
import tailwindIcon from "@/assets/skills/tailwindcss.svg";
import prismaIcon from "@/assets/skills/prisma.svg";
import expressIcon from "@/assets/skills/express.svg";
import azureIcon from "@/assets/skills/azure.svg";
import cloudIcon from "@/assets/skills/cloud.svg";

export const portfolioProjects = [
  {
    company: "SNAPBUY",
    year: "2025",
    title: "Full Stack Ecommerce System",
    results: [
      { title: "Admin dashboard for product management" },
      { title: "Secure payments via PayPal & Stripe" },
      { title: "User authentication & authorization" },
    ],
    link: "https://snapbuy.vercel.app",
    image: projectOne,
  },
  {
    company: "Other Opinion",
    year: "2024",
    title: "Opinion Sharing Platform",
    results: [
      {
        title: "Real-time voting & discussions",
      },
      { title: "Profile management & moderation" },
      { title: "Full stack implementation" },
    ],
    link: "https://other-options.web.app",
    image: projectTwo,
  },
  {
    company: "Headline Hub",
    year: "2024",
    title: "Real-Time News Aggregator",
    results: [
      { title: "Aggregates news from multiple sources" },
      { title: "Categorized updates & search" },
      { title: "Optimized performance" },
    ],
    link: "https://headline-hub-762d6.web.app",
    image: projectThree,
  },
];

export const toolboxItem = [
  {
    title: "JavaScript",
    icon: javascriptIcon,
  },
  {
    title: "TypeScript",
    icon: typescriptIcon,
  },
  {
    title: "React",
    icon: reactIcon,
  },
  {
    title: "Next.js",
    icon: nextIcon,
  },
  {
    title: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    title: "HTML5",
    icon: htmlIcon,
  },
  {
    title: "CSS3",
    icon: cssIcon,
  },
];

export const toolboxItemTwo = [
  {
    title: "Node.js",
    icon: nodeIcon,
  },
  {
    title: "Express.js",
    icon: expressIcon,
  },
  {
    title: "PostgreSQL",
    icon: postgresqlIcon,
  },
  {
    title: "MongoDB",
    icon: mongodbIcon,
  },
  {
    title: "Prisma",
    icon: prismaIcon,
  },
  {
    title: "Azure",
    icon: azureIcon,
  },
  {
    title: "Cloud SSH",
    icon: cloudIcon,
  },
  {
    title: "Git",
    icon: gitIcon,
  },
  {
    title: "GitHub",
    icon: githubIcon,
  },
];

export const hobbies = [
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🗻",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🤸‍♀️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Traveling",
    emoji: "✈",
    left: "5%",
    top: "65%",
  },
  {
    title: "Learning New Things",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];
