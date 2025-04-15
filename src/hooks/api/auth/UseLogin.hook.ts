import { UseMutationOptions, useCTMutation } from '@/hooks/api/api.hooks';
import { APIServices } from '@/services';
import { TLoginPayload, TLoginResponse } from '@/types/api/auth';

export default function useLogin(
  options?: UseMutationOptions<TLoginResponse, TLoginPayload>
) {
  return useCTMutation<TLoginResponse, TLoginPayload>(
    (params) => APIServices.auth.login(params),
    options
  );
}
