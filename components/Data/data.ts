import {DiJavascript} from "react-icons/di";
import {FaDocker, FaGitAlt, FaGithub} from "react-icons/fa";
import {IoLogoNodejs} from "react-icons/io";
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
  SiPostgresql,
  // SiReactquery,
  SiShadcnui,
} from "react-icons/si";
import {TbBrandTypescript} from "react-icons/tb";
import {SiRedux} from "react-icons/si";

// skills data
export const skills = [
  {id: 1, icon: RiReactjsLine, text: "ReactJs"},
  {id: 2, icon: RiNextjsLine, text: "NextJs"},
  {id: 3, icon: DiJavascript, text: "JavaScript"},
  {id: 4, icon: TbBrandTypescript, text: "TypeScript"},
  {id: 5, icon: RiTailwindCssFill, text: "Tailwind"},
  {id: 6, icon: RiBearSmileLine, text: "Zustand"},
  {id: 8, icon: SiRedux, text: "Redux"},
  // {id: 9, icon: SiReactquery, text: "Tanstack Query"},
  {id: 10, icon: SiShadcnui, text: "shadcnUi"},
  // {id: 11, icon: TbBrandFramerMotion, text: "Framer-Motion"},
  {id: 12, icon: IoLogoNodejs, text: "NodeJS"},
  {id: 13, icon: SiExpress, text: "ExpressJS"},
  {id: 14, icon: SiPostgresql, text: "PostgreSQL"},
  {id: 15, icon: SiMongodb, text: "MongoDB"},
  {id: 16, icon: SiPostman, text: "Postman"},
  {id: 17, icon: FaGitAlt, text: "Git"},
  {id: 18, icon: FaGithub, text: "GitHub"},
  {id: 19, icon: FaDocker, text: "Docker"},
  // {id: 19, icon: PiFigmaLogoBold, text: "Figma"},
];

// hackathon data

type Hackathon = {
  title: string;
  description: string;
  date: string;
  logo: string;
  github?: string;
  live?: string;
};

export const hackathons: Hackathon[] = [
  {
    title: "Code with Kiro Hackathon",
    description:
      "Built Rapid Report platform that lets people quickly and securely report emergencies. It ensures fast response, protects user privacy, and offers full anonymity whenever needed",
    date: "Aug 1rd - Sep 15th, 2025",
    // organizer: "Auraflix",
    logo: "K",
    github: "https://github.com/hiarun01/auraflix-hackathon",
    live: "https://auraflix-demo.com",
  },
  {
    title: "Adobe Express Add-ons Hackathon",
    description:
      "Developed a color palette generator for Adobe Express. It helps users quickly generate beautiful, ready-to-use color palettes based on user Prompt.",
    date: "May 19rd - Jul 21th, 2025",
    // organizer:"",
    logo: "A",
    github: "",
    live: "",
  },
];

// personal projects data

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
  image: string;
  category: string;
  status?: string;
};

export const personalProjects: Project[] = [
  {
    id: 1,
    title: "Feedlyz",
    description:
      "Feedlyz is a feedback collection tool that helps you gather insights from your users effortlessly. analyze responses, and improve your product based on real user input.",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "Shadcn-ui",
      "Prisma",
      "PostgreSQL",
      "Express",
      "Jwt-Auth",
    ],
    github: "https://github.com/hiarun01/feedlyze",
    live: "https://feedlyze-swart.vercel.app/",
    image: "/Projects-image/Feedlyz.png",
    category: "fullstack",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Rapid Report",
    description:
      "Rapid Report is a platform that enables users to quickly and securely report emergencies, ensuring fast response times while protecting user privacy with options for full anonymity.",
    techStack: [
      "TypeScript",
      "Javascript",
      "React",
      "tailwindcss",
      "Shadcn-ui",
      "Zustand",
      "MongoDB",
      "Express",
      "Jwt-Auth",
    ],
    github: "https://github.com/hiarun01/rapidReport",
    live: "https://rapidreport.hiarun.me/",
    image: "/Projects-image/rapidReport.png",
    category: "full stack",
  },
  {
    id: 3,
    title: "Jobify",
    description:
      "Jobify is a job portal where people can find and apply for jobs, and companies can post job openings. It's built with a clean and user-friendly design.",
    techStack: [
      "Javascript",
      "React",
      "tailwindcss",
      "Shadcn-ui",
      "redux",
      "MongoDB",
      "Express",
      "JwtAuth",
    ],
    github: "https://github.com/hiarun01/Jobify",
    live: "https://jobify.hiarun.me/",
    image: "/Projects-image/jobify.png",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Codalyzer",
    description:
      "Codalyzer – A smart code reviewer powered by GenAI that helps you analyze, review, and improve your code with AI-driven insights.",
    techStack: ["React", "tailwindcss", "Shadcn-ui", "GenAi api", "Express"],
    github: "https://github.com/hiarun01/codalyzer",
    live: "https://codalyzer.hiarun.me/",
    image: "/Projects-image/codalyzer.png",
    category: "ai",
  },
  {
    id: 5,
    title: "PaletteCraft",
    description:
      "PaletteCraft is an official Adobe Express add-on that helps you create, explore, and apply beautiful, human-inspired color palettes directly in your designs.",
    techStack: ["Javascript", "React", "Gen ai", "Adobe/ccWeb"],
    github: "https://github.com/hiarun01/palettecraft",
    live: "https://new.express.adobe.com/add-ons?addOnId=wim1m902m",
    image: "/Projects-image/paletteCraft.png",
    category: "plugins",
  },
  {
    id: 6,
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
  // {
  //   id: 7,
  //   title: "Chattx",
  //   description:
  //     "Chattx is a real-time chat app. I've built a basic version for now, and I'll definitely be adding lots of features in the future.",
  //   techStack: [
  //     "React",
  //     "tailwindcss",
  //     "Shadcn-ui",
  //     "Zustand",
  //     "Socket.io",
  //     "MongoDB",
  //     "Express",
  //   ],
  //   github: "https://github.com/hiarun01/chattx",
  //   live: "https://chattx.hiarun.me/",
  //   image: "/Projects-image/chattx.png",
  //   category: "fullstack",
  // },

  {
    id: 8,
    title: "CodeSnippet",
    description:
      "CodeSnippet is a simple tool that lets you create and download beautiful images of your code. Perfect for sharing on social media, blogs, or just for fun.",
    techStack: ["React", "tailwindcss", "Shadcn-ui", "html2canvas"],
    github: "https://github.com/hiarun01/CodeSnippet",
    live: "https://codesnippet.hiarun.me/",
    image: "/Projects-image/codeSnippet.png",
    category: "frontend",
  },
  {
    id: 9,
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
    id: 10,
    title: "Clarify",
    description:
      "Clarify is a image enhancer web application powered by (PicWish API) that enhances and upscales your images with just one click",
    techStack: ["React", "tailwindcss", "PicWish Api"],
    github: "https://github.com/hiarun01/Clarify",
    live: "https://clarify.hiarun.me/",
    image: "/Projects-image/codeSnippet.png",
    category: "frontend",
  },
];
