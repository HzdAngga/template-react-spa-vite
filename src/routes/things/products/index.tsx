import type { RouteObject } from 'react-router-dom';

import { CTRouteGuard } from '@/components';
import { RouteEndpointsThings } from '@/constants/route-endpoint';
import { Products } from '@/pages/things/products';

const RouterProducts: RouteObject[] = [
  {
    path: RouteEndpointsThings.BASE_PRODUCTS,
    element: <CTRouteGuard isPrivate />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
];

export default RouterProducts;
