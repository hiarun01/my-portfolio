import {motion} from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-5 mb-10"
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.7, ease: "easeOut"}}
    >
      <motion.div
        className="mb-4"
        initial={{opacity: 0, x: -30}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.2, duration: 0.6}}
      >
        <h2 className="font-bold text-[#fafafa] text-2xl border-l-4 pl-4 rounded-3xl border-[#d2bb77]">
          Contact Me
        </h2>
        <p className="text-[#d6d6d6] mt-2 text-lg">
          I’d love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, my inbox is always open.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 mb-8"
        initial={{opacity: 0, x: 30}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.4, duration: 0.5}}
      >
        <div className="flex items-center gap-3">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#ffdb70"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a
            href="mailto:hey.arunkumar05@gmail.com"
            className="text-[#ffdb70] hover:text-[#d2bb77] underline"
          >
            hey.arunkumar05@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#ffdb70"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <a
            href="https://www.linkedin.com/in/hiarun01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffdb70] hover:text-[#d2bb77] underline"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-3">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#ffdb70"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
          <a
            href="https://x.com/hiarun01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffdb70] hover:text-[#d2bb77] underline"
          >
            Twitter/X
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.6, duration: 0.5}}
      >
        <h3 className="text-xl font-bold mb-2 text-[#fafafa]">
          Want to chat? Schedule a 1:1 with me!
        </h3>
        <a
          href="https://cal.com/hiarun01/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ffdb70] text-[#222] font-semibold px-6 py-2 rounded-2xl shadow hover:bg-[#d2bb77] transition-colors duration-200"
        >
          Schedule a meet
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
