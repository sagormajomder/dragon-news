import { updateProfile } from "firebase/auth";
import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function RegistrationPage() {
  const { createUser } = useAuth();
  function handleRegistration(e) {
    e.preventDefault();
    const target = e.target;

    const name = target.name.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;

    // console.log(name, photo, email, password);
    createUser(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;

        updateProfile(newUser, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => console.log(error.message));
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
              Login
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
