import { createContext } from "react";

export const AuthContext = createContext({
  isLoggIn: false,
  login: () => {},
  logout: () => {},
});
