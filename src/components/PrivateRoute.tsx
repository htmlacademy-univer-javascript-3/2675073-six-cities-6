import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

// ПО ТЗ: пользователь ВСЕГДА не авторизован
const isAuthorized = false;

export default function PrivateRoute({ children }: PrivateRouteProps) {
  return isAuthorized ? <>{children}</> : <Navigate to="/login" replace />;
}