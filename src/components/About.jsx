/* eslint-disable react/no-unescaped-entities */
import {Github, Linkedin, Mail, X} from "lucide-react";
import {motion} from "framer-motion";

const About = () => {
  const text = "Arun Kumar".split("");
  return (
    <div>
      <header className="max-w-4xl mx-auto px-6 py-12 ">
        <h1 className="text-4xl font-bold">
          {text.map((el, i) => (
            <motion.span
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                duration: 0.25,
                delay: i / 5,
              }}
              key={i}
            >
              {el}
            </motion.span>
          ))}
        </h1>
        <p className="mt-4 text-xl text-[#d6d6d6]">
          <strong>Web dev & Freelancer</strong>
        </p>
        <p className="mt-2 text-[#d6d6d6] ">
          Hey, stranger 👋 I'm <strong>Arun Kumar</strong>, Passionate about
          creating beautiful, responsive, and user-friendly web applications
          <br />I love building stuff that solves real world problems which
          is probably why everything I build is Open Source.
        </p>
        <p className="mt-2 text-[#d6d6d6]">
          I am always open to new opportunities and connections. Whether you're
          looking for a skilled web developer for your next project or just want
          to network, feel free to reach out. Let's create something amazing
          together.
        </p>
        <div className="flex gap-7 mt-6 border-2 border-solid border-[#ffdb70] rounded-2xl w-fit py-2 px-5">
          <a
            href="mailto:hey.arunkumar05@gmail.com"
            className="text-[#ffdb70] hover:text-[#d2bb77] "
          >
            <Mail size={20} />
          </a>
          <a href="https://x.com/hiarun01" className="text-[#ffdb70]">
            <X size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hiarun01/"
            className="text-[#ffdb70] hover:text-[#d2bb77]"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/hiarun01"
            className="text-[#ffdb70] hover:text-[#d2bb77]"
          >
            <Github size={20} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default About;
