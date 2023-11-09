import React, { createContext, useContext, useState, useEffect } from 'react';
import { set } from 'react-hook-form';

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const loginUser = async (email, password) => {
        const response = await fetch('http://localhost:8000/api/v1/users/login-user/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const { message } = await response.json();
            throw new Error(message);
        }

        const userData = await response.json();
        setUser(userData.data);
        setIsAuthenticated(true);
    };

    const logoutUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, isAuthenticated, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
