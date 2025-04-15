import { Navigate, Outlet } from 'react-router-dom';

import {
  RouteEndpointsAuth,
  RouteEndpointsCommon,
} from '@/constants/route-endpoint';
import { useAuthStore } from '@/stores/auth';

import type { CTRouteGuardProps } from './CTRouteGuard.types';

const CTRouteGuard: React.FC<CTRouteGuardProps> = ({ isPrivate = false }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isPrivate)
    return isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to={RouteEndpointsAuth.LOGIN} replace />
    );

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={RouteEndpointsCommon.HOME} replace />
  );
};

export default CTRouteGuard;
