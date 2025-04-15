import RouteEndpointsProducts from './products';
import RouteEndpointsUsers from './users';

const RouteEndpointsThings = {
  ...RouteEndpointsUsers,
  ...RouteEndpointsProducts,
} as const;

export default RouteEndpointsThings;
