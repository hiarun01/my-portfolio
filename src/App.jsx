import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";

import About from "./components/Pages/About";
import Projects from "./components/Pages/Project/Projects";
import Blogs from "./components/Pages/Blogs";
import {Contact} from "lucide-react";
import AppLayout from "./AppLayout/AppLAyout";

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
