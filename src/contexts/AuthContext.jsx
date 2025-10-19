import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, use, useEffect, useState } from "react";
import auth from "./../firebase/firebase.config";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOutUser() {
    return signOut(auth);
  }

  useEffect(function () {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext value={{ user, createUser, signInUser, signOutUser }}>
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
