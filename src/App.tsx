import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { ProductProvider } from './contexts/ProductContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/shared/Navigation';

function App() {
  return (
    <UserProvider>
      <ProductProvider>
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
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
