import {FaRegHeart} from "react-icons/fa";
import {SiBuymeacoffee} from "react-icons/si";

export const SupportMe = () => {
  return (
    <section className="">
      <h2 className="text-lg font-bold mb-1 mt-1">Support Me</h2>
      <p>
        If you love what I do, whether it’s my work, the content I share, or
        anything else, please consider supporting me. Your support helps me
        continue creating, improving, and sharing my work.
      </p>
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <a
          className="cursor-pointer w-fit select-none transition-colors duration-100 flex flex-row gap-1.5 items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-2  py-1 rounded-md"
          target="_blank"
          href="https://github.com/sponsors/hiarun01"
        >
          <FaRegHeart className="text-pink-400" />
          GitHub Sponsors
        </a>
        <a
          className="cursor-pointer w-fit select-none transition-colors duration-100 flex flex-row gap-1.5 items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 px-2  py-1 rounded-md"
          target="_blank"
          href="https://buymeacoffee.com/hiarun01"
        >
          <SiBuymeacoffee className="text-yellow-400" />
          Buy Me a Coffee
        </a>
      </div>
    </section>
  );
};
