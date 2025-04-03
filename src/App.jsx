import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";

import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Blogs from "./components/Pages/Blogs";
import AppLayout from "./components/AppLayout/AppLAyout";
import Contact from "./components/Pages/Contact";

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
