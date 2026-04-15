import Link from "next/link";
import type {Metadata} from "next";
import {sortedBlogPosts} from "@/components/Data/BlogsData";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Next.js, TypeScript, API design, testing, and practical full stack engineering.",
  alternates: {
    canonical: "https://hiarun.me/blog",
  },
  openGraph: {
    title: "Blog | Arun Kumar",
    description:
      "Articles on Next.js, TypeScript, API design, testing, and practical full stack engineering.",
    url: "https://hiarun.me/blog",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Arun Kumar Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Arun Kumar",
    description:
      "Articles on Next.js, TypeScript, API design, testing, and practical full stack engineering.",
    images: ["/preview.png"],
  },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 pb-10 pt-14">
      <Link
        href="/"
        className="mb-4 inline-flex text-sm text-zinc-400 transition-colors hover:text-[#ffdb70]"
      >
        Back to home
      </Link>

      <section className="mb-8">
        <div className="mb-6 flex items-center gap-3">
          <h1 className="text-lg font-bold tracking-[-0.02em] text-white">
            Blog
          </h1>
        </div>

        <p className="mb-8 text-base text-zinc-400">
          My thoughts on software development, life, and more.
        </p>

        <div className="space-y-6">
          {sortedBlogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="rounded-2xl p-2 transition-colors duration-200 hover:bg-zinc-900/30"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="mt-1 text-lg font-medium text-zinc-400">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-lg font-medium leading-tight text-white transition-colors duration-200 group-hover:text-[#ffdb70]">
                      {post.title}
                    </h2>
                  </div>
                </div>
              </Link>

              <p className="pl-[2.5rem] text-sm text-zinc-500 sm:pl-[3rem]">
                {formatDate(post.publishedAt)} · By{" "}
                <Link
                  href="/"
                  className="text-zinc-400 transition-colors hover:text-[#ffdb70]"
                >
                  {post.author}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
