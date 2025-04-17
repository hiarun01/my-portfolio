import {Outlet} from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Layout = () => {
  return (
    <div className="max-w-3xl my-5 m-auto bg-[#111010] text-[#d4d4d4] ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
