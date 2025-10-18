/* eslint-disable react/no-unescaped-entities */
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
      {/* Profile Header */}
      <div className="flex items-center lg:gap-6 gap-5 mb-5 border bg-zinc-900  border-zinc-700 lg:p-3 p-2 rounded-lg">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-zinc-600">
            <Image
              src="/ProfileImage.jpg"
              alt="Arun Kumar Profile"
              width={100}
              height={100}
              className="w-full h-full object-cover"
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

          <p className="text-zinc-300 text-sm mb-2">@hiarun01</p>

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
        <p className="text-zinc-300 text-base leading-relaxed mb-2">
          Hi, Arun here! I'm a Full Stack Developer with hands-on experience in
          building web applications using technologies like React, Next.js,
          Express.js, PostgreSQL, and MongoDB. I also have a good UI sense you
          can check it out in my projects.
        </p>

        <p className="text-zinc-300 text-base leading-relaxed">
          Always open to internships, collaborations, and opportunities where I
          can contribute, learn, and create meaningful solutions together.
        </p>
      </div>
      <Skills />
    </div>
  );
}
