import {ExternalLinkIcon, CalendarIcon} from "lucide-react";
import {blogPosts} from "../Api/BlogApi";

const BlogSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">My Writting</h2>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center justify-between mb-1 ">
              <h3 className="text-xl font-semibold">
                <a href={post.link} className="hover:text-gray-600">
                  {post.title}
                </a>
              </h3>
              <a href={post.link} className="text-gray-600 hover:text-gray-900">
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <CalendarIcon className="w-4 h-4 mr-1" />
              {post.date} • {post.readTime}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
