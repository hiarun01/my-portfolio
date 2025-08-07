import {useState} from "react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
};

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
  },
  {
    title: "CodeSnippet",
    description:
      "CodeSnippet is a simple tool that lets you create and download beautiful images of your code.",
    techStack: ["React", "tailwindcss", "Shadcn-ui", "html2canvas"],
    github: "https://github.com/hiarun01/CodeSnippet",
    live: "https://codesnippet.hiarun.me/",
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
  },
  {
    title: "Codalyzer",
    description:
      "Codalyzer – A smart code reviewer powered by GenAI that helps you analyze, review, and improve your code with AI-driven insights.",
    techStack: ["React", "tailwindcss", "Shadcn-ui", "GenAi api", "Express"],
    github: "https://github.com/hiarun01/codalyzer",
    live: "https://codalyzer.hiarun.me/",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number>(2);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, personalProjects.length));
  };

  return (
    <div className="">
      <section className="mb-5">
        <h2 className="text-lg font-bold mb-3 ">Proof-of-Work</h2>

        <div className="flex flex-col gap-10">
          {personalProjects.slice(0, visibleProjects).map((project, i) => (
            <div key={i} className="relative group">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#ffdb70] rounded-full"></span>
                    {project.title}
                  </h3>
                  <p className=" text-base mb-2">{project.description}</p>
                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="border border-[#ffdb70] text-[#ffdb70] px-1 rounded-full text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-5 mt-3">
                    <a
                      href={project.live}
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border rounded-2xl px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live</span>
                    </a>
                    <a
                      href={project.github}
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border rounded-2xl px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-full w-full h-px bg-gradient-to-r from-[#ffdb70]/60 via-[#d2bb77]/30 to-transparent mt-6"></div>
            </div>
          ))}
        </div>

        {visibleProjects < personalProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
            >
              <span>Load More</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
