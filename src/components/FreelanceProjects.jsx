import {ExternalLink} from "lucide-react";
import {FreelanceProj} from "../Api/FreelanceProjectsAPi";
const FreelanceProjects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Freelance Projects
      </h2>
      <div className="space-y-8">
        {FreelanceProj.map((FreelanceProj, id) => {
          return (
            <div
              className="border-l-2 rounded-2xl border-gray-200 pl-4 "
              key={id}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {FreelanceProj.title}
              </h3>
              <p className="text-gray-600">{FreelanceProj.durationAndInfo}</p>
              <div className="mt-4 text-gray-600">
                <p className="mb-4">{FreelanceProj.description}</p>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href={FreelanceProj.live}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
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
