import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="max-w-3xl mx-auto py-5 px-5 items-center text-lg">
        <ul className="flex gap-5 font-semibold cursor-pointer ">
          <NavLink to="/">
            <li className="hover:text-[#ffdb70]">About</li>
          </NavLink>
          <NavLink to="/projects">
            <li className="hover:text-[#ffdb70]">Projects</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:text-[#ffdb70]">Contact</li>
          </NavLink>
          <NavLink to="/blogs">
            <li className="hover:text-[#ffdb70]">blogs</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
