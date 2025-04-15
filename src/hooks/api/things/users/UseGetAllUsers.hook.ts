import { UseQueryOptions, useCTQuery } from '@/hooks/api/api.hooks';
import { APIServices } from '@/services';
import { TGetAllUsersResponse } from '@/types/api/things';

export const getAllUsersKey = 'GET_ALL_USERS';
export default function useGetAllUsers(
  options?: UseQueryOptions<TGetAllUsersResponse[]>
) {
  const { data, ...query } = useCTQuery(
    [getAllUsersKey],
    () => APIServices.users.getAllUsers(),
    options
  );

  return { data, ...query };
}
