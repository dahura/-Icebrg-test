import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  loading: false,
});

AuthContext.displayName = "AuthContext";
