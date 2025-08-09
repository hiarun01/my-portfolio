/* eslint-disable react/no-unescaped-entities */
import {JSX} from "react";
import Skills from "./Skills";
import {Github, Linkedin, Mail, X} from "lucide-react";
import {SupportMe} from "./SupportMe";

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
      <div className="mt-5">
        <h2 className="text-lg font-bold">About Me</h2>
        <p className="mt-1 text-1xl ">
          A web dev, I love building things that solves real world problems.
          which is why most of what I build is open source.
        </p>
        <p className="mt-2 text-1xl">
          My journey into web development started with curiosity and quickly
          turned into a full-blown passion. Since then, I’ve been building,
          experimenting, and learning something new every day.
        </p>
        <div>
          <h2 className="text-lg font-bold mt-2 ">Hire Me</h2>
          <p className="mt-1">
            I’m currently available for internships, full-time opportunities,
            and freelance projects. If you’re looking for someone passionate,
            skilled, and ready to contribute, I’m here to help bring your ideas
            to life!
          </p>
          <a
            href="mailto:hiarun.works@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 cursor-pointer w-fit select-none transition-colors duration-100 flex flex-row gap-1.5 items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-2 py-1 rounded-md"
          >
            <span>Hire Me</span>
          </a>
        </div>
        <SupportMe />
      </div>

      <Skills />
    </div>
  );
}
