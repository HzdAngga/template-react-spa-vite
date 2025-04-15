import { UseMutationOptions, useCTMutation } from '@/hooks/api/api.hooks';
import { APIServices } from '@/services';
import { TCreateUserParams, TCreateUserResponse } from '@/types/api/things';

export default function useCreateUser(
  options?: UseMutationOptions<TCreateUserResponse, TCreateUserParams>
) {
  return useCTMutation<TCreateUserResponse, TCreateUserParams>(
    (params) => APIServices.users.createUser(params),
    options
  );
}
