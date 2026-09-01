"use client";

import {useState} from "react";
import {ChevronDown, GitMerge, GitPullRequest} from "lucide-react";
import {
  openSourceRepositories,
  type OpenSourcePullRequest,
} from "./Data/OpenSourceData";

const pullRequestStatusIcon = {
  merged: GitMerge,
  open: GitPullRequest,
};

const pullRequestStatusColor: Record<OpenSourcePullRequest["status"], string> = {
  merged: "text-[#8957e5]",
  open: "text-[#3fb950]",
};

export default function OpenSource() {
  const [activeRepository, setActiveRepository] = useState("");

  const totalPullRequests = openSourceRepositories.reduce(
    (total, repository) => total + repository.pullRequests,
    0,
  );

  return (
    <section className="mb-6 mt-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white">Open Source Contributions</h2>
        
        </div>

        <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-300">
          <GitMerge className="h-3.5 w-3.5 text-[#8957e5]" />
          {totalPullRequests} PRs
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-3">
        <div className="divide-y divide-zinc-800/80">
          {openSourceRepositories.map((repository) => {
            const isOpen = repository.name === activeRepository;
            const contributionCount = repository.contributions?.length ?? 0;
            const contentId = `open-source-${repository.name
              .replace(/\W+/g, "-")
              .toLowerCase()}`;

            return (
              <article key={repository.name}>
                <div className="flex items-center justify-between gap-4 px-2 py-2">
                  <span className="min-w-0">
                    <a
                      href={repository.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mr-2 text-base font-semibold underline-offset-4 transition-colors ${
                        isOpen ? "text-white" : "text-zinc-200"
                      }`}
                    >
                      {repository.name}
                    </a>
                    <span className="whitespace-nowrap text-xs text-zinc-500">
                      {repository.pullRequests} PRs
                    </span>
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveRepository(isOpen ? "" : repository.name)
                    }
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-zinc-950/70 transition-colors hover:border-[#ffdb70]/50 hover:text-[#ffdb70] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffdb70]/60 ${
                      isOpen
                        ? "border-zinc-500 text-white"
                        : "border-zinc-700 text-zinc-400"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    aria-label={`${isOpen ? "Collapse" : "Expand"} ${
                      repository.name
                    } contributions`}
                  >
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#ffdb70]" : ""
                      }`}
                    />
                  </button>
                </div>

                {isOpen && contributionCount > 0 && (
                  <div id={contentId} className="pb-4 pl-3 pr-8 pt-1">
                    <ul className="space-y-2">
                      {repository.contributions?.map((contribution) => {
                        const StatusIcon =
                          pullRequestStatusIcon[contribution.status];

                        return (
                          <li key={contribution.title}>
                            <a
                              href={contribution.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link flex min-w-0 items-start gap-2 text-sm leading-5 text-zinc-300 underline-offset-4 decoration-zinc-600 transition-colors hover:text-[#ffdb70] hover:underline"
                            >
                              <StatusIcon
                                className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                                  pullRequestStatusColor[contribution.status]
                                }`}
                                aria-label={`${contribution.status} pull request`}
                              />
                              <span className="min-w-0 break-words">
                                {contribution.title}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {isOpen && contributionCount === 0 && (
                  <div
                    id={contentId}
                    className="pb-4 pl-3 pr-8 pt-1 text-sm text-zinc-500"
                  >
                    <a
                      href={repository.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-zinc-700 transition-colors hover:text-[#ffdb70] hover:decoration-[#ffdb70]"
                    >
                      <GitMerge className="h-3.5 w-3.5 text-[#8957e5]" />
                      View contributions on GitHub
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
