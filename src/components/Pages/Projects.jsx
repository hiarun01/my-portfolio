const Projects = () => {
  const personalProjects = [
    {
      Id: "1",
      title: "AI Image Enhancer",
      description:
        "AI Image Enhancer is a powerful, AI-driven web application that enhances and upscales your images with just one click.",
      github: "https://github.com/hiarun01/ai-image-enhancer",
      live: "https://hi-ai-image-enhancer.vercel.app/",
    },
    {
      Id: "2",
      title: "Jobify",
      description:
        "Jobify is a job portal where people can find and apply for jobs, and companies can post job openings. It’s built with a clean and user-friendly design, making the job search and hiring process easy for everyone.",
      github: "https://github.com/hiarun01/Jobify",
      live: "https://hi-jobify.vercel.app/",
    },

    {
      Id: "3",
      title: "Country Explorer",
      description:
        "Country Explorer is a web application that lets users discover detailed information about countries from around the world including population, region, capital, flag, and more.",
      github: "https://github.com/hiarun01/Country-Explorer",
      live: "https://country-explorer-kappa.vercel.app/",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-5">
      {/* personal projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-5 border-l-2 pl-2 rounded-3xl border-[#d2bb77]">
          Personal Projects
        </h2>
        <div className="space-y-8">
          {personalProjects.map((project, id) => {
            return (
              <div className="" key={id}>
                <h3 className="text-lg font-semibold text-[#fafafa] border-l-2 pl-2 rounded-2xl w-fit border-[#d2bb77]">
                  {project.title}
                </h3>
                <div className="mt-1 text-[#d6d6d6]">
                  <p className="mb-4">{project.description}</p>
                </div>

                <div className="flex gap-5">
                  <a
                    href={project.github}
                    className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
                  >
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
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
