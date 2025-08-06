import type { RouteObject } from 'react-router-dom';

import { CTRouteGuard } from '@/components';
import { RouteEndpointsThings } from '@/constants/route-endpoint';
import { Users } from '@/pages/things/users';
import { UsersDetail } from '@/pages/things/users/detail';
import { UsersForm } from '@/pages/things/users/form';

const RouterUsers: RouteObject[] = [
  {
    path: RouteEndpointsThings.BASE_USERS,
    element: <CTRouteGuard isPrivate />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      { path: RouteEndpointsThings.ADD_USER, element: <UsersForm /> },
      { path: RouteEndpointsThings.EDIT_USER, element: <UsersForm /> },

      {
        path: RouteEndpointsThings.DETAIL_USER,
        element: <UsersDetail />,
      },
    ],
  },
];

export default RouterUsers;
