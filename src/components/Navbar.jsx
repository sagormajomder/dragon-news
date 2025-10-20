import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import userHeadshot from "../assets/user.png";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, signOutUser, setIsLoading, isLoading } = useAuth();

  function handleLogOut() {
    signOutUser()
      .then(() => {
        toast.success("Log out successful");
        setIsLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }

  return (
    <div className="mb-5 flex items-center justify-between">
      <div></div>
      <nav className="text-accent flex items-center gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>
      <div className="flex items-center gap-5">
        <div className="overflow-hidden rounded-full">
          {isLoading ? (
            <span className="loading loading-ring loading-xl"></span>
          ) : (
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={user ? user.photoURL : userHeadshot}
              alt=""
            />
          )}
        </div>

        {user ? (
          <button className="btn btn-primary px-10" onClick={handleLogOut}>
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
