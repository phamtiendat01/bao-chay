import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  if (user === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return [user, setUser];
};
