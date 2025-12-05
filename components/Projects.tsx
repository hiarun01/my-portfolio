import {useState} from "react";
import {personalProjects} from "./Data/ProjectsData";

import {BsGithub} from "react-icons/bs";

import {ExternalLinkIcon} from "lucide-react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 2, personalProjects.length));
  };

  return (
    <div>
      <section className="mb-5">
        <h2 className="text-lg font-bold mt-3">Proof-of-Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg mt-3">
          {personalProjects.slice(0, visibleProjects).map((project, i) => (
            <div
              key={i}
              className="mt-3 select-none w-fit transition-colors duration-100 flex flex-row gap-1.5 items-center border pt-4 border-b border-zinc-700 pb-4 px-3 hover:bg-zinc-800 rounded-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 ">
                <div className="flex-1">
                  <h2 className="text-lg font-medium mb-2 flex items-center gap-2">
                    {project.title}
                  </h2>
                  <span className="text-xs text-zinc-400 ">
                    {project.status}
                  </span>
                  <p className="mb-2">{project.description}</p>
                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="border border-[#ffdb70] text-[#ffdb70] px-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-5 mt-2">
                    <a
                      href={project.live}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex items-center gap-3">
                        Live
                        <ExternalLinkIcon width={16} height={16} />
                      </span>
                    </a>
                    <a
                      href={project.github}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex items-center gap-3">
                        Code
                        <BsGithub width={16} height={16} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < personalProjects.length && (
          <div className="flex justify-center mt-10">
            <button onClick={loadMore} className="load-more">
              <span>Load More</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
