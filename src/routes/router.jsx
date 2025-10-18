import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNewsPage from "../pages/CategoryNewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/category/:id",
        Component: CategoryNewsPage,
        loader: async () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "auth",
    element: <h2>Authentication route</h2>,
  },
  {
    path: "news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
