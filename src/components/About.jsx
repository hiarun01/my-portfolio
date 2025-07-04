import {GithubIcon, Linkedin, Mail, X} from "lucide-react";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold ">Hey 👋, I'm Arun kumar</h1>
      <div className="flex gap-7 mt-6 w-fit sm:font-normal">
        <a
          href="mailto:hiarun.works@gmail.com"
          className="text-[#ffdb70] hover:text-[#d2bb77]"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://x.com/hiarun01"
          className="text-[#ffdb70] hover:text-[#d2bb77]"
          aria-label="Twitter/X"
        >
          <X size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/hiarun01/"
          className="text-[#ffdb70] hover:text-[#d2bb77]"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/hiarun01"
          className="text-[#ffdb70] hover:text-[#d2bb77]"
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>
      </div>
      <p className="mt-5 text-1xl ">
        A web dev, i break things, learn fast, and make shit happen. deep into
        code, I love building things that solves real world problems
      </p>
      <div>
        <p className="mt-2 text-1xl ">
          Always happy to connect! Reach out via email or Twitter. I'm open to
          freelance gigs or full-time roles. let’s chat if you’ve got something
          in mind!
        </p>
        <div className="mt-5">
          <a
            href="https://cal.com/hiarun01/15min"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline hover:text-[#d2bb77]"
          >
            Schedule a meet
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
