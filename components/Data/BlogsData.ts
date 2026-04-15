export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  body: string[];
  canonical?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "How-Netflix-Stops-Screenshots-And-Screen-Recording",
    title: "How Netflix Stops Screenshots & Screen Recording ?",
    author: "Arun Kumar",
    summary:
      "Have you ever tried taking a screenshot while watching something on Netflix and ended up with a black screen?",
    publishedAt: "2026-4-15",
    readTime: "2 min read",
    body: [
      "Have you ever tried taking a screenshot on Netflix and got a black screen? That is not a bug it is __intentional__.",
      "Netflix uses DRM (Digital Rights Management) to protect its movies and shows. This means you can watch the content, but you cannot copy it.",
      "When you try to take a screenshot, Netflix tells your device: __Is screen ko capture mat karna__",
      "So your phone blocks it and shows a black image instead.",
      "## What happens during screen recording",
      "The same happens with screen recording. Netflix detects it and either stops the video or makes it blank.",
      "This works because the video plays through a __secure path__ that recording tools cannot access.",
      "Even the phone system (Android/iOS) helps by allowing apps to disable screen capture. Yeh ek built-in protection hai.",
      "It is not 100% unbreakable, but for most users, it stops easy copying.",
    ],
  },
];

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
