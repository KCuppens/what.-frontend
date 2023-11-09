import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useUserContext } from '../contexts/UserContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useUserContext();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
