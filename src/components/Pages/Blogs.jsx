import {ExternalLinkIcon, CalendarIcon} from "lucide-react";
import {blogPosts} from "../../Api/BlogApi";

const Blogs = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">My Writting</h2>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className=" border-l-2 rounded-2xl border-[#ffdb70] pl-4"
          >
            <div className="flex items-center justify-between mb-1 ">
              <h3 className="text-xl font-semibold">
                <a href={post.link} className="hover:text-[#d2bb77]">
                  {post.title}
                </a>
              </h3>
              <a
                href={post.link}
                className="text-[#ffdb70] hover:text-[#d2bb77]"
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center text-[#d6d6d6] text-sm">
              <CalendarIcon className="w-4 h-4 mr-1" />
              {post.date} • {post.readTime}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
