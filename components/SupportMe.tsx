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
      <div className="flex flex-col sm:flex-row gap-3 mt-3 w-full">
        <a
          className="support-btn flex-1 justify-center"
          target="_blank"
          href="https://github.com/sponsors/hiarun01"
        >
          <FaRegHeart className="text-pink-400" />
          <span className="whitespace-nowrap">GitHub Sponsors</span>
        </a>
        <a
          className="support-btn flex-1 justify-center"
          target="_blank"
          href="https://buymeacoffee.com/hiarun01"
        >
          <SiBuymeacoffee className="text-yellow-400" />
          <span className="whitespace-nowrap">Buy Me a Coffee</span>
        </a>
      </div>
    </section>
  );
};
