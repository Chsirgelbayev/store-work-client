import axios from 'axios';
import Cookies from 'js-cookie';

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface';

import { getContentType } from '@/api/api.helper';

import { EAuth } from './auth.constants';
import { saveToStorage } from './auth.helper';

export const AuthService = {
  async main(type: 'login' | 'register', credentials: IEmailPassword) {
    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + '/auth/login',
      credentials,
      { headers: getContentType() }
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
  },

  async getNewTokens() {
    const refreshToken = Cookies.get(EAuth.refreshToken);

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + '/auth/login/access-token',
      { refreshToken },
      { headers: getContentType() }
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
  }
};

export default AuthService;
