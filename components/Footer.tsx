import ViewCounter from "./ViewCounter";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="flex justify-end mb-1">
        <ViewCounter />
      </div>
      <div className="py-5 border-t-2 border-[#ffdb70]">
        <p className="text-center text-sm">
          Designed and Developed by :{" "}
          <a
            className="text-[#ffdb70] hover:opacity-80 transition-opacity duration-200"
            href="https://x.com/hiarun01"
            target="_blank"
            rel="noopener noreferrer"
          >
            hiarun01
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
