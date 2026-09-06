export type OpenSourcePullRequest = {
  title: string;
  url: string;
  status: "merged" | "open";
};

export type OpenSourceRepository = {
  name: string;
  url: string;
  pullRequests: number;
  contributions?: OpenSourcePullRequest[];
};

export const openSourceRepositories: OpenSourceRepository[] = [
  {
    name: "Nanocoder",
    url: "https://github.com/Nano-Collective/nanocoder",
    pullRequests: 5,
    contributions: [
      {
        title: "fix(vscode): improve composer mode selector layout",
        url: "https://github.com/Nano-Collective/nanocoder/pull/1106",
        status: "merged",
      },
      {
        title: "Fix/atomic deletion boundary",
        url: "https://github.com/Nano-Collective/nanocoder/pull/1020",
        status: "merged",
      },
      {
        title: "fix welcome message package version fallback",
        url: "https://github.com/Nano-Collective/nanocoder/pull/999",
        status: "merged",
      },
      {
        title: "fix: reject invalid context limit suffixes",
        url: "https://github.com/Nano-Collective/nanocoder/pull/993",
        status: "merged",
      },
      {
        title: "feat(vscode): add slash command autocomplete quick actions",
        url: "https://github.com/Nano-Collective/nanocoder/pull/802",
        status: "merged",
      },
    ],
  },
];

export const openSourceSummary = {
  mergedPullRequests: 62,
};
