import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="max-w-3xl mx-auto py-5 px-6 items-center text-lg">
        <ul className="flex gap-5 font-semibold ">
          <Link to="/">
            <li>About</li>
          </Link>

          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/blogs">
            <li>blogs</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
