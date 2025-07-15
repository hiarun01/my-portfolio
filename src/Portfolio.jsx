import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import GitHubState from "./components/GitHubState";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Blog from "./components/Blogs";
import About from "./components/About";
import Contact from "./components/Contact";

const blurVariants = {
  visible: {opacity: 1, backdropFilter: "blur(8px)"},
  hidden: {opacity: 0, pointerEvents: "none", backdropFilter: "blur(0px)"},
};

const Portfolio = () => {
  const [isBlur, setIsBlur] = useState(true);

  // Remove blur after 1.5s on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsBlur(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen max-w-2xl mx-auto bg-[#111010] text-white pt-10 pb-10 overflow-x-hidden">
      {/* Blur Overlay */}
      <AnimatePresence>
        {isBlur && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/30"
            initial="visible"
            animate="visible"
            exit="hidden"
            variants={blurVariants}
            transition={{duration: 0.4, ease: "easeInOut"}}
          />
        )}
      </AnimatePresence>
      <div
        className={`px-5 relative ${
          isBlur ? "pointer-events-none select-none blur-sm" : ""
        }`}
      >
        {/* About Section */}
        <About />
        {/* Projects */}
        <Projects />
        {/* Blogs */}
        <Blog />
        {/* Github States */}
        <GitHubState />
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
