import {useState} from "react";
import {personalProjects} from "./Data/ProjectsData";

import {BsGithub} from "react-icons/bs";

import {ExternalLinkIcon} from "lucide-react";
import {Button} from "./ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 2, personalProjects.length));
  };

  return (
    <div>
      <section className="mb-5">
        <h2 className="text-lg font-bold mt-3">Proof-of-Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg mt-3">
          {personalProjects.slice(0, visibleProjects).map((project, i) => (
            <Card
              key={i}
              className="select-none bg-transparent duration-100 hover:bg-zinc-900"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">
                    {project.title}
                  </CardTitle>
                  {project.status && (
                    <span className="text-xs text-zinc-400 border border-zinc-600 px-2 py-0.5 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="mb-4 text-zinc-300">{project.description}</p>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="border border-[#ffdb70] text-[#ffdb70] px-2 py-0.2 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 ">
                  <a
                    href={project.live}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-2 uppercase text-sm">
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
                    <span className="flex items-center gap-2 uppercase">
                      Code
                      <BsGithub width={16} height={16} />
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleProjects < personalProjects.length && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={loadMore}
              className="w-full hover:bg-zinc-900"
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
