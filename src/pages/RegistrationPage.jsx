import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function RegistrationPage() {
  const {
    createUser,
    updateUserProfile,
    verifyUserBySendEmail,
    signOutUser,
    user,
    setUser,
    setIsLoading,
  } = useAuth();

  const navigate = useNavigate();

  function handleRegistration(e) {
    e.preventDefault();
    const target = e.target;

    const displayName = target.name.value;
    const photoURL = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;

    // Test User password requirement
    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
      );
      return;
    }

    //1. Create User
    createUser(email, password)
      .then((userCredential) => {
        //2. Update user info
        updateUserProfile({
          displayName,
          photoURL,
        })
          .then(() => {
            //3. Verify email address
            verifyUserBySendEmail()
              .then(() => {
                // 4. immediately signout user
                signOutUser()
                  .then(() => {
                    toast.success(
                      "User registration successful. Check your email to validate your account.",
                    );
                    setIsLoading(false);
                    navigate("/auth/login");
                  })
                  .catch((error) => {
                    console.log(error);
                    toast.error(error.message);
                  });
              })
              .catch((error) => {
                console.log(error);
                toast.error(error.message);
              });
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
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
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-semibold">
          Register your account
        </h2>
        <form onSubmit={handleRegistration}>
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* {nameError && <p className="text-error text-xs">{nameError}</p>} */}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral my-4">
              Register
            </button>
            <p className="text-accent text-center font-semibold">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
