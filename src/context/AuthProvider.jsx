import { createContext, useContext, useState } from "react";
const AuthContext = createContext({ username: "", password: "" });
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ username: "", password: "" });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  return [user, setUser];
};
