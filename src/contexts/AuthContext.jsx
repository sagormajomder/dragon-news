import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, use, useEffect, useState } from "react";
import auth from "./../firebase/firebase.config";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(user);

  // User Registration
  function createUser(email, password) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateUserProfile(updateInfo) {
    return updateProfile(auth.currentUser, updateInfo);
  }

  function verifyUserBySendEmail() {
    auth.useDeviceLanguage();
    return sendEmailVerification(auth.currentUser);
  }

  // SignIn and Signout User
  function signInUser(email, password) {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOutUser() {
    setIsLoading(true);
    return signOut(auth);
  }

  // Password Reset
  function resetPasswordBySendEmail(email) {
    auth.useDeviceLanguage();
    return sendPasswordResetEmail(auth, email);
  }
  // Observer to get current logged User
  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext
      value={{
        user,
        setUser,
        createUser,
        updateUserProfile,
        verifyUserBySendEmail,
        signInUser,
        signOutUser,
        resetPasswordBySendEmail,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext>
  );
}

function useAuth() {
  const context = use(AuthContext);
  if (context === undefined)
    throw new Error("Auth Context need to use inside Auth Provider");
  return context;
}
export { AuthProvider, useAuth };
