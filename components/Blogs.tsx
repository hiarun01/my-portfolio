import {FiCalendar, FiClock} from "react-icons/fi";
import {blogPosts} from "./Data/BlogsData";

const Blogs = () => {
  return (
    <section className="mb-5">
      {/* Header Section */}
      <div className="flex items-center mb-3">
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Blogs</h2>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="group border border-zinc-700 p-5 rounded-lg overflow-hidden "
          >
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* Blog Header */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#ffdb70] transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
              </div>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-zinc-400 text-sm mb-2 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
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
      {blogPosts.length === 0 && (
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
