import {skills} from "./Data/data";

// const technologies: Technology[] = [
//   {name: "Javascript", image: "/icons/js.svg"},
//   {name: "Typescript", image: "/icons/ts.svg"},
//   {name: "React", image: "/icons/react.png"},
//   {name: "Nextjs", image: "/icons/nextjs.png"},
//   {name: "Tailwindcss", image: "/icons/tailwindcss.png"},
//   {name: "MongoDB", image: "/icons/mongodb.png"},
//   {name: "Express", image: "/icons/expressjs.png"},
//   {name: "Nodejs", image: "/icons/nodejs.png"},
//   {name: "Git", image: "/icons/git.png"},
// ];

const Skills = () => {
  return (
    <section className="mb-5 mt-3">
      <div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-lg font-bold mb-2"> Skills & Tools :</h2>
          <div className="flex flex-wrap gap-1.5 ">
            {skills.map((skill) => (
              <a
                key={skill.id}
                className="select-none transition-colors duration-100 flex flex-row gap-1 items-center bg-zinc-900 border border-zinc-700 px-2  py-1 rounded-md cursor-pointer"
              >
                <skill.icon className="text-[#ffdb70] w-5 h-5 hover:text-[#ffd100]" />
                {skill.text}
              </a>
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
