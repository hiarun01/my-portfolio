import {FiExternalLink, FiCalendar, FiClock, FiBookOpen} from "react-icons/fi";

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

const Blogs = () => {
  return (
    <section className="mb-5">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Latest Blogs</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <FiBookOpen className="text-[#ffdb70]" />
          <span>
            {blogPosts.length} article{blogPosts.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="group bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden hover:border-[#ffdb70] hover:shadow-lg hover:shadow-[#ffdb70]/10 transition-all duration-300"
          >
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5"
            >
              {/* Blog Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#ffdb70] transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <FiExternalLink className="text-zinc-500 group-hover:text-[#ffdb70] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
              </div>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              )}

              {/* Tags */}
              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 bg-zinc-800 text-[#ffdb70] rounded-full text-xs font-medium border border-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs border border-zinc-600">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <FiCalendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiClock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* Empty State or Call to Action */}
      {blogPosts.length === 0 ? (
        <div className="text-center py-12 bg-zinc-900 border border-zinc-700 rounded-lg">
          <FiBookOpen className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-zinc-400 mb-2">
            No blogs yet
          </h3>
          <p className="text-zinc-500 text-sm">
            I&apos;m working on some exciting content. Check back soon!
          </p>
        </div>
      ) : (
        <div className="mt-6 text-center">
          <a
            href="https://medium.com/@hiarun01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#ffdb70] transition-colors duration-200"
          >
            <span>Read more on Medium</span>
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Blogs;
