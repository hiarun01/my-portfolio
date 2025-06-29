const Footer = () => {
  return (
    <>
      <footer className="max-w-3xl mx-auto py-5 border-t-2 border-[#ffdb70]">
        <p className="text-center text-[#fafafa]">
          <strong>
            © {new Date().getFullYear()}{" "}
            <a href="https://x.com/hiarun01" target="_black">
              hiarun01
            </a>{" "}
          </strong>
        </p>
      </footer>
    </>
  );
};

export default Footer;
