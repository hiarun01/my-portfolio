import {motion} from "framer-motion";
import {GithubIcon, Linkedin, Mail, X} from "lucide-react";
import Skills from "../Skills";
import GitHubState from "../GitHubState";
import Projects from "./Projects";
import Footer from "../Footer";
import Blog from "./Blogs";

const Portfolio = () => {
  return (
    <div className="bg-[#111010] text-white pt-10">
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
            href="mailto:hiarun.works@gmail.com"
            className="text-[#ffdb70] hover:text-[#d2bb77] "
          >
            <Mail />
          </a>
          <a href="https://x.com/hiarun01" className="text-[#ffdb70]">
            <X />
          </a>
          <a
            href="https://www.linkedin.com/in/hiarun01/"
            className="text-[#ffdb70] hover:text-[#d2bb77]"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/hiarun01"
            className="text-[#ffdb70] hover:text-[#d2bb77]"
          >
            <GithubIcon />
          </a>
        </motion.div>
        <motion.p
          className="mt-5 text-lg text-[#d6d6d6]"
          initial={{opacity: 0, x: 30}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.5, duration: 0.5}}
        >
          A web dev, i break things, learn fast, and make shit happen. deep into
          code, I love building things that solves real world problems
        </motion.p>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.7, duration: 0.5}}
        >
          <p className="mt-2 text-lg text-[#d6d6d6]">
            I'm always happy to connect! You can reach me via Email or on{" "}
            Twitter. I'm currently open to both{" "}
            <span className="font-semibold">freelance projects</span> and
            full-time <span className="font-semibold">job opportunities</span>.
            I'm happy to discuss any ideas or opportunities with you and
            potentially collaborate if it's a good fit.
          </p>
        </motion.div>
        {/* skills section */}
        <Skills />
        {/* Projects */}
        <div className="mt-5">
          <Projects />
        </div>

        {/* Bloges */}
        <Blog />
        {/* Github States */}
        <GitHubState />
        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
};

export default Portfolio;
