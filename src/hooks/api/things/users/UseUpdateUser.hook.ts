import { UseMutationOptions, useCTMutation } from '@/hooks/api/api.hooks';
import { APIServices } from '@/services';
import { TUpdateUserParams, TUpdateUserResponse } from '@/types/api/things';

export default function useUpdateUser(
  options?: UseMutationOptions<TUpdateUserResponse, TUpdateUserParams>
) {
  return useCTMutation<TUpdateUserResponse, TUpdateUserParams>(
    (params) => APIServices.users.UpdateUser(params),
    options
  );
}
