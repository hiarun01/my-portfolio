import {motion} from "framer-motion";
const Skills = () => {
  const technologies = [
    {name: "Javascript", image: "/icons/js.svg"},
    {name: "Typescript", image: "/icons/ts.svg"},
    {name: "React", image: "/icons/react.png"},
    {name: "MongoDB", image: "/icons/mongodb.png"},
    {name: "Express", image: "/icons/expressjs.png"},
    {name: "Nodejs", image: "/icons/nodejs.png"},
  ];

  return (
    <motion.section
      className="mb-5 mt-6"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.8, duration: 0.5}}
    >
      <div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-lg font-bold"> Generally i be with:</h2>
          <div className="flex flex-wrap gap-2 ">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-lg text-center px-4 py-2 border  border-[#d2bb77] text-sm font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center gap-2"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="custom-skill-icon"
                />
                <span>{tech.name}</span>
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
    </motion.section>
  );
};

export default Skills;
