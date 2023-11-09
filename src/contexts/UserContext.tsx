import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
    email: string;
    token: string;
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

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') ?? 'null'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);
    const apiUrl = "https://what-backend-1849-stage.us.aldryn.io/api/v1/";

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const loginUser = async (email: string, password: string) => {
        try {
            const response = await fetch(`${apiUrl}users/login-user/`, {
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
        } catch (error) {
            console.error('Login failed:', error);
            // Optionally, handle the error more robustly here.
        }
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
