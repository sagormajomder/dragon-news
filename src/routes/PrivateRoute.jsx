import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <Loading />;

  if (!user) {
    return <Navigate to="/auth/login" replace state={location.pathname} />;
  }

  return children;
}
