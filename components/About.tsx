// import {JSX} from "react";
import Image from "next/image";
import Skills from "./Skills";

// import {FaXTwitter} from "react-icons/fa6";
// import {FaLinkedin} from "react-icons/fa";
// import {FaGithub} from "react-icons/fa";
// import {SiGmail} from "react-icons/si";

// type Social = {
//   href: string;
//   label: string;
//   icon: JSX.Element;
// };

// const socials: Social[] = [
//   {
//     href: "mailto:hiarun.works@gmail.com",
//     label: "Email",
//     icon: <SiGmail />,
//   },
//   {
//     href: "https://x.com/hiarun01",
//     label: "X",
//     icon: <FaXTwitter />,
//   },

//   {
//     href: "https://github.com/hiarun01",
//     label: "GitHub",
//     icon: <FaGithub />,
//   },
// ];

export default function About() {
  return (
    <div className="">
      {/* Available Tag */}
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-green-400 text-sm font-bold">
          Available for work
        </span>
      </div>

      {/* Profile Header */}
      <div className="flex items-center lg:gap-6 gap-5 rounded-lg border border-zinc-700 lg:p-2 p-2 mb-5">
        {/* Profile Image */}
        <div className="flex-shrink-0 ">
          <div
            className="w-20 h-20 overflow-hidden rounded-lg border-3
           border-zinc-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-zinc-800/50 hover:border-zinc-500 cursor-pointer group"
          >
            <Image
              src="/pfp.jpg"
              alt="Arun Kumar Profile"
              width={100}
              height={100}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="">
          <div className="mb-1">
            <h2 className="lg:text-2xl text-lg font-extrabold text-white">
              Arun Kumar
            </h2>
          </div>

          <p className="text-zinc-300 text-sm mb-2">@hiarun02</p>

          {/* Social Links */}
          {/* <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-[#ffdb70] hover:bg-zinc-700 transition-all duration-200"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div> */}
        </div>
      </div>

      {/* About Content */}
      <div className="mb-6">
        <p className="text-zinc-300  text-base leading-relaxed mb-2 select-none">
          I’m a full-stack developer who loves building things that feel smooth,
          work fast, and look good. I specialize in React, Next.js, and
          Expressjs.
        </p>
      </div>
      <Skills />
    </div>
  );
}
