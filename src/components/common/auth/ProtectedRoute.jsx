const { Navigate, Outlet } = require('react-router-dom');

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
