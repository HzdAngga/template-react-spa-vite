import EndpointsProducts from './products';
import EndpointsUsers from './users';

const EndpointsThings = {
  ...EndpointsProducts,
  ...EndpointsUsers,
} as const;

export default EndpointsThings;
