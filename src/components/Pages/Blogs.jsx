import {motion} from "framer-motion";
import {blogPosts} from "../../data/BlogData";

const Blogs = () => {
  return (
    <motion.section
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.7, ease: "easeOut"}}
    >
      <motion.h2
        className="text-lg font-bold "
        initial={{opacity: 0, x: -30}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.2, duration: 0.6}}
      >
        Blogs
      </motion.h2>
      <div className="flex flex-col gap-5">
        {blogPosts.map((post, index) => (
          <motion.a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 px-0 py-3 relative"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4 + index * 0.1, duration: 0.5}}
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#fafafa] group-hover:text-[#ffdb70] transition-colors mb-1">
                {post.title}
              </h3>
              <div className="flex items-center text-[#d6d6d6] text-sm gap-2">
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            {/* border line */}
            <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-[#ffdb70]/60 via-[#d2bb77]/30 to-transparent group-hover:from-[#ffdb70] group-hover:via-[#d2bb77] group-hover:to-[#ffdb70] transition-all"></div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;
