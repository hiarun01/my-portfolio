import {Github, Linkedin, Mail, X} from "lucide-react";

const About = () => {
  return (
    <div>
      <header className="max-w-4xl mx-auto px-6 py-12 ">
        <h1 className="text-4xl font-bold text-gray-900">Arun Kumar</h1>
        <p className="mt-4 text-xl text-gray-600">
          <strong>Web dev & Freelancer</strong>
        </p>
        <p className="mt-2 text-gray-600 ">
          Hey, stranger 👋 I'm <strong>Arun Kumar</strong>, Passionate about
          creating beautiful, responsive, and user-friendly web applications
          <br />I love building software that solves real world problems which
          is probably why everything I build is Open Source.
        </p>
        <p className="mt-2 text-gray-600">
          I am always open to new opportunities and connections. Whether you're
          looking for a skilled web developer for your next project or just want
          to network, feel free to reach out. Let's create something amazing
          together.
        </p>
        <div className="flex gap-4 mt-6 border-2 border-dotted rounded-2xl w-fit py-1 px-3">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Mail size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <X size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default About;
