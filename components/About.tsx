import Image from "next/image";
import {socials} from "./Data/SocialData";
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
            className="w-25 h-25 overflow-hidden rounded-lg border-3
           border-zinc-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-zinc-800/50 hover:border-zinc-500 cursor-pointer group"
          >
            <Image
              src="/pfp.jpeg"
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
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-7 h-7 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-[#ffdb70] hover:bg-zinc-700 transition-all duration-200"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon && <social.icon />}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="mb-6">
        <p className="text-zinc-300  text-base leading-relaxed mb-4">
          Full stack developer who loves building things that feel smooth, work
          fast, and look good. I specialize in{" "}
          <span className="font-medium underline underline-offset-4  text-[#ffdb70] hover:text-[#ffd100] transition-colors duration-200">
            Typescript
          </span>{" "}
          ,{" "}
          <span className="font-medium underline underline-offset-4 text-[#ffdb70] hover:text-[#ffd100] transition-colors duration-200">
            ReactJS
          </span>{" "}
          ,{" "}
          <span className="font-medium underline underline-offset-4 text-[#ffdb70] hover:text-[#ffd100] transition-colors duration-200">
            NextJS
          </span>{" "}
          ,{" "}
          <span className="font-medium underline underline-offset-4 text-[#ffdb70] hover:text-[#ffd100] transition-colors duration-200">
            ExpressJS
          </span>{" "}
          and{" "}
          <span className="font-medium underline underline-offset-4 text-[#ffdb70] hover:text-[#ffd100] transition-colors duration-200">
            PostgreSQL
          </span>{" "}
        </p>
        <p className="text-zinc-300  text-base leading-relaxed mb-2">
          I’m also the founder of{" "}
          <a
            className="font-medium underline underline-offset-4 text-[#ffdb70] hover:text-[#ffd100] transition-colors duration-200"
            href="https://aurevixlabs.com/"
            target="_blank"
          >
            AurevixLabs
          </a>{" "}
          my personal internet lab where I build experimental products and
          developer tools
        </p>
      </div>
    </div>
  );
}
