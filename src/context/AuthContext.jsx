import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  //added this line

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const saved = localStorage.getItem('user');
  //   if (token && saved) {
  //     setUser(JSON.parse(saved));
  //   }
  // }, []);
  useEffect(() => {
  const token = localStorage.getItem('token');
  const saved = localStorage.getItem('user');

  if (token && saved) {
    setUser(JSON.parse(saved));
  }

  setLoading(false);
}, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    // <AuthContext.Provider value={{ user, login, logout }}>
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
