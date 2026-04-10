import Image from "next/image";
import {useState} from "react";
import {personalProjects} from "./Data/ProjectsData";

import {ExternalLink, Github} from "lucide-react";
import {Button} from "./ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";

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

        <div className="space-y-3 rounded-lg mt-3">
          {personalProjects.slice(0, visibleProjects).map((project, i) => (
            <Card
              key={i}
              className="group overflow-hidden border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900/70 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffdb70]/35"
            >
              <CardHeader className="p-0">
                <div className="grid gap-0 md:grid-cols-[280px_minmax(0,1fr)]">
                  <div className="relative h-44 overflow-hidden border-b border-zinc-800 md:h-auto md:min-h-[190px] md:border-b-0 md:border-r">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,219,112,0.35),_transparent_45%),linear-gradient(135deg,_rgba(39,39,42,1),_rgba(9,9,11,1))]">
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)]" />
                        <div className="relative flex h-full items-end p-6">
                          <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-[#ffdb70]/80">
                              Featured build
                            </p>
                            <h3 className="mt-3 max-w-xs text-2xl font-semibold text-white">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <CardTitle className="text-xl font-semibold text-white">
                          {project.title}
                        </CardTitle>
                        {project.status && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-[#ffdb70]/30 bg-[#ffdb70]/12 px-3 py-1 text-sm text-[#ffdb70]">
                            <span className="h-2 w-2 rounded-full bg-[#ffdb70]" />
                            {project.status}
                          </span>
                        )}
                      </div>

                      <p className="line-clamp-3 max-w-2xl text-sm leading-6 text-zinc-300">
                        {project.description}
                      </p>

                      {project.techStack && (
                        <div className="mt-3 flex items-center gap-1.5 overflow-hidden whitespace-nowrap">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-zinc-200 transition-colors duration-200 group-hover:border-[#ffdb70]/30 group-hover:text-[#ffdb70]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="inline-flex rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-zinc-200 transition-colors duration-200 group-hover:border-[#ffdb70]/30 group-hover:text-[#ffdb70]">
                              more +
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <CardContent className="p-0 pt-4">
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.live}
                          className="btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center gap-2 uppercase text-sm">
                            Live
                            <ExternalLink width={16} height={16} />
                          </span>
                        </a>
                        <a
                          href={project.github}
                          className="btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center gap-2 uppercase text-sm">
                            Github
                            <Github width={16} height={16} />
                          </span>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {visibleProjects < personalProjects.length && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={loadMore}
              className="w-full border-zinc-700 bg-zinc-950 text-zinc-200 hover:border-[#ffdb70]/40 hover:bg-zinc-900 hover:text-[#ffdb70]"
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
