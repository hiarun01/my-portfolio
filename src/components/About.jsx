import {Github, Linkedin, Mail, X} from "lucide-react";

const About = () => {
  return (
    <div>
      <header className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900">Arun Kumar</h1>
        <p className="mt-4 text-xl text-gray-600">Web dev & Freelancer</p>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Passionate about creating beautiful, responsive, and user-friendly web
          applications
        </p>
        

        <div className="flex gap-4 mt-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Mail size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <X size={20} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default About;
