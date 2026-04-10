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

        <ul className="list-disc space-y-5 pl-5 marker:text-zinc-500">
          {hackathons.map((hackathon, i) => {
            const isWinner = hackathon.title.includes(
              "Code with Kiro Hackathon",
            );
            return (
              <li key={i} className="min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-white">
                    {hackathon.title}
                  </h3>

                  <div className="text-right text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {hackathon.date}
                  </div>
                </div>

                {isWinner && (
                  <div className="mt-1 text-right text-xs font-medium text-yellow-400">
                    Winner
                  </div>
                )}

                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {hackathon.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
