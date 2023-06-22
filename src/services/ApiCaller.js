import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOCAL } from '../utils/constants/index.constants';
import { BASE_API } from '../utils/constants/index.constants';
import Auth from '../utils/helper/auth.helper';

export const ApiCallerPublic = (endpoint, method, body) => {
  console.log(`${BASE_API}/api/${endpoint}`);
  return axios({
    method: method,
    url: `${BASE_API}/api/${endpoint}`,
    headers: { 'Content-Type': 'application/json' },
    data: body,
    timeout: 10000,
  });
};

export const ApiCallerPrivate = async (endpoint, method, body) => {
  const token = await Auth.getToken();
  console.log(token);
  return axios({
    method: method,
    url: `${BASE_API}/api/${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    data: body,
    timeout: 10000,
  });
};