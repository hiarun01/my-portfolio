/* eslint-disable react/no-unescaped-entities */
import {JSX} from "react";
import Skills from "./Skills";
import {Github, Linkedin, Mail, X} from "lucide-react";

type Social = {
  href: string;
  label: string;
  icon: JSX.Element;
};

const socials: Social[] = [
  {
    href: "mailto:hiarun.works@gmail.com",
    label: "Email",
    icon: <Mail size={20} />,
  },
  {
    href: "https://x.com/hiarun01",
    label: "X",
    icon: <X size={20} />,
  },
  {
    href: "https://www.linkedin.com/in/hiarun01/",
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
  },
  {
    href: "https://github.com/hiarun01",
    label: "GitHub",
    icon: <Github size={20} />,
  },
];

export default function About() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold ">Hey👋, I'm Arun kumar</h1>
      <div className="flex gap-4 mt-4 w-fit sm:font-normal">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="text-[#ffdb70] hover:text-[#d2bb77] border-1 px-2 py-2 rounded-lg shadow-2xl "
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
}
