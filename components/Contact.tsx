/* eslint-disable react/no-unescaped-entities */

import {MdOutgoingMail} from "react-icons/md";
import {FaXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FiCalendar, FiArrowUpRight} from "react-icons/fi";
import {JSX} from "react";

type Social = {
  href: string;
  label: string;
  icon: JSX.Element;
  description: string;
  color: string;
};

const socials: Social[] = [
  {
    href: "mailto:hiarun.works@gmail.com",
    label: "Email",
    icon: <MdOutgoingMail />,
    description: "Drop me a line",
    color: "hover:text-red-400 hover:border-red-400/50",
  },
  {
    href: "https://x.com/hiarun01",
    label: "X",
    icon: <FaXTwitter />,
    description: "Follow me on X",
    color: "hover:text-blue-400 hover:border-blue-400/50",
  },
  {
    href: "https://www.linkedin.com/in/hiarun01/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    description: "Let's connect",
    color: "hover:text-blue-500 hover:border-blue-500/50",
  },
  {
    href: "https://github.com/hiarun01",
    label: "GitHub",
    icon: <FaGithub />,
    description: "Check my code",
    color: "hover:text-purple-400 hover:border-purple-400/50",
  },
];

export default function Contact() {
  return (
    <section className="mb-8">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-white">Let's Connect</h2>
        <p className="text-zinc-300 text-base leading-relaxed">
          I'm always excited to collaborate on interesting projects or discuss
          new opportunities. Whether you have a freelance gig, full-time role,
          or just want to chat about tech, feel free to reach out!
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-zinc-900 border border-zinc-700 rounded-lg p-4 transition-all duration-300 hover:bg-zinc-800 ${social.color} hover:shadow-lg`}
          >
            <div className="flex items-center gap-3">
              <div className="text-xl text-zinc-400 group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white group-hover:text-current transition-colors">
                  {social.label}
                </h3>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {social.description}
                </p>
              </div>
              <FiArrowUpRight className="text-zinc-500 group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </a>
        ))}
      </div>

      {/* Schedule Meeting CTA */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
              <FiCalendar className="text-[#ffdb70]" />
              Quick Chat?
            </h3>
            <p className="text-zinc-300 text-sm">
              Book a 15-minute call to discuss your project or just say hello.
            </p>
          </div>
          <a
            href="https://cal.com/hiarun01/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffdb70] hover:bg-[#ffdb70]/90 text-black px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:shadow-lg hover:shadow-[#ffdb70]/20 group"
          >
            Schedule Meeting
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
