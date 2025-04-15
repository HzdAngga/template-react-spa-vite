import { UseQueryOptions, useCTQuery } from '@/hooks/api/api.hooks';
import { APIServices } from '@/services';
import {
  TGetSingleUserParams,
  TGetSingleUserResponse,
} from '@/types/api/things';

export const getSingleUserKey = 'GET_ALL_USERS';
export default function useGetSingleUser(
  params: TGetSingleUserParams,
  options?: UseQueryOptions<TGetSingleUserResponse, TGetSingleUserParams>
) {
  const { data, ...query } = useCTQuery(
    [getSingleUserKey, params],
    () => APIServices.users.getSingleUser(params),
    options
  );

  return { data, ...query };
}
