import { createBrowserRouter, Navigate } from "react-router";
import Loading from "../components/Loading";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNewsPage from "../pages/CategoryNewsPage";
import LoginPage from "../pages/LoginPage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import RegistrationPage from "../pages/RegistrationPage";
import ResetPassword from "../pages/ResetPassword";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    hydrateFallbackElement: <Loading />,
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
      { path: "auth/reset-password", Component: ResetPassword },
    ],
  },
  {
    path: "news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetailsPage />
      </PrivateRoute>
    ),
    loader: async () => fetch("../news.json"),
  },
  {
    path: "*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
