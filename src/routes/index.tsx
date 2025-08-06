import { createBrowserRouter } from 'react-router-dom';

import RouterAuth from './auth';
import RouterCommon from './common';
import RouterThings from './things';

export const router = createBrowserRouter([
  ...RouterAuth,
  ...RouterThings,
  ...RouterCommon,
]);
