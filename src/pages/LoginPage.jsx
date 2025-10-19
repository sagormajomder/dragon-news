import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { signInUser } = useAuth();

  function handleLogin(e) {
    e.preventDefault();

    const target = e.target;

    const email = target.email.value;
    const password = target.password.value;

    signInUser(email, password)
      .then((userCredential) => {})
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-semibold">
          Login your account
        </h2>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
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
