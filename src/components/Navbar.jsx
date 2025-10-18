import { NavLink } from "react-router";
import userHeadshot from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div></div>
      <nav className="text-accent flex items-center gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>
      <div className="flex items-center gap-5">
        <img src={userHeadshot} alt="" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
}
