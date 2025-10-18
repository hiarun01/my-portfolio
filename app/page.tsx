"use client";

import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HackathonSection from "@/components/HackathonSection";
import GitHubState from "@/components/GitHubState";
import Projects from "@/components/Projects";
import {SupportMe} from "@/components/SupportMe";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-3xl font-sans mx-auto px-5 pt-15 pb-10 overflow-x-hidden animate-fadein">
      {/* About Section */}
      <About />
      {/* Projects */}
      <Projects />
      {/* GitHub State */}
      <GitHubState />
      {/* Hackathons */}
      <HackathonSection />
      {/* Blogs */}
      <Blogs />

      {/* Contact Section */}
      <Contact />

      {/* SupprtME */}
      <SupportMe />

      {/* Footer */}
      <Footer />
    </div>
  );
}
