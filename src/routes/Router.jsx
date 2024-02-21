import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home/Home";
import SubmoduleTest from "../pages/submoduleTest/SubmoduleTest";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/submodule-test",
      element: <SubmoduleTest />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
