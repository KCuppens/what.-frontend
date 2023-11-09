import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
    email: string;
    token: string
};

interface UserContextType {
    user: User | null;
    isAuthenticated: boolean;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => void;
}

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

function parseJSON<T>(value: string | null): T | null {
    if (value === null) return null;
    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(parseJSON<User>(localStorage.getItem('user')));
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const loginUser = async (email: string, password: string) => {
        const response = await fetch(apiUrl + 'users/login-user/', {
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
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, isAuthenticated, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
