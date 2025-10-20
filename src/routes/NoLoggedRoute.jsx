import { Navigate } from "react-router";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";

export default function NoLoggedRoute({ children }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Loading />;
  if (user) {
    toast.warn("already logged in.");
    return <Navigate to="/" />;
  }

  return children;
}
