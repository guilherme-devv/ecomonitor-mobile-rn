import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse, ErrorResponse } from '../../types/authTypes';

const TOKEN_URL = 'http://54.221.28.215:8000/api/accounts/token/';
const REFRESH_URL = 'http://54.221.28.215:8000/api/accounts/token/refresh/';

const formatPhoneNumber = (phoneNumber: string): string => {
  let formatted = phoneNumber.replace(/\D/g, '');
  if (!formatted.startsWith('55')) {
    formatted = `55${formatted}`;
  }
  return `+${formatted}`;
};

const AuthService = {
  login: async (
    phoneNumber: string,
    password: string
  ): Promise<AuthResponse | ErrorResponse> => {
    try {
      const formattedPhone = formatPhoneNumber(phoneNumber);
      console.log('Número formatado para envio:', formattedPhone);
      console.log('senha:', password);

      const response = await axios.post<AuthResponse>(TOKEN_URL, {
        number_of_phone: formattedPhone,
        password: password,
      });

      if (response.status === 200) {
        await AsyncStorage.setItem('accessToken', response.data.access);
        await AsyncStorage.setItem('refreshToken', response.data.refresh);
        return response.data;
      }
    } catch (error: any) {
      console.error('Erro ao tentar fazer login:', error);

      if (error.response) {
        console.error('Detalhes do erro:', error.response.data);
      }

      return error.response?.data || { detail: 'Erro desconhecido' };
    }
    return { detail: 'Erro inesperado' };
  },

  refreshAccessToken: async (): Promise<string | null> => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('Refresh token not found');

      const response = await axios.post<{ access: string }>(REFRESH_URL, {
        refresh: refreshToken,
      });

      if (response.status === 200) {
        await AsyncStorage.setItem('accessToken', response.data.access);
        return response.data.access;
      }
    } catch (error) {
      await AuthService.logout();
      return null;
    }
    return null; // ✅ Garante retorno
  },

  getAccessToken: async (): Promise<string | null> => {
    let accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      accessToken = await AuthService.refreshAccessToken();
    }
    return accessToken;
  },

  logout: async (): Promise<void> => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
  },
};

export default AuthService;
