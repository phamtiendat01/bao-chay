import { createContext, useContext, useState } from 'react';
export const AuthContext = createContext(null);
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
  return [user, setUser];
};
