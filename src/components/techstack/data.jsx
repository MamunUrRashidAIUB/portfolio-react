import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FiServer, FiLock, FiShield } from "react-icons/fi";

export const STACK = [
  {
    category: "Frontend",
    icon: <SiReact />,
    items: [
      {
        name: "React",
        icon: <SiReact />,
        capabilities: ["SPA Development", "Component Architecture"],
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        capabilities: ["SSR / SSG", "App Router"],
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        capabilities: ["Typed APIs", "Type Safety"],
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        capabilities: ["ES2024", "Async Patterns"],
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        capabilities: ["Utility Styling", "Responsive UI"],
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        capabilities: ["UI Animation", "Scroll Effects"],
      },
    ],
  },
  {
    category: "Backend",
    icon: <SiNodedotjs />,
    items: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        capabilities: ["REST APIs", "Authentication"],
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        capabilities: ["Middleware", "REST Routes"],
      },
      {
        name: "REST APIs",
        icon: <FiServer />,
        capabilities: ["API Design", "CRUD Operations"],
      },
      {
        name: "JWT Authentication",
        icon: <FiLock />,
        capabilities: ["Stateless Auth", "Token Security"],
      },
      {
        name: "RBAC",
        icon: <FiShield />,
        capabilities: ["User Roles", "Access Control"],
      },
    ],
  },
  {
    category: "Database",
    icon: <SiMongodb />,
    items: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        capabilities: ["Schema Design", "Aggregation"],
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        capabilities: ["Relational Data", "Queries & Joins"],
      },
    ],
  },
  {
    category: "Tools",
    icon: <SiGit />,
    items: [
      { name: "Git", icon: <SiGit />, capabilities: ["Version Control"] },
      {
        name: "GitHub",
        icon: <SiGithub />,
        capabilities: ["Collaboration", "CI/CD"],
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        capabilities: ["API Testing"],
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        capabilities: ["Frontend Deployment"],
      },
      {
        name: "Render",
        icon: <SiRender />,
        capabilities: ["Backend Deployment"],
      },
    ],
  },
];

export const IMPROVING = [
  "Backend Architecture",
  "API Design",
  "TypeScript Patterns",
  "Writing Maintainable Tests",
  "Performance Optimization",
];
