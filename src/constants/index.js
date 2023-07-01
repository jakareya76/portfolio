export const myWork = [
  {
    id: 0,
    title: "Real Estate Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    category: "Web Application",
    image: "/real-state.png",
  },
  {
    id: 1,
    title: "Plant identification app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    category: "Mobile App",
    image: "/plant.png",
  },
  {
    id: 2,
    title: "Smart Home App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
    category: "Mobile App",
    image: "/smart.png",
  },
];

export const mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React Js",
  "React Native",
  "Next Js",
  "Node Js",
  "Express Js",
  "MongoDB",
  "Mongoose JS",
  "Tailwind CSS",
  "SQL",
  "Redux Toolkit",
  "Firebase",
  "GraphQL",
  "Prisma ORM",
  "Figma",
  "Expo",
  "API",
  "Docker",
  "JSON",
  "Superbase",
  "SCSS",
  "AJAX",
  "MySQL",
  "Git",
  "Auth0",
  "NextAuth",
];

export const particleOption = {
  fullScreen: {
    enable: false,
    zIndex: -5,
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
