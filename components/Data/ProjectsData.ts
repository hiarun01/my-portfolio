export type Project = {
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
    title: "Snippify",
    description:
      "Snippify helps you create clean, beautiful images of your code ready to download and share in seconds.",
    techStack: ["NextJS", "TailwindCSS", "Shadcn-ui", "canvas"],
    github: "https://github.com/hiarun02/Snippify",
    live: "https://snippify.hiarun.me/",
    image: "",
    category: "",
    status: "Live",
  },
  {
    id: 1,
    title: "Feedlyz",
    description:
      "Feedlyz is a feedback collection tool that helps you gather insights from your users effortlessly.",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "Shadcn-ui",
      "Prisma",
      "PostgreSQL",
      "Express",
      "Jwt-Auth",
    ],
    github: "",
    live: "",
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
      "Cloudinary",
      "Express",
      "Jwt-Auth",
    ],
    github: "https://github.com/hiarun02/rapidReport",
    live: "https://rapidreport.hiarun.me/",
    image: "/Projects-image/rapidReport.png",
    category: "full stack",
    status: "Live",
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
      "Redis",
      "Cloudinary",
      "JwtAuth",
    ],
    github: "https://github.com/hiarun02/Jobify",
    live: "https://jobify.hiarun.me/",
    image: "/Projects-image/jobify.png",
    category: "fullstack",
    status: "Live",
  },
  {
    id: 5,
    title: "PaletteCraft",
    description:
      "PaletteCraft is an official Adobe Express add-on that helps you create, explore, and apply beautiful, human-inspired color palettes directly in your designs.",
    techStack: ["Javascript", "React", "Gen ai", "Adobe/ccWeb"],
    github: "https://github.com/hiarun02/palettecraft",
    live: "https://new.express.adobe.com/add-ons?addOnId=wim1m902m",
    image: "/Projects-image/paletteCraft.png",
    category: "plugins",
    status: "Live",
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
    github: "https://github.com/hiarun02/TwiFake",
    live: "https://twifake.hiarun.me/",
    image: "/Projects-image/twifale.png",
    category: "frontend",
    status: "Live",
  },
  {
    id: 10,
    title: "Clarify",
    description:
      "Clarify is a image enhancer web application powered by (PicWish API) that enhances and upscales your images with just one click",
    techStack: ["React", "tailwindcss", "PicWish Api"],
    github: "https://github.com/hiarun02/Clarify",
    live: "https://clarify.hiarun.me/",
    image: "/Projects-image/codeSnippet.png",
    category: "frontend",
    status: "Live",
  },
];
