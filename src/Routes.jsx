import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomeLayout from "./Body/Home/HomeLayout";
import Home1 from "./Body/Home/Home1/Home1Main";
import Home2 from "./Body/Home/Home2/Home2Main";
import Home3 from "./Body/Home/Home3/Home3Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          { index: true, element: <Home1 /> },
          { path: "Home1Main", element: <Home1 /> },
          { path: "Home2Main", element: <Home2 /> },
          { path: "Home3Main", element: <Home3 /> },
        ],
      },
    ],
  },
]);

export default router;
