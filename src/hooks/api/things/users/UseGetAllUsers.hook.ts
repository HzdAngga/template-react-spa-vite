import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { APIServices } from '@/services';
import { TGetAllUsersResponse } from '@/types/api/things';

export const queryKey = ['GET_ALL_USERS'];
export default function useGetAllUsers({
  options = {
    queryKey,
  },
}: {
  options?: Partial<UseQueryOptions<TGetAllUsersResponse[]>>;
} = {}) {
  const { queryKey: _queryKeyFrmOptions, ...restOptions } = options;

  return useQuery({
    queryKey,
    queryFn: () => APIServices.users.getAllUsers(),
    ...restOptions,
  });
}
