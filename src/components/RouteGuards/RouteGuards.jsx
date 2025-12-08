import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('chat-with-docs-token');
  
  if (!token) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('chat-with-docs-token');

  if (token) {
    return <Navigate to="/home" replace />;
  }

  return children;
};