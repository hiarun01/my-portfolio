/* eslint-disable react/no-unescaped-entities */
import {Github, Linkedin, Mail, X} from "lucide-react";
import Skills from "../Skills";

const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-6">
      <h1 className="text-2xl font-bold ">Hey 👋, I'm Arun kumar</h1>

      <p className="mt-5  ">
        Hey, stranger 👋 I'm <strong>Arun Kumar</strong>, Passionate about
        creating beautiful, responsive, and user-friendly web applications
        <br />I love building stuff that solves real world problems which is
        probably why everything I build is Open Source.
      </p>
      <p className="mt-2 ">
        I am always open to new opportunities and connections. Whether you're
        looking for a skilled web developer for your next project or just want
        to network, feel free to reach out. Let's create something amazing
        together.
      </p>
      <div className="flex gap-7 mt-6  w-fit py-2">
        <a
          href="mailto:hey.arunkumar05@gmail.com"
          className="text-[#ffdb70] hover:text-[#d2bb77] "
        >
          <Mail size={20} />
        </a>
        <a href="https://x.com/hiarun01" className="text-[#ffdb70]">
          <X size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/hiarun01/"
          className="text-[#ffdb70] hover:text-[#d2bb77]"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/hiarun01"
          className="text-[#ffdb70] hover:text-[#d2bb77]"
        >
          <Github size={20} />
        </a>
      </div>
      <Skills />
    </section>
  );
};

export default About;
