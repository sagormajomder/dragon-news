import { format } from "date-fns";
import logo from "../assets/logo.png";
export default function HeaderLogo() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center gap-3 pt-5">
      <img className="w-sm" src={logo} alt="Dragon news logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">
        {format(new Date(), "	EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
}
