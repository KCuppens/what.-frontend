import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const isAuthenticated = () => {
  // Replace this with your actual logic to check authentication
  return true; // example placeholder
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
