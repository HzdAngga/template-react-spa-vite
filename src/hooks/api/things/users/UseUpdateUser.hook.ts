import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { APIServices } from '@/services';
import { TUpdateUserParams, TUpdateUserResponse } from '@/types/api/things';
import { TCommonAPIError } from '@/types/common';

export default function useUpdateUser({
  options = {},
}: {
  options?: Partial<
    UseMutationOptions<TUpdateUserResponse, TCommonAPIError, TUpdateUserParams>
  >;
} = {}) {
  return useMutation({
    mutationFn: (params) => APIServices.users.UpdateUser(params),
    ...options,
  });
}
