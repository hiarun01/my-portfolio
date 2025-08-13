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
      <div className="flex flex-col gap-5 mt-5">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-md p-3 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors duration-100 flex"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
              <div className="flex items-center text-sm gap-2">
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
