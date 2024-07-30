// src/context/AuthContext.js

import React, { createContext, useState } from 'react';
import { registerUser } from '../services/apiService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  const register = async (userData) => {
    try {
      const response = await registerUser(userData);
      setAuthState({
        isAuthenticated: true,
        user: response.user,
      });
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed');
    }
  };

  // Other auth functions like login, logout, etc.

  return (
    <AuthContext.Provider value={{ ...authState, register }}>
      {children}
    </AuthContext.Provider>
  );
};
