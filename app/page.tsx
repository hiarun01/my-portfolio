"use client";

import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GitHubState from "@/components/GitHubState";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-3xl font-sans mx-auto px-5 pt-15 pb-10 overflow-x-hidden ">
      {/* About Section */}
      <About />
      {/* Projects */}
      <Projects />
      {/* Blogs */}
      <Blogs />
      {/* Github States */}
      <GitHubState />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
