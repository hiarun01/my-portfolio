import {NavLink} from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import {motion} from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        className="max-w-3xl mx-auto px-5"
        initial={{opacity: 0, y: 40}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7, ease: "easeOut"}}
      >
        <motion.h1
          className="text-2xl font-bold "
          initial={{opacity: 0, x: -30}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.2, duration: 0.6}}
        >
          Hey 👋, I'm Arun kumar
        </motion.h1>
        <motion.div
          className="flex gap-7 mt-6 w-fit py-1 sm:font-normal"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.4, duration: 0.5}}
        >
          {/* ...social links... */}
          <a
            href="mailto:hey.arunkumar05@gmail.com"
            className="text-[#ffdb70] hover:text-[#d2bb77] "
          >
            {/* ...svg... */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-icon lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a href="https://x.com/hiarun01" className="text-[#ffdb70]">
            {/* ...svg... */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter-icon lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/hiarun01/"
            className="text-[#ffdb70] hover:text-[#d2bb77]"
          >
            {/* ...svg... */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/hiarun01"
            className="text-[#ffdb70] hover:text-[#d2bb77]"
          >
            {/* ...svg... */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </motion.div>

        <motion.p
          className="mt-5 text-lg"
          initial={{opacity: 0, x: 30}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.5, duration: 0.5}}
        >
          <span className="underline font-semibold">A web dev,</span> I love
          building <span className="underline font-semibold">things</span> that
          solves real world problems. which is why most of what I build is open
          source.
        </motion.p>
        <motion.p
          className="mt-5 text-lg"
          initial={{opacity: 0, x: 30}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.6, duration: 0.5}}
        >
          My journey into web development started with curiosity and quickly
          turned into a full-blown passion. Since then, I’ve been{" "}
          <NavLink
            to="/projects"
            className="inline-block text-[#ffdb70] underline"
          >
            building
          </NavLink>
          , experimenting, and learning something new every day.
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.7, duration: 0.5}}
        >
          <h2 className="text-2xl font-semibold text-[#fafafa] mb-3 mt-5 border-l-2 pl-2 rounded-3xl border-[#d2bb77]">
            Let’s Connect
          </h2>
          <p className="mt-2 text-lg">
            I'm always happy to connect! You can reach me via Email or on{" "}
            Twitter. I'm currently open to both{" "}
            <span className="underline font-semibold">freelance projects</span>{" "}
            and full-time{" "}
            <span className="underline font-semibold">job opportunities</span> .
            I'm happy to discuss any ideas or opportunities with you and
            potentially collaborate if it's a good fit.
          </p>
        </motion.div>

        <motion.section
          className="mb-12 mt-6"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.8, duration: 0.5}}
        >
          <h2 className="font-semibold text-[#fafafa] text-2xl mb-3 mt-5 border-l-2 pl-2 rounded-3xl border-[#d2bb77]">
            Writing & Sharing
          </h2>

          <div className="gap-5 text-lg">
            I’ve started writing{" "}
            <NavLink
              to="/blogs"
              className="inline-block text-[#ffdb70] underline"
            >
              Blogs
            </NavLink>{" "}
            to help others improve their engineering skills. Stay tuned for more
            content!
          </div>

          <div>
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-5 border-l-2 pl-2 rounded-3xl border-[#d2bb77]">
                GitHub Contributions
              </h2>
              <GitHubCalendar
                username="hiarun01"
                blockSize={10}
                colorScheme="dark"
              />
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default About;
