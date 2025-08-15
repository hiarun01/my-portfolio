import {personalProjects} from "./Data/data";
import Link from "next/link";

export default function Projects() {
  // Show only first 3 projects on home page
  const featuredProjects = personalProjects.slice(0, 2);

  return (
    <div className="">
      <section className="mb-5">
        <h2 className="text-lg font-bold mb-5">Proof-of-Work</h2>

        <div className="flex flex-col gap-5">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className="relative group rounded-md p-3 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors duration-100 flex"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-medium flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-[#ffdb70] rounded-full"></span>
                      {project.title}
                    </h3>
                  </div>
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

        {/* View All Projects Button */}
        <div className="flex justify-center mt-8">
          <Link href="/projects" className="load-more group">
            <span>View All </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
