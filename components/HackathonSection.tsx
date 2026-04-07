import Image from "next/image";
import {hackathons} from "./Data/HackathonData";

export default function HackathonSection() {
  return (
    <div className="">
      <section className="mb-8 mt-5">
        <h2 className="text-lg font-bold">Hackathons</h2>
        <p className="mb-5 mt-2 text-zinc-300 text-sm leading-relaxed">
          I like building under pressure and tight constraints. Some of the
          hackathons I&apos;ve shipped for
        </p>

        <div className="flex flex-col gap-3">
          {hackathons.map((hackathon, i) => {
            const isWinner = hackathon.title.includes(
              "Code with Kiro Hackathon",
            );
            const hasImageLogo = hackathon.logo?.startsWith("/");
            return (
              <div key={i} className="flex gap-4 group relative select-none">
                {/* Winner Badge */}
                {isWinner && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="text-yellow-400 text-sm from-neutral-200 animate-pulse ">
                      Winner
                    </div>
                  </div>
                )}

                {/* Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-zinc-800 border-zinc-700 rounded-lg flex items-center justify-center text-sm font-bold text-[#ffdb70] group-hover:bg-zinc-700 transition-colors duration-200">
                    {hasImageLogo ? (
                      <Image
                        src={hackathon.logo}
                        alt={hackathon.title + " Logo"}
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain rounded-full"
                      />
                    ) : (
                      <span className="text-base font-semibold">
                        {hackathon.logo || "?"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Date */}
                  <div className="text-sm text-zinc-400 mb-1">
                    {hackathon.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-white mb-1">
                    {hackathon.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-2">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
