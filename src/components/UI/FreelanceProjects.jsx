import {ExternalLink} from "lucide-react";
import {FreelanceProj} from "../../Api/FreelanceProjectsAPi";
const FreelanceProjects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-[#fafafa] mb-6">
        Freelance Projects
      </h2>
      <div className="space-y-8">
        {FreelanceProj.map((FreelanceProj, id) => {
          return (
            <div
              className="border-l-2 rounded-lg text-[#ffdb70] pl-4 "
              key={id}
            >
              <h3 className="text-lg font-semibold text-[#fafafa]">
                {FreelanceProj.title}
              </h3>
              <p className="text-[#d6d6d6]">{FreelanceProj.durationAndInfo}</p>
              <div className="mt-4 text-[#d6d6d6]">
                <p className="mb-4">{FreelanceProj.description}</p>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href={FreelanceProj.live}
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
  );
};

export default FreelanceProjects;
