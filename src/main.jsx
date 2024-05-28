import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./app/pages/About";
import Projects from "./app/pages/Projects";
import Services from "./app/pages/Services";

import Contact from "./app/pages/Contact";
import FourZeroFour from "./app/components/FourZeroFour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <FourZeroFour />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
