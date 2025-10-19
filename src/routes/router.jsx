import { createBrowserRouter, Navigate } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNewsPage from "../pages/CategoryNewsPage";
import LoginPage from "../pages/LoginPage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import RegistrationPage from "../pages/RegistrationPage";

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
        loader: async () => fetch("../news.json"),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "auth/registration",
        Component: RegistrationPage,
      },
      {
        path: "auth/login",
        Component: LoginPage,
      },
    ],
  },
  {
    path: "news-details/:id",
    Component: NewsDetailsPage,
    loader: async () => fetch("../news.json"),
  },
  {
    path: "*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
