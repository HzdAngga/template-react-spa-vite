import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { APIServices } from '@/services';
import { TGetUserInfoResponse } from '@/types/api/auth';

export const queryKey = ['GET_USER_INFO'];
export default function useGetUserInfo({
  options = {
    queryKey,
  },
}: {
  options?: Partial<UseQueryOptions<TGetUserInfoResponse>>;
} = {}) {
  const { queryKey: _queryKeyFrmOptions, ...restOptions } = options;
  return useQuery({
    queryKey,
    queryFn: () => APIServices.auth.getUserInfo(),
    ...restOptions,
  });
}
