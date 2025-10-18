import {FaRegHeart} from "react-icons/fa";
import {SiBuymeacoffee} from "react-icons/si";

export const SupportMe = () => {
  return (
    <section className="mb-5 py-5 ">
      <h2 className="text-lg font-bold mb-3">Support Me</h2>
      <p className="text-zinc-400 mb-4">
        If you find my work helpful, consider supporting me. Your support helps
        me continue creating and sharing projects.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://github.com/sponsors/hiarun01"
          target="_blank"
          rel="noopener noreferrer"
          className="support-btn flex-1 justify-center"
        >
          <FaRegHeart className="text-pink-400" />
          <span>GitHub Sponsors</span>
        </a>

        <a
          href="https://buymeacoffee.com/hiarun01"
          target="_blank"
          rel="noopener noreferrer"
          className="support-btn flex-1 justify-center"
        >
          <SiBuymeacoffee className="text-yellow-400" />
          <span>Buy Me a Coffee</span>
        </a>
      </div>
    </section>
  );
};
