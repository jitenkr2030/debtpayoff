import React, { createContext, useState, useEffect } from 'react';
import adminService from '../services/adminService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        adminService.getCurrentUser().then(setUser);
    }, []);

    const login = async (credentials) => {
        const loggedInUser = await adminService.login(credentials);
        setUser(loggedInUser);
    };

    const logout = async () => {
        await adminService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
