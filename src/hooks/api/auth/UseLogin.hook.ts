import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { APIServices } from '@/services';
import { TLoginPayload, TLoginResponse } from '@/types/api/auth';
import { TCommonAPIError } from '@/types/common';

export default function useLogin({
  options = {},
}: {
  options?: Partial<
    UseMutationOptions<TLoginResponse, TCommonAPIError, TLoginPayload>
  >;
} = {}) {
  return useMutation({
    mutationFn: (params) => APIServices.auth.login(params),
    ...options,
  });
}
