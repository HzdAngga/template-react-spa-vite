import { message } from 'antd';
import type { NavigateFunction } from 'react-router-dom';

import { RouteEndpointsThings } from '@/constants/route-endpoint';
import { TCommonAPIError } from '@/types/common';
import { capitalize } from '@/utils/string.utils';

export const handleUsersFormSuccess = (isEdit: boolean, navigate: NavigateFunction) => {
  message.open({
    content: `User has been ${isEdit ? 'edit' : 'creat'}ed successfully.`,
    type: 'success',
  });
  navigate(RouteEndpointsThings.BASE_USERS, { replace: true });
};

export const handleUsersFormError = (err: TCommonAPIError) => {
  if (typeof err.message !== 'string') {
    err.message.forEach((msg) => {
      message.open({
        content: capitalize(msg, { isFirstCharOnly: true }),
        type: 'error',
      });
    });
    return;
  }

  message.open({
    content: capitalize(err?.message, { isFirstCharOnly: true }),
    type: 'error',
  });
};
