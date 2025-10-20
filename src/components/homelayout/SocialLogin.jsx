import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

export default function SocialLogin() {
  const { signInWithGoogle } = useAuth();

  function handleGoogleSignIn() {
    signInWithGoogle()
      .then(() => {
        toast.success("User login successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("User already exists in the database. Try another email");
        } else if (errorCode === "auth/weak-password") {
          toast.error("Enter at least 6 digit password");
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (errorCode === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (errorCode === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (errorCode === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (errorCode === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (errorCode === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(errorMessage || "An unexpected error occurred.");
        }
      });
  }
  return (
    <div>
      <h2 className="mb-5 font-bold">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-secondary btn-outline w-full"
        >
          <FcGoogle size={22} /> Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={22} /> Login with Github
        </button>
      </div>
    </div>
  );
}
