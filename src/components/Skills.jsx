const Skills = () => {
  const technologies = [
    {name: "Javascript", image: "/icons/js.svg"},
    {name: "Typescript", image: "/icons/ts.svg"},
    {name: "React", image: "/icons/react.png"},
    {name: "Tailwindcss", image: "/icons/tailwindcss.png"},
    {name: "MongoDB", image: "/icons/mongodb.png"},
    {name: "Express", image: "/icons/expressjs.png"},
    {name: "Nodejs", image: "/icons/nodejs.png"},
    {name: "Git", image: "/icons/git.png"},
  ];

  return (
    <section className="mb-5 mt-6">
      <div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-lg font-bold mb-2"> Skills & Tools :</h2>
          <div className="flex flex-wrap gap-2 ">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-lg text-center px-2 py-2 border border-[#d2bb77]  text-sm font-mono cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xs flex items-center gap-2"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="custom-skill-icon"
                />
                <span className="text-xs font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .custom-skill-icon {
            width: 20px;
            height: 20px;
            object-fit: contain;
            display: block;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
