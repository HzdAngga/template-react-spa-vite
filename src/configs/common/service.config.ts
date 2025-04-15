import { message } from 'antd';
import axios, { type AxiosError } from 'axios';
import Cookies from 'universal-cookie';

import { configCookiesOptions } from '@/configs/cookies/cookies.config';
import { kStorageKey } from '@/constants/common';
import { APIServices } from '@/services';
import { useAuthStore } from '@/stores/auth';
import type { TCommonAPIError } from '@/types/common';

import Http from './axios.config';
import { env } from './environment.config';

const cookies = new Cookies();

const { accessToken: at, refreshToken: rt } = kStorageKey.Cookies;

class CustomService {
  // * If there are more than one API url, you can add more Http construction just like `base` on below.
  base: Http;

  constructor() {
    this.base = new Http(
      {
        baseURL: env.BASE_URL,
        headers: {
          Authorization: `Bearer ${cookies.get(at)}`,
        },
      },
      { onError: this.onError }
    );
  }

  updateAuthorizationToken(token: string | null) {
    this.base.updateConfig({
      headers: { Authorization: token ? `Bearer ${token}` : null },
    });
  }

  // * Arguments below is bare minimum, you can change it according what you need. For example, if you need idToken, you can add there
  // * Better to split the type to other files, this is only an example.
  setCredential({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    cookies.set(at, accessToken, configCookiesOptions);
    cookies.set(rt, refreshToken, configCookiesOptions);

    this.updateAuthorizationToken(accessToken); // * This is for enabling fetch data with token when access token is added (login).
  }

  removeCredential() {
    cookies.remove(at, configCookiesOptions);
    cookies.remove(rt, configCookiesOptions);

    useAuthStore.setState((state) => ({ ...state, isAuthenticated: false }));

    this.updateAuthorizationToken(null); // * This is for disabling fetch data with token when access token is added (logout).
  }

  async onError(error: AxiosError<TCommonAPIError>) {
    // TODO: Ask back-end to keep the error response consistant

    const { config } = error;
    if (!config) return Promise.reject(error);

    const data = error.response?.data;

    // * If your app doesn't have refresh token mechanism, please delete these block
    // * Else, please discuss with BE related to how to know when the token expired.
    if (data?.message === 'TokenExpired') {
      return await APIServices.auth
        .refreshToken({
          refreshToken: cookies.get(rt),
        })
        .then((data) => {
          this.setCredential({
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
          });

          this.updateAuthorizationToken(data.access_token);
          config.headers.Authorization = `Bearer ${data.access_token}`;
          return axios.request(config);
        })
        .catch(() => {
          this.removeCredential();

          message.open({
            content: 'Session expired, please re-login!',
            type: 'error',
          });

          window.location.reload();
        });
    }

    return Promise.reject(error);
  }
}

const kodaService = new CustomService();

export default kodaService;
