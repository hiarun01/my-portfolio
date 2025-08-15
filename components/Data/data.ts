import {DiJavascript} from "react-icons/di";
import {FaDocker, FaGitAlt, FaGithub} from "react-icons/fa";
import {IoLogoNodejs} from "react-icons/io";
import {PiFigmaLogoBold} from "react-icons/pi";
import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
  RiBearSmileLine,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiReactquery,
  SiShadcnui,
} from "react-icons/si";
import {TbBrandFramerMotion, TbBrandTypescript} from "react-icons/tb";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
  image: string;
  category: string;
};

const skills = [
  {id: 1, icon: RiReactjsLine, text: "ReactJs"},
  {id: 2, icon: RiNextjsLine, text: "NextJs"},
  {id: 3, icon: DiJavascript, text: "JavaScript"},
  {id: 4, icon: TbBrandTypescript, text: "TypeScript"},
  {id: 5, icon: RiTailwindCssFill, text: "Tailwind"},
  {id: 6, icon: RiBearSmileLine, text: "Zustand"},
  {id: 7, icon: SiReactquery, text: "Tanstack Query"},
  {id: 8, icon: SiShadcnui, text: "shadcn"},
  {id: 9, icon: TbBrandFramerMotion, text: "Motion"},
  {id: 10, icon: IoLogoNodejs, text: "NodeJS"},
  {id: 11, icon: SiExpress, text: "ExpressJS"},
  {id: 12, icon: SiMongodb, text: "MongoDB"},
  {id: 13, icon: SiPostman, text: "Postman"},
  {id: 14, icon: FaGitAlt, text: "Git"},
  {id: 15, icon: FaGithub, text: "GitHub"},
  {id: 16, icon: FaDocker, text: "Docker"},
  {id: 17, icon: PiFigmaLogoBold, text: "Figma"},
];

export const personalProjects: Project[] = [
  {
    title: "Jobify",
    description:
      "Jobify is a job portal where people can find and apply for jobs, and companies can post job openings. It's built with a clean and user-friendly design, making the job search and hiring process easy for everyone.",
    techStack: [
      "Javascript",
      "React",
      "tailwindcss",
      "Shadcn-ui",
      "redux",
      "MongoDB",
      "Express",
      "Jwt Auth",
    ],
    github: "https://github.com/hiarun01/Jobify",
    live: "https://jobify.hiarun.me/",
    image: "/Projects-image/jobify.png",
    category: "fullstack",
  },
  {
    title: "impactList",
    description:
      "mpactList is a community platform where people around the world share the top things that changed their lives from books and habits to tools and podcasts.",
    techStack: [
      "React",
      "tailwindcss",
      "MagicUI",
      "Shadcn-ui",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/hiarun01/impactList",
    live: "https://impactlist.hiarun.me/",
    image: "/Projects-image/impactList.png",
    category: "fullstack",
  },
  {
    title: "TwiFake",
    description:
      "TwiFake is a simple tool that lets you create realistic-looking fake tweets for design mockups, social media content, or fun creative projects.",
    techStack: [
      "React",
      "tailwindcss",
      "framer-motion",
      "Shadcn-ui",
      "html2canvas",
    ],
    github: "https://github.com/hiarun01/TwiFake",
    live: "https://twifake.hiarun.me/",
    image: "/Projects-image/twifale.png",
    category: "frontend",
  },
  {
    title: "CodeSnippet",
    description:
      "CodeSnippet is a simple tool that lets you create and download beautiful images of your code.",
    techStack: ["React", "tailwindcss", "Shadcn-ui", "html2canvas"],
    github: "https://github.com/hiarun01/CodeSnippet",
    live: "https://codesnippet.hiarun.me/",
    image: "/Projects-image/codeSnippet.png",
    category: "frontend",
  },
  {
    title: "Chattx",
    description:
      "Chattx is a real-time chat app. I've built a basic version for now, and I'll definitely be adding lots of features in the future.",
    techStack: [
      "React",
      "tailwindcss",
      "Shadcn-ui",
      "Zustand",
      "Socket.io",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/hiarun01/chattx",
    live: "https://chattx.hiarun.me/",
    image: "/Projects-image/chattx.png",
    category: "fullstack",
  },
  {
    title: "Codalyzer",
    description:
      "Codalyzer – A smart code reviewer powered by GenAI that helps you analyze, review, and improve your code with AI-driven insights.",
    techStack: ["React", "tailwindcss", "Shadcn-ui", "GenAi api", "Express"],
    github: "https://github.com/hiarun01/codalyzer",
    live: "https://codalyzer.hiarun.me/",
    image: "/Projects-image/codalyzer.png",
    category: "ai",
  },
];

export {skills};
