// import {FaRegHeart} from "react-icons/fa";
// import {SiBuymeacoffee} from "react-icons/si";

/* eslint-disable react/no-unescaped-entities */

import {MdOutgoingMail} from "react-icons/md";
import {FaXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {JSX} from "react";

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

export default function Contact() {
  return (
    <section className="mb-4">
      <h2 className="text-lg font-bold mb-2">Reach out to me.</h2>

      <p className="mt-2 ">
        Reach out via email or Twitter. I'm open to freelance gigs or full-time
        roles. let’s chat if you’ve got something in mind!
      </p>

      <div className="flex gap-4 mt-4 w-fit sm:font-normal">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="select-none bg-zinc-950 border border-zinc-700 rounded-md px-1.5 py-1.5 text-[1.35rem] hover:bg-zinc-900 transition-all duration-100"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
      {/* <div className="mt-2 mb-5">
        <a
          href="https://cal.com/hiarun01/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-fit select-none transition-colors duration-100 flex flex-row gap-1.5 items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-2  py-1 rounded-md"
        >
          <span> Schedule a meet</span>
        </a>
      </div> */}
    </section>
  );
}
