import Image from "next/image";
import UpdatedDate from "./UpdatedDate";
import IndiaTime from "./IndiaTime";
// import AvailableTag from "./AvailableTag";
// import {socials} from "./Data/SocialData";
// rounded-lg border border-zinc-700

export default function About() {
  return (
    <div className="">
      {/* Profile Header */}
      {/* <AvailableTag /> */}
      <div className="mb-5 rounded-xl border border-zinc-800/80 bg-gradient-to-r from-zinc-900/60 via-zinc-900/30 to-transparent px-2 py-3">
        {/* Profile Content */}
        <div className="flex items-center gap-5">
          {/* Profile Image */}
          <div className="flex-shrink-0 ">
            <div
              className="w-15 h-15 overflow-hidden rounded-xl border-2
             border-zinc-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zinc-800/50 hover:border-zinc-500 cursor-pointer group"
            >
              <Image
                src="/pfp2.jpeg"
                alt="Arun Kumar Profile"
                width={100}
                height={100}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="lg:text-xl text-lg font-extrabold text-white">
                Arun
              </h2>
            </div>

            <p className="mt-0.5 flex items-center text-sm text-zinc-300">
              <span className="inline-flex" />
              @hiarun02
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="mb-6">
        {/* Date and Time Display */}
        <div className=" flex items-center gap-2 mb-2">
          <UpdatedDate />
          <IndiaTime />
        </div>
        <p className="text-zinc-300  text-base leading-relaxed mb-4">
          Full stack developer who loves building things that feel smooth, work
          fast, and look good. I specialize in{" "}
          <span className="text-[#ffdb70] hover:text-[#ffd100] underline underline-offset-4 transition-colors duration-200">
            Typescript
          </span>{" "}
          ,{" "}
          <span className="text-[#ffdb70] hover:text-[#ffd100] underline underline-offset-4 transition-colors duration-200">
            ReactJS
          </span>{" "}
          ,{" "}
          <span className=" text-[#ffdb70] hover:text-[#ffd100] underline underline-offset-4 transition-colors duration-200">
            NextJS
          </span>{" "}
          ,{" "}
          <span className=" text-[#ffdb70] hover:text-[#ffd100] underline underline-offset-4 transition-colors duration-200">
            ExpressJS
          </span>{" "}
          and{" "}
          <span className="text-[#ffdb70] hover:text-[#ffd100] underline underline-offset-4 transition-colors duration-200">
            PostgreSQL
          </span>{" "}
        </p>

        <p className="text-zinc-300  text-base leading-relaxed mb-2">
          I build full stack web apps, AI features, and developer tools learning
          by shipping and iterating. spent the past year improving in
          production, not tutorials.
        </p>

        <p className="text-zinc-300  text-base leading-relaxed mb-2"></p>

        <p className="text-zinc-300 leading-relaxed mt-4">
          You can find me on{" "}
          <a
            href="https://x.com/hiarun02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffdb70] hover:text-[#ffd100] underline underline-offset-4 transition-colors duration-200"
          >
            X
          </a>{" "}
          , or reach me via{" "}
          <a
            href="mailto:hiarun.works@gmail.com"
            className="text-[#ffdb70] hover:text-[#ffd100] underline underline-offset-4 transition-colors duration-200"
          >
            email
          </a>
          .
        </p>
      </div>
    </div>
  );
}
