import {NavLink} from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="text-2xl font-bold ">Hey 👋, I'm Arun kumar</h1>
        <div className="flex gap-7 mt-6 w-fit py-1 sm:font-normal">
          <a
            href="mailto:hey.arunkumar05@gmail.com"
            className="text-[#ffdb70] hover:text-[#d2bb77] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail-icon lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a href="https://x.com/hiarun01" className="text-[#ffdb70]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-twitter-icon lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/hiarun01/"
            className="text-[#ffdb70] hover:text-[#d2bb77]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin-icon lucide-linkedin"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>

        <p className="mt-5 text-lg">
          <span className="border-b font-mono font-bold">A web dev,</span> from
          Amroha, Uttar Pradesh, India. I love building stuff that solves real
          world problems. which is why most of what I build is open source. I've
          completed my (BCA) Bachelor of Computer Applications.
        </p>

        <p className="mt-5 text-lg">
          I also love{" "}
          <span className="border-b font-mono font-bold">
            participating in hackathons
          </span>{" "}
          - there’s something exciting about building fast-paced prototypes
          under pressure. If you’re organizing a hackathon, looking for a{" "}
          <span className="border-b font-mono font-bold">teammate.</span> feel
          free to reach out.
        </p>
        <p className="mt-5 text-lg">
          My journey into web development started with curiosity and quickly
          turned into a full-blown passion. Since then, I’ve been building,
          experimenting, and learning something new every day.
        </p>

        <div>
          <h2 className="text-2xl font-bold text-[#fafafa] mb-3 mt-5">
            Let’s Connect
          </h2>
          <p className="mt-2 text-lg">
            I'm always happy to connect! You can reach me via Email or on{" "}
            <a
              className="font-bold text-[#ffdb70] underline font-mono"
              href="https://x.com/hiarun01"
            >
              Twitter
            </a>
            . I'm currently open to both{" "}
            <span className="border-b font-mono font-bold">
              freelance projects
            </span>{" "}
            and full-time{" "}
            <span className="border-b font-mono font-bold">
              job opportunities
            </span>{" "}
            . I'm happy to discuss any ideas or opportunities with you and
            potentially collaborate if it's a good fit.
          </p>
        </div>

        <section className="mb-12 mt-6">
          <h2 className="font-bold text-[#fafafa] text-2xl mb-3 mt-5">
            Writing & Sharing
          </h2>

          <div className="gap-5 text-lg">
            I’ve started writing{" "}
            <NavLink
              to="/blogs"
              className="underline inline-block font-mono font-bold"
            >
              Blogs
            </NavLink>{" "}
            to help others improve their engineering skills. Stay tuned for more
            content!
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
