import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Replace this with your actual logic to check authentication
  return true; // example placeholder
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
