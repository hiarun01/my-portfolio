const Projects = () => {
  const projects = [
    {
      Id: "1",
      title: "hi-rescue",
      durationAndInfo: "Personal Mega Project - 2025",
      description:
        "Hi-resuce is a web platform that makes animal rescue faster and easier. Users can report animal-related incidents by sharing photos, details, and exact locations. The platform instantly alerts nearby volunteers, helping them respond quickly. With real-time notifications and a network of dedicated rescuers, hi-rescue ensures that animals in need get timely help, improving rescue efforts and saving more lives",
      github: "https://github.com/hiarun01/hi-rescue",
      live: "https://hi-rescue.vercel.app/",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto px-5">
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
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
