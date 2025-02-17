const Footer = () => {
  return (
    <>
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Arun Kumar. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
