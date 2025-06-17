import {
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from '@tanstack/react-query';
import Cookies from 'universal-cookie';

import { kStorageKey } from '@/constants/common';
import { RouteEndpointsAuth } from '@/constants/route-endpoint';

import customService from '../common/service.config';

const cookies = new Cookies();

const { accessToken, refreshToken } = kStorageKey.Cookies;

export const queryClient = (queryClientConfig?: QueryClientConfig) => {
  const { defaultOptions = {}, ...otherOptions } = queryClientConfig || {};
  const { queries } = defaultOptions;
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        ...queries,
      },
      ...defaultOptions,
    },
    queryCache: new QueryCache({
      onSettled() {
        if (!cookies.get(accessToken) || !cookies.get(refreshToken)) {
          customService.removeCredential();

          window.location.href = RouteEndpointsAuth.LOGIN;
        }
      },
    }),
    ...otherOptions,
  });
};
