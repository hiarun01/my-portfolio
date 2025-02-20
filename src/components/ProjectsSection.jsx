import {ExternalLink, Github} from "lucide-react";

const ProjectsSection = () => {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-lg font-semibold text-gray-900">
              E-commerce Platform
            </h3>
            <p className="text-gray-600">Personal Project • 2023</p>
            <div className="mt-4 text-gray-600">
              <p className="mb-4">
                A comprehensive e-commerce solution built using Next.js and
                TypeScript. The platform features a modern, responsive design
                that adapts seamlessly across all devices. I implemented a
                robust shopping cart system with real-time updates and
                integrated Stripe for secure payment processing.
              </p>
            </div>

            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Task Management App
            </h3>
            <p className="text-gray-600">Team Project • 2022</p>
            <div className="mt-4 text-gray-600">
              <p className="mb-4">
                A collaborative task management application that enables teams
                to organize and track their projects effectively. The app
                features a real-time synchronization system built with Firebase,
                allowing multiple users to collaborate simultaneously.
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
