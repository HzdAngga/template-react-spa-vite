import type { RouteObject } from 'react-router-dom';

import RouterProducts from './products';
import RouterUsers from './users';

const RouterThings: RouteObject[] = [...RouterUsers, ...RouterProducts];

export default RouterThings;
