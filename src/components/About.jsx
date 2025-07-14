import {GithubIcon, Linkedin, Mail, X} from "lucide-react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold ">Hey👋, I'm Arun kumar</h1>
      <div className="flex gap-3 mt-6 w-fit sm:font-normal">
        <a
          href="mailto:hiarun.works@gmail.com"
          className="text-[#ffdb70] hover:text-[#d2bb77] border px-2 py-2 rounded-md border-[#d2bb77] "
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://x.com/hiarun01"
          className="text-[#ffdb70] hover:text-[#d2bb77] border px-2 py-2 rounded-md border-[#d2bb77] "
          aria-label="Twitter/X"
        >
          <X size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/hiarun01/"
          className="text-[#ffdb70] hover:text-[#d2bb77] border px-2 py-2 rounded-md border-[#d2bb77] "
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/hiarun01"
          className="text-[#ffdb70] hover:text-[#d2bb77] border px-2 py-2 rounded-md border-[#d2bb77] "
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>
      </div>
      <p className="mt-5 text-1xl ">
        A web dev, I love building things that solves real world problems. which
        is why most of what I build is open source.
      </p>
      <p className="mt-5 text-1xl">
        My journey into web development started with curiosity and quickly
        turned into a full-blown passion. Since then, I’ve been building,
        experimenting, and learning something new every day.
      </p>

      <Skills />
    </div>
  );
};

export default About;
