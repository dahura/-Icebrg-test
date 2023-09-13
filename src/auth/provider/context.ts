import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  loading: false,
  logOut: () => {},
  user: {
    email: "",
    name: "",
    username: "",
  },
});

AuthContext.displayName = "AuthContext";
