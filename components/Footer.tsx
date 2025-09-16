import {FiHeart} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8">
      <div className="py-6 border-t border-zinc-700">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-sm text-zinc-400 flex items-center gap-2">
            Made with <FiHeart className="text-red-500 animate-pulse" /> by{" "}
            <a
              className="text-[#ffdb70] hover:text-[#ffdb70]/80 transition-colors duration-200 font-medium"
              href="https://x.com/hiarun01"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arun Kumar
            </a>
          </p>
          <p className="text-xs text-zinc-500">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
