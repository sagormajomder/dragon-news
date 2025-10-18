import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  return (
    <div>
      <h2 className="mb-5 font-bold">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={22} /> Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={22} /> Login with Github
        </button>
      </div>
    </div>
  );
}
