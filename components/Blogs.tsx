import Link from "next/link";
import {sortedBlogPosts} from "./Data/BlogsData";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const Blogs = () => {
  const posts = sortedBlogPosts.slice(0, 3);

  return (
    <section className="mb-6 mt-6">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold tracking-[-0.02em] text-white">
            Blog
          </h2>
        </div>
        <p className="mt-2 text-base text-zinc-400">
          My thoughts on software development, life, and more.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className="rounded-2xl p-2 transition-colors duration-200 hover:bg-zinc-900/30"
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="mt-1 text-lg font-medium tabular-nums text-zinc-400">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg leading-tight font-medium text-white transition-colors duration-200 group-hover:text-[#ffdb70]">
                    {post.title}
                  </h3>
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

      <div className="mt-7">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-[#ffdb70]/40 hover:text-[#ffdb70]"
        >
          View all posts
        </Link>
      </div>

      {posts.length === 0 && (
        <div className="text-center rounded-lg">
          <h3 className="text-lg font-medium text-zinc-400 mb-2">
            No blogs yet
          </h3>
          <p className="text-zinc-500 text-sm">
            I&apos;m working on some exciting content. Check back soon!
          </p>
        </div>
      )}
    </section>
  );
};

export default Blogs;
