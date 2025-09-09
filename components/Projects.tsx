import {personalProjects} from "./Data/data";
import {FiExternalLink} from "react-icons/fi";
import Image from "next/image";
import {useState} from "react";
import {GrGithub} from "react-icons/gr";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const displayedProjects = personalProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < personalProjects.length;

  const loadMoreProjects = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 2, personalProjects.length));
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="">
      <section className="mb-5">
        <h2 className="text-lg font-bold mb-5">Proof-of-Work</h2>

        {/* Projects Grid - Enhanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayedProjects.map((project, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden hover:border-[#ffdb70] hover:shadow-lg hover:shadow-[#ffdb70]/10 transition-all duration-300 group transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-zinc-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <div className="text-4xl font-bold text-[#ffdb70] opacity-50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ffdb70] transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <span className="px-2.5 py-1 bg-zinc-800 text-[#ffdb70] rounded-full text-xs font-medium border border-zinc-600 whitespace-nowrap ml-2">
                    {project.category === "webapp"
                      ? "Web App"
                      : project.category === "fullstack"
                      ? "Full Stack"
                      : project.category === "frontend"
                      ? "Frontend"
                      : project.category === "ai"
                      ? "AI"
                      : project.category === "plugins"
                      ? "Plugins"
                      : project.category}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-zinc-800 text-[#ffdb70] rounded-full text-xs border border-zinc-600 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs border border-zinc-600">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-zinc-600 hover:border-zinc-500"
                  >
                    <GrGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#ffdb70] hover:bg-[#ffdb70]/90 text-black px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#ffdb70]/20"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreProjects}
              disabled={isLoading}
              className="bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-800 text-white px-3 py-2 rounded-lg font-medium transition-all duration-200 border border-zinc-600 hover:border-[#ffdb70] hover:text-[#ffdb70] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-2 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Load More Projects
                  <span className="bg-[#ffdb70] text-black px-2 py-0.5 rounded-full text-xs font-bold">
                    {personalProjects.length - visibleProjects}
                  </span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Show All Projects Loaded Message */}
        {!hasMoreProjects && personalProjects.length > 3 && (
          <div className="flex justify-center mt-8">
            <div className="text-zinc-400 text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ffdb70] rounded-full" />
              All projects loaded ({personalProjects.length} total)
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
