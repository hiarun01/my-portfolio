// import {FaRegHeart} from "react-icons/fa";
// import {SiBuymeacoffee} from "react-icons/si";

/* eslint-disable react/no-unescaped-entities */

import {FaXTwitter} from "react-icons/fa6";
// import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {JSX} from "react";
import {SiGmail} from "react-icons/si";

type Social = {
  href: string;
  label: string;
  icon: JSX.Element;
};

const socials: Social[] = [
  {
    href: "mailto:hiarun.works@gmail.com",
    label: "Email",
    icon: <SiGmail />,
  },
  {
    href: "https://x.com/hiarun01",
    label: "X",
    icon: <FaXTwitter />,
  },
  // {
  //   href: "https://www.linkedin.com/in/hiarun01/",
  //   label: "LinkedIn",
  //   icon: <FaLinkedin />,
  // },
  {
    href: "https://github.com/hiarun01",
    label: "GitHub",
    icon: <FaGithub />,
  },
];

export default function Contact() {
  return (
    <section className="mb-4 border-t border-zinc-700 pt-5">
      <h2 className="text-lg font-bold mb-2">Reach out to me.</h2>

      <p className="mt-2 ">
        Reach out via email or Twitter. I'm open to freelance gigs or full-time
        roles. let’s chat if you’ve got something in mind!
      </p>

      <div className="flex gap-4 mt-4 w-fit itme sm:font-normal">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-[#ffdb70] hover:bg-zinc-700 transition-all duration-200"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
        <div className="">
          <a
            href="https://cal.com/hiarun01/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer w-fit select-none transition-colors duration-100 flex flex-row gap-1.5 items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-2  py-1 rounded-md"
          >
            <span> Schedule a meet</span>
          </a>
        </div>
      </div>
    </section>
  );
}
