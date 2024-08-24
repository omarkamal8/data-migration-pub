import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Home from "./routes/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//Test5
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
