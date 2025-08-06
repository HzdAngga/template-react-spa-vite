import customService from '@/configs/common/service.config';
import { EndpointsAuth } from '@/constants/endpoint';
import {
  TGetUserInfoResponse,
  TLoginPayload,
  TLoginResponse,
  TRefreshTokenPayload,
  TRefreshTokenResponse,
} from '@/types/api/auth';

export default class AuthAPI {
  login(payload: TLoginPayload): Promise<TLoginResponse> {
    return customService.base.post(EndpointsAuth.LOGIN, payload);
  }
  getUserInfo(): Promise<TGetUserInfoResponse> {
    return customService.base.get(EndpointsAuth.GET_USER_INFO);
  }
  refreshToken(payload: TRefreshTokenPayload): Promise<TRefreshTokenResponse> {
    return customService.base.post(EndpointsAuth.REFRESH_TOKEN, payload);
  }
}
