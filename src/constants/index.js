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

export const portfolioProjects = [
  {
    company: "SNAPBUY",
    year: "2025",
    title: "Ecommerce Management System",
    results: [
      { title: "Admin dashboard for product management (add, edit, delete)" },
      { title: "Secure payments via PayPal (sandbox) and Stripe" },
      { title: "User authentication and authorization" },
    ],
    link: "https://snapbuy.vercel.app",
    image: projectOne,
  },
  {
    company: "Other Opinion",
    year: "2024",
    title: "A platform for users to share and discuss opinions",
    results: [
      {
        title: "Various Topics With Voting",
      },
      { title: "Profile management" },
      { title: "Comment moderation" },
    ],
    link: "https://other-options.web.app",
    image: projectTwo,
  },
  {
    company: "Headline Hub",
    year: "2024",
    title: "A Web App For Real-Time News Aggregation",
    results: [
      { title: "Real-Time news aggregation" },
      { title: "Offering Categorized Updates" },
      { title: "Search Functionality" },
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
    title: "HTML",
    icon: htmlIcon,
  },
  {
    title: "CSS",
    icon: cssIcon,
  },
  {
    title: "React",
    icon: reactIcon,
  },
  {
    title: "Github",
    icon: githubIcon,
  },
  {
    title: "Git",
    icon: gitIcon,
  },
  {
    title: "node js",
    icon: nodeIcon,
  },
];
export const toolboxItemTwo = [
  {
    title: "typescript",
    icon: typescriptIcon,
  },
  {
    title: "next js",
    icon: nextIcon,
  },
  {
    title: "mongodb",
    icon: mongodbIcon,
  },
  {
    title: "postgresql",
    icon: postgresqlIcon,
  },
  {
    title: "tailwindcss",
    icon: tailwindIcon,
  },
  {
    title: "prisma",
    icon: prismaIcon,
  },
  {
    title: "express",
    icon: expressIcon,
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
