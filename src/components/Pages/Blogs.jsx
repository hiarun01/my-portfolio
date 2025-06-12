import {motion} from "framer-motion";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Redux vs Zustand: Which State Management Tool is the GOAT ?",
      date: "Jun 5, 2025",
      readTime: "3 min read",
      link: "https://hiarun.hashnode.dev/redux-vs-zustand-which-state-management-tool-is-the-goat",
    },
    {
      title: "Top 5 VS Code Extensions for Frontend Developers",
      date: "May 26, 2025",
      readTime: "5 min read",
      link: "https://hiarun.hashnode.dev/top-5-vs-code-extensions-for-frontend-developers-explained-super-simply",
    },
    {
      title: "Let's Understand CI/CD Pipeline?",
      date: "Feb 27, 2025",
      readTime: "5 min read",
      link: "https://hiarun.hashnode.dev/lets-understand-ci-cd-pipeline",
    },
  ];

  return (
    <motion.section
      className="mb-10 px-5 max-w-3xl mx-auto"
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.7, ease: "easeOut"}}
    >
      <motion.h2
        className="text-2xl font-bold mb-4 border-l-2 pl-2 rounded-3xl border-[#d2bb77]"
        initial={{opacity: 0, x: -30}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.2, duration: 0.6}}
      >
        My Writing
      </motion.h2>
      <motion.p
        className="mb-8 text-lg text-[#d6d6d6]"
        initial={{opacity: 0, x: 30}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.3, duration: 0.5}}
      >
        I enjoy sharing what I learn about web development, tools, and
        productivity. Here are some of my latest blog posts:
      </motion.p>
      <div className="flex flex-col gap-3">
        {blogPosts.map((post, index) => (
          <motion.a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 px-0 py-3 border-b border-[#333] hover:bg-[#232323] transition-colors rounded-xl"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4 + index * 0.1, duration: 0.5}}
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold  text-[#fafafa] group-hover:text-[#ffdb70] transition-colors mb-1">
                {post.title}
              </h3>
              <div className="flex items-center text-[#d6d6d6] text-sm gap-2">
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;
