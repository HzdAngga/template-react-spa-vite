import { UseQueryOptions, useCTQuery } from '@/hooks/api/api.hooks';
import { APIServices } from '@/services';
import { TGetUserInfoResponse } from '@/types/api/auth';

export const getUserInfoKey = 'GET_USER_INFO';
export default function useGetUserInfo(
  options?: UseQueryOptions<TGetUserInfoResponse>
) {
  const { data, ...query } = useCTQuery(
    [getUserInfoKey],
    () => APIServices.auth.getUserInfo(),
    options
  );

  return { data, ...query };
}
