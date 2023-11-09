import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/shared/Navigation';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
