import {GithubIcon, Linkedin, Mail, X} from "lucide-react";
import Skills from "./Skills";

const socials = [
  {
    href: "mailto:hiarun.works@gmail.com",
    label: "Email",
    icon: <Mail size={25} />,
  },
  {
    href: "https://x.com/hiarun01",
    label: "Twitter/X",
    icon: <X size={25} />,
  },
  {
    href: "https://www.linkedin.com/in/hiarun01/",
    label: "LinkedIn",
    icon: <Linkedin size={25} />,
  },
  {
    href: "https://github.com/hiarun01",
    label: "GitHub",
    icon: <GithubIcon size={25} />,
  },
];

const About = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold ">Hey👋, I'm Arun kumar</h1>
      <div className="flex gap-5 mt-3 w-fit sm:font-normal">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="text-[#ffdb70] hover:text-[#d2bb77] "
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
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
