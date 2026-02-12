const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="py-6 border-t border-zinc-700">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-sm text-zinc-400 flex items-center gap-2">
            Designed & Developed by
            <a
              className="text-[#ffdb70] hover:text-[#ffdb70]/80 transition-colors duration-200 font-medium"
              href="https://x.com/hiarun01"
              target="_blank"
              rel="noopener noreferrer"
            >
              @hiarun01
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
