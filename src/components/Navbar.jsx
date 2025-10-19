import { Link, NavLink } from "react-router";
import userHeadshot from "../assets/user.png";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div className="mb-5 flex items-center justify-between">
      <div>{user && user.email}</div>
      <nav className="text-accent flex items-center gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>
      <div className="flex items-center gap-5">
        <img src={userHeadshot} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
}
