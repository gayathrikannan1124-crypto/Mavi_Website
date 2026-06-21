import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);   // { token, username, email }
  const [loading, setLoading] = useState(true);

  // On mount, check localStorage for saved login
  useEffect(() => {
    const stored = localStorage.getItem("maviit_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("maviit_user");
      }
    }
    setLoading(false);
  }, []);

  // Login — save user info + token
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("maviit_user", JSON.stringify(userData));
  };

  // Logout — clear everything
  const logout = () => {
    setUser(null);
    localStorage.removeItem("maviit_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
