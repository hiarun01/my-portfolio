import {hackathons} from "./Data/data";

export default function HackathonSection() {
  return (
    <div className="">
      <section className="mb-8 mt-5">
        <h2 className="text-lg font-bold mb-5">Hackathons</h2>

        <div className="flex flex-col gap-6">
          {hackathons.map((hackathon, i) => (
            <div key={i} className="flex gap-4 group">
              {/* Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-sm font-bold text-[#ffdb70] group-hover:bg-zinc-700 transition-colors duration-200">
                  {hackathon.logo}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Date */}
                <div className="text-sm text-zinc-400 mb-1">
                  {hackathon.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {hackathon.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                  {hackathon.description}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  {hackathon.github && (
                    <a
                      href={hackathon.github}
                      className="text-xs text-zinc-400 hover:text-[#ffdb70] transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code →
                    </a>
                  )}
                  {hackathon.live && (
                    <a
                      href={hackathon.live}
                      className="text-xs text-zinc-400 hover:text-[#ffdb70] transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
