import { useMemo } from 'react';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { APIServices } from '@/services';
import {
  TGetSingleUserParams,
  TGetSingleUserResponse,
} from '@/types/api/things';

export default function useGetSingleUser({
  params,
  options = {},
}: {
  params?: TGetSingleUserParams;
  options?: Partial<UseQueryOptions<TGetSingleUserResponse>>;
} = {}) {
  const queryKey = useMemo(() => ['GET_SINGLE_USER', params], [params]);

  const { queryKey: _queryKeyFrmOptions, ...restOptions } = options;

  return useQuery({
    queryKey,
    queryFn: () => APIServices.users.getSingleUser(params),
    ...restOptions,
  });
}
