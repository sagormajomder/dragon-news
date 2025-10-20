import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { signInUser, user, setUser, setIsLoading, signOutUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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
        console.log(error);
        toast.error(error.message);
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
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
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
