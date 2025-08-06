import type { HttpStatusCode } from 'axios';

// * Please discuss with BE related to error response to keep it consistent
export type TCommonAPIError = {
  message: string | string[];
  statusCode: HttpStatusCode;
};
