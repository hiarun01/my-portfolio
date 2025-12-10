type blogPosts = {
  title: string;
  date: string;
  readTime: string;
  link: string;
  excerpt?: string;
  tags?: string[];
};

export const blogPosts: blogPosts[] = [
  {
    title: "Redux vs Zustand: Which State Management Tool is the GOAT ?",
    date: "Jun 5, 2025",
    readTime: "3 min read",
    link: "https://medium.com/@hiarun01/redux-vs-zustand-which-state-management-tool-is-the-goat-6686573bca26",
    excerpt:
      "A comprehensive comparison between Redux and Zustand for React state management, exploring their pros, cons, and use cases.",
  },
];
