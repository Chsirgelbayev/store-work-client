import Cookies from 'js-cookie';

import { IAuthResponse, ITokens } from '@/store/user/user.interface';

import { EAuth } from './auth.constants';

export const getAccessToken = () => {
  const accessToken = Cookies.get(EAuth.accessToken);
  return accessToken ? accessToken : '';
};

export const getUserFromStorage = () => {
  const user = localStorage.getItem(EAuth.user);
  return user ? JSON.parse(user) : null;
};

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set(EAuth.accessToken, data.accessToken);
  Cookies.set(EAuth.refreshToken, data.refreshToken);
};

export const removeFromStorage = () => {
  Cookies.remove(EAuth.accessToken);
  Cookies.remove(EAuth.refreshToken);
  localStorage.removeItem(EAuth.user);
};

export const saveToStorage = (data: IAuthResponse) => {
  saveToStorage(data);
  localStorage.setItem(EAuth.user, JSON.stringify(data.user));
};
