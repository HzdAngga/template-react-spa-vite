import {
  QueryKey,
  UseBaseMutationResult,
  UseQueryResult,
  UseMutationOptions as UseReactMutationOptions,
  UseQueryOptions as UseReactQueryOptions,
  useMutation,
  useQuery,
} from 'react-query';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

import kodaService from '@/configs/common/service.config';
import { kStorageKey } from '@/constants/common/storage.constant';
import { RouteEndpointsAuth } from '@/constants/route-endpoint';
import { TCommonAPIError } from '@/types/common';

const cookies = new Cookies();

const { accessToken, refreshToken } = kStorageKey.Cookies;

export type UseQueryOptions<Data = undefined, Error = unknown> = Omit<
  UseReactQueryOptions<Data, Error, Data, QueryKey>,
  'queryKey' | 'queryFn'
>;

export function useCTQuery<Data = undefined, Error = unknown>(
  queryKey: QueryKey,
  callback: () => Promise<Data>,
  options?: UseQueryOptions<Data, Error>
): UseQueryResult<Data, Error> {
  const navigate = useNavigate();

  return useQuery(queryKey, callback, {
    refetchOnWindowFocus: false,
    ...options,
    onError: (err) => {
      options?.onError?.(err);
    },
    onSettled: () => {
      if (!cookies.get(accessToken) || !cookies.get(refreshToken)) {
        kodaService.removeCredential();

        navigate(RouteEndpointsAuth.LOGIN, { replace: true });
      }
    },
  });
}

export type UseMutationOptions<
  Data = undefined,
  Params = undefined,
  Error = TCommonAPIError
> = UseReactMutationOptions<Data, Error, Params>;

export function useCTMutation<
  Data = undefined,
  Params = never,
  Error = TCommonAPIError
>(
  callback: (params: Params) => Promise<Data>,
  options?: UseMutationOptions<Data, Params, Error>
): UseBaseMutationResult<Data, Error, Params> {
  return useMutation(callback, {
    ...options,
    onError: (err, variables, context) => {
      options?.onError?.(err, variables, context);
    },
  });
}
