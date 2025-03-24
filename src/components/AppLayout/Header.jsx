import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="max-w-3xl mx-auto py-5 px-6 items-center text-lg">
        <ul className="flex gap-5 font-semibold ">
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          {/* <NavLink to="/resume">
            <li>Resume</li>
          </NavLink> */}
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/blogs">
            <li>blogs</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
