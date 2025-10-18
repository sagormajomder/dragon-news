import { createContext, use, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return <AuthContext value={{ user }}>{children}</AuthContext>;
}

function useAuth() {
  const context = use(AuthContext);
  if (context === undefined)
    throw new Error("Auth Context need to use inside Auth Provider");
  return context;
}
export { AuthProvider, useAuth };
