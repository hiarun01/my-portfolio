import Image from "next/image";
import {useState} from "react";
import {personalProjects} from "./Data/ProjectsData";

import {Github, Link2} from "lucide-react";
import {Button} from "./ui/button";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 2, personalProjects.length));
  };

  return (
    <div>
      <section className="mb-5">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="mt-2 text-lg font-bold text-white">Proof-of-Work</h2>
          </div>
        </div>

        <div className="mt-3 space-y-5 rounded-lg">
          {personalProjects.slice(0, visibleProjects).map((project, i) => (
            <article
              key={i}
              className="group mx-auto w-full rounded-3xl border border-zinc-800 bg-zinc-900/50 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/80 sm:w-full sm:max-w-none"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md border border-zinc-700 bg-zinc-950">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="28px"
                        />
                      </div>
                      <h3 className="min-w-0 text-base font-semibold text-white sm:text-lg">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 self-start pt-0.5">
                      <a
                        href={project.live}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900/70 text-zinc-200 transition-colors duration-200 hover:border-[#ffdb70]/40 hover:text-[#ffdb70]"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live link`}
                      >
                        <Link2 className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={project.github}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-900/70 text-zinc-200 transition-colors duration-200 hover:border-[#ffdb70]/40 hover:text-[#ffdb70]"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {project.description}
                  </p>

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-zinc-300">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleProjects < personalProjects.length && (
          <div className="flex justify-center mt-5">
            <Button
              variant="outline"
              onClick={loadMore}
              className="w-full border-zinc-700 bg-zinc-900/50 p-4 hover:bg-zinc-900/80"
            >
              Load More
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
