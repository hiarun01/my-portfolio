import {useState} from "react";
import {personalProjects} from "./Data/data";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number>(2);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, personalProjects.length));
  };

  return (
    <div className="">
      <section className="mb-5">
        <h2 className="text-lg font-bold mb-3 ">Proof-of-Work</h2>

        <div className="flex flex-col gap-5">
          {personalProjects.slice(0, visibleProjects).map((project, i) => (
            <div
              key={i}
              className="relative group rounded-md p-3 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors duration-100 flex"
            >
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
                      href={project.github}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                    </a>

                    <a
                      href={project.live}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live</span>
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
              {" "}
              <span>Show all</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
