import type { RouteObject } from 'react-router-dom';

import { CTRouteGuard } from '@/components';
import { RouteEndpointsAuth } from '@/constants/route-endpoint';
import { ForgotPassword } from '@/pages/auth/forgot-password';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';

const RouterAuth: RouteObject[] = [
  {
    path: RouteEndpointsAuth.LOGIN,
    element: <CTRouteGuard />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: RouteEndpointsAuth.REGISTER,
    element: <CTRouteGuard />,
    children: [{ index: true, element: <Register /> }],
  },
  {
    path: RouteEndpointsAuth.FORGOT_PASSWORD,
    element: <CTRouteGuard />,
    children: [{ index: true, element: <ForgotPassword /> }],
  },
];

export default RouterAuth;
