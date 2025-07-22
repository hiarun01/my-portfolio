type blogPosts = {
  title: string;
  date: string;
  readTime: string;
  link: string;
};

export const blogPosts: blogPosts[] = [
  {
    title: "Redux vs Zustand: Which State Management Tool is the GOAT ?",
    date: "Jun 5, 2025",
    readTime: "3 min read",
    link: "https://medium.com/@hiarun01/redux-vs-zustand-which-state-management-tool-is-the-goat-6686573bca26",
  },
];

const Blogs = () => {
  return (
    <section>
      <h2 className="text-lg font-bold ">Blogs</h2>
      <div className="flex flex-col gap-5">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 px-0 py-3 relative"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold group-hover:text-[#ffdb70] transition-colors mb-1">
                {post.title}
              </h3>
              <div className="flex items-center text-sm gap-2">
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            {/* border line */}
            <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-[#ffdb70]/60 via-[#d2bb77]/30 to-transparent group-hover:from-[#ffdb70] group-hover:via-[#d2bb77] group-hover:to-[#ffdb70] transition-all"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
