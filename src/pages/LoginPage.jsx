import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { signInUser, user, setUser, setIsLoading, signOutUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    const target = e.target;

    const email = target.email.value;
    const password = target.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        if (!userCredential.user?.emailVerified) {
          toast.error("Your email is not verified.");
          // SignOut User
          signOutUser()
            .then(() => {
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              toast.error(error.message);
            });

          return;
        }

        setIsLoading(false);
        toast.success("user log in successfully!");
        navigate(location.state ?? "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // prevent user to go login page after loggedIn
  // useEffect(function () {
  //   if (user) {
  //     toast.warn("You already loggedIn!");
  //   }
  // }, []);

  // if (user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-semibold">
          Login your account
        </h2>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-8 text-lg"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <div>
              <Link to="/auth/reset-password" className="link link-hover">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn btn-neutral my-4">
              Login
            </button>
            <p className="text-accent text-center font-semibold">
              Don’t Have An Account ?{" "}
              <Link to="/auth/registration" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
