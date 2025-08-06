import Cookies from 'universal-cookie';
import { create } from 'zustand';

import { kStorageKey } from '@/constants/common';

import { UseAuthStoreProps } from './auth.type';

const cookies = new Cookies();

const { accessToken, refreshToken } = kStorageKey.Cookies;
const userInfo = kStorageKey.UserInfo;

const useAuthStore = create<UseAuthStoreProps>((set) => {
  return {
    isAuthenticated: Boolean(
      cookies.get(accessToken) && cookies.get(refreshToken)
    ),
    updateIsAuthenticated: (value) =>
      set((state) => ({ ...state, isAuthenticated: value })),
    userInfo: JSON.parse(localStorage.getItem(userInfo) || 'null'),
    updateUserInfo: (value) => {
      if (!value) localStorage.removeItem(userInfo);
      else localStorage.setItem(userInfo, JSON.stringify(value));

      return set((state) => ({ ...state, userInfo: value }));
    },
  };
});

export default useAuthStore;
