import { Link } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function ResetPassword() {
  const { resetPasswordBySendEmail } = useAuth();

  function handleForgetPassword(e) {
    e.preventDefault();
    const email = e.target.email.value;

    resetPasswordBySendEmail(email)
      .then(() => {
        toast.success("Check your email for reset password.");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-semibold">
          Reset your password
        </h2>
        <p className="text-center">
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
        <form onSubmit={handleForgetPassword}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <button type="submit" className="btn btn-neutral my-4">
              Send password reset email
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
