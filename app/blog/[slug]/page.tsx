import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {getPostBySlug, sortedBlogPosts} from "@/components/Data/BlogsData";

type BlogPostPageProps = {
  params: Promise<{slug: string}>;
};

function renderInlineContent(text: string) {
  const segments = text.split(/(__[^_]+__)/g);

  return segments.map((segment, index) => {
    if (segment.startsWith("__") && segment.endsWith("__")) {
      return (
        <span
          key={`u-${index}`}
          className="underline decoration-zinc-400 decoration-1 underline-offset-4"
        >
          {segment.slice(2, -2)}
        </span>
      );
    }

    return <span key={`t-${index}`}>{segment}</span>;
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return sortedBlogPosts.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const {slug} = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post does not exist.",
    };
  }

  const canonical = `https://hiarun.me/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.summary,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: ["/preview.png"],
    },
  };
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
  const {slug} = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonical = `https://hiarun.me/blog/${post.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://hiarun.me",
    },
    publisher: {
      "@type": "Person",
      name: post.author,
    },
    mainEntityOfPage: canonical,
    image: ["https://hiarun.me/preview.png"],
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 pb-10 pt-14">
      <article>
        <Link
          href="/blog"
          className="mb-6 inline-flex text-sm text-zinc-400 transition-colors hover:text-[#ffdb70]"
        >
          Back to blog
        </Link>

        <header className="mb-6 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden>•</span>
            <span>
              By{" "}
              <Link
                href="/"
                className="text-zinc-400 transition-colors hover:text-[#ffdb70]"
              >
                {post.author}
              </Link>
            </span>
            <span aria-hidden>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <section className="space-y-5 text-[15px] leading-7 text-zinc-300">
          {post.body.map((block, index) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={`h2-${index}`}
                  className="pt-3 text-xl font-semibold leading-tight text-white"
                >
                  {renderInlineContent(block.slice(3))}
                </h2>
              );
            }

            if (block.startsWith("### ")) {
              return (
                <h3
                  key={`h3-${index}`}
                  className="pt-2 text-lg font-semibold leading-tight text-white"
                >
                  {renderInlineContent(block.slice(4))}
                </h3>
              );
            }

            return <p key={`p-${index}`}>{renderInlineContent(block)}</p>;
          })}
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(blogPostingSchema)}}
      />
    </main>
  );
}
