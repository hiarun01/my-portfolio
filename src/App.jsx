import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";

import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import AppLayout from "./AppLayout/AppLAyout";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

<div className="min-h-screen text-[#d4d4d4] max-w-3xl mx-auto my-5"></div>;
