import { type AxiosError, HttpStatusCode } from 'axios';

import type { TCommonAPIError } from '@/types/common';

export const handleAxiosAPIError = (
  error: AxiosError<TCommonAPIError | undefined>
): TCommonAPIError => {
  let errorResponse;

  if (error?.response) {
    if (error.response?.data) {
      errorResponse = error.response.data;
    } else {
      errorResponse = {
        statusCode: error.response?.status,
        message: error?.message,
      };
    }
  } else {
    errorResponse = {
      statusCode: error?.status ?? HttpStatusCode.RequestTimeout,
      message: error?.message || 'Please check your connection!',
    };
  }

  if (
    errorResponse.statusCode === HttpStatusCode.InternalServerError ||
    !errorResponse.message
  ) {
    errorResponse = {
      statusCode: errorResponse.statusCode,
      message: 'Sorry, Something Went Wrong',
    };
  }

  return errorResponse;
};
