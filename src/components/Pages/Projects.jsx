import {motion} from "framer-motion";

const Projects = () => {
  const personalProjects = [
    {
      Id: "1",
      title: "Chattx",
      description: "building : Chattx, a real-time chat app.",
      github: "https://github.com/hiarun01/chattx",
      live: "https://chattx.vercel.app",
    },
    {
      Id: "2",
      title: "CodeSnippet",
      description:
        "CodeSnippet – CodeSnippet is a simple tool that lets you create and download beautiful images of your code.",
      github: "https://github.com/hiarun01/CodeSnippet",
      live: "https://hi-code-snippet.vercel.app/",
    },
    {
      Id: "3",
      title: "Clarify",
      description:
        "Clarify is an Image Enhancer web application powered by AI API that enhances and upscales your images with just one click.",
      github: "https://github.com/hiarun01/clarify",
      live: "https://hi-clarify.vercel.app/",
    },
    {
      Id: "4",
      title: "Jobify",
      description:
        "Jobify is a job portal where people can find and apply for jobs, and companies can post job openings. It’s built with a clean and user-friendly design, making the job search and hiring process easy for everyone.",
      github: "https://github.com/hiarun01/Jobify",
      live: "https://hi-jobify.vercel.app/",
    },
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto px-5"
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.7, ease: "easeOut"}}
    >
      <motion.section
        className="mb-10"
        initial={{opacity: 0, x: -30}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.2, duration: 0.6}}
      >
        <h2 className="text-2xl font-bold text-[#fafafa] mb-8 border-l-2 pl-2 rounded-2xl border-[#d2bb77]">
          Personal Projects
        </h2>
        <div className="flex flex-col gap-10">
          {personalProjects.map((project, id) => (
            <motion.div
              key={id}
              className="relative group"
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3 + id * 0.1, duration: 0.5}}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#ffdb70] mb-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#ffdb70] rounded-full"></span>
                    {project.title}
                  </h3>
                  <p className="text-[#d6d6d6] text-base mb-2">
                    {project.description}
                  </p>
                  <div className="flex gap-5 mt-5">
                    <a
                      href={project.github}
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
                    >
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
                    >
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-full w-full h-px bg-gradient-to-r from-[#ffdb70]/60 via-[#d2bb77]/30 to-transparent mt-6"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Projects;
