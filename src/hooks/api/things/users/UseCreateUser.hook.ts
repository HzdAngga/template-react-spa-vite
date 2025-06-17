import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { APIServices } from '@/services';
import { TCreateUserParams, TCreateUserResponse } from '@/types/api/things';
import { TCommonAPIError } from '@/types/common';

export default function useCreateUser({
  options = {},
}: {
  options?: Partial<
    UseMutationOptions<TCreateUserResponse, TCommonAPIError, TCreateUserParams>
  >;
} = {}) {
  return useMutation({
    mutationFn: (params) => APIServices.users.createUser(params),
    ...options,
  });
}
