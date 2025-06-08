import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate Auth0 authentication check
    const checkAuth = () => {
      const savedUser = localStorage.getItem("auth_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = () => {
    // Simulate Auth0 login
    const mockUser = {
      id: "1",
      name: "Sarah Chen",
      email: "sarah.chen@lendflow.com",
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem("auth_user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("auth_user");
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };
};
