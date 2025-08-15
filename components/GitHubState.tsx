import GitHubCalendar from "react-github-calendar";
import {ExternalLink, GitFork, Star} from "lucide-react";

// Add your contributed repositories here
// const contributedRepos = [
//   {
//     name: "facebook/react",
//     description: "The library for web and native user interfaces",
//     url: "https://github.com/facebook/react",
//     language: "JavaScript",
//     stars: "228k",
//     contribution: "Bug fixes and documentation improvements",
//   },
//   {
//     name: "vercel/next.js",
//     description: "The React Framework for the Web",
//     url: "https://github.com/vercel/next.js",
//     language: "TypeScript",
//     stars: "125k",
//     contribution: "Feature development and testing",
//   },
//   {
//     name: "tailwindlabs/tailwindcss",
//     description: "A utility-first CSS framework for rapid UI development",
//     url: "https://github.com/tailwindlabs/tailwindcss",
//     language: "CSS",
//     stars: "82k",
//     contribution: "Documentation and examples",
//   },
//   // Add more repositories where you've contributed
// ];

const GitHubState = () => {
  return (
    <section className="mt-5">
      {/* GitHub Calendar */}
      <div className="my-8">
        <h2 className="text-lg font-bold mb-5">GitHub Contributions</h2>
        <GitHubCalendar username="hiarun01" blockSize={10} colorScheme="dark" />
      </div>

      {/* Contributed Repositories */}
      {/* <div className="my-8">
        <h2 className="text-lg font-bold mb-5">Open Source Contributions</h2>
        <div className="grid gap-4">
          {contributedRepos.map((repo, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 hover:bg-zinc-800 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-[#ffdb70]" />
                    {repo.name}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">
                    {repo.description}
                  </p>
                </div>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#ffdb70] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-[#ffdb70] rounded-full"></span>
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stars}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-zinc-700">
                <p className="text-sm text-zinc-300">
                  <span className="text-[#ffdb70] font-medium">
                    Contribution:{" "}
                  </span>
                  {repo.contribution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default GitHubState;
