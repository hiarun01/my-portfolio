import {motion} from "framer-motion";
import {useState} from "react";
import {personalProjects} from "../../data/ProjectsData";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, personalProjects.length));
  };

  return (
    <motion.div
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
        <h2 className="text-lg font-bold mb-3 ">Proof-of-Work</h2>

        <div className="flex flex-col gap-10">
          {personalProjects.slice(0, visibleProjects).map((project, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3 + i * 0.1, duration: 0.5}}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-medium mb-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#ffdb70] rounded-full"></span>
                    {project.title}
                  </h2>
                  <p className="text-[#d6d6d6] text-base mb-2">
                    {project.description}
                  </p>
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
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
                    >
                      <span>Live</span>
                    </a>
                    <a
                      href={project.github}
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
                    >
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-full w-full h-px bg-gradient-to-r from-[#ffdb70]/60 via-[#d2bb77]/30 to-transparent mt-6"></div>
            </motion.div>
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
      </motion.section>
    </motion.div>
  );
};

export default Projects;
