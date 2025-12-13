// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const isAuthorized = false;

const PrivateRoute = ({ children }: PrivateRouteProps) =>
  isAuthorized ? children : <Navigate to="/login" replace />;

export default PrivateRoute;
