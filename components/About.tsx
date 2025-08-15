/* eslint-disable react/no-unescaped-entities */
import {JSX} from "react";
import Skills from "./Skills";

import {MdOutgoingMail} from "react-icons/md";
import {FaXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

type Social = {
  href: string;
  label: string;
  icon: JSX.Element;
};

const socials: Social[] = [
  {
    href: "mailto:hiarun.works@gmail.com",
    label: "Email",
    icon: <MdOutgoingMail />,
  },
  {
    href: "https://x.com/hiarun01",
    label: "X",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/hiarun01/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/hiarun01",
    label: "GitHub",
    icon: <FaGithub />,
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
            className="social-card"
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
            className="btn"
          >
            <span>Hire Me</span>
          </a>
        </div>
      </div>

      <Skills />
    </div>
  );
}
