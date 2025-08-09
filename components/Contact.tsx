import {FaRegHeart} from "react-icons/fa";
import {SiBuymeacoffee} from "react-icons/si";

/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <section className="mb-4">
      <h2 className="text-lg font-bold mb-2">Let’s Connect</h2>

      <p className="mt-2 ">
        Always happy to connect! Reach out via email or Twitter. I'm open to
        freelance gigs or full-time roles. let’s chat if you’ve got something in
        mind!
      </p>
      <div className="mt-2 mb-5">
        <a
          href="https://cal.com/hiarun01/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer w-fit select-none transition-colors duration-100 flex flex-row gap-1.5 items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-2  py-1 rounded-md"
        >
          <span> Schedule a meet</span>
        </a>
      </div>
    </section>
  );
}
