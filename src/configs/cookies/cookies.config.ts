import dayjs from 'dayjs';
import type { CookieSetOptions } from 'universal-cookie';

import { RouteEndpointsCommon } from '@/constants/route-endpoint';

export const configCookiesOptions: CookieSetOptions = {
  expires: dayjs().add(30, 'days').toDate(), // * Adjust how many days the token will be expired by discussing with BE
  path: RouteEndpointsCommon.HOME,
};
