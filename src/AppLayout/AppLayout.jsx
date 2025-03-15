import {Outlet} from "react-router-dom";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

const AppLayout = () => {
  return (
    <div className="max-w-3xl my-7 m-auto px-6">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
