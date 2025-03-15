import {ExternalLink, Github} from "lucide-react";
import {projects} from "../../../Api/ProjectsApi";

const ProjectsSection = () => {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-6">
          Personal Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, id) => {
            return (
              <div
                className="border-l-2 rounded-2xl text-[#ffdb70] pl-4 "
                key={id}
              >
                <h3 className="text-lg font-semibold text-[#fafafa]">
                  {project.title}
                </h3>
                <p className="text-[#d6d6d6]">{project.durationAndInfo}</p>
                <div className="mt-4 text-[#d6d6d6]">
                  <p className="mb-4">{project.description}</p>
                </div>

                <div className="mt-4 flex gap-4">
                  <a
                    href={project.github}
                    className="text-[#ffdb70] hover:hover:text-[#d2bb77] flex items-center gap-1"
                  >
                    <Github size={16} />

                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
