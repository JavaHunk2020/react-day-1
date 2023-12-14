import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Load token from localStorage on initial render
  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Function to set token and save it to localStorage
  const setAuthToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('userToken', newToken);
  };

  // Function to remove token on logout
  const logout = () => {
    setToken(null);
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setAuthToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
