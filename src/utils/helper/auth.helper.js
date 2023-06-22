import { LOCAL } from '../constants/index.constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = {};

Auth.getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(LOCAL.TOKEN);
    if (token) return JSON.parse(token);
    return null;
  } catch (error) {
    console.error('Error getting token', error);
  }
};

Auth.checkLogged = async () => {
  const token = await Auth.getToken();
  if (token) return true;
  return false;
};

Auth.setInfo = async data => {
  try {
    // await AsyncStorage.multiRemove([LOCAL.TOKEN, LOCAL.USER_INFO]);
    await AsyncStorage.multiRemove([LOCAL.TOKEN]);
    // await AsyncStorage.setItem(LOCAL.USER_INFO, JSON.stringify(data.userInfo));
    await AsyncStorage.setItem(LOCAL.TOKEN, JSON.stringify(data.accessToken));
  } catch (error) {
    console.error('Error setting userInfo', error);
  }
};

Auth.clearInfo = async () => {
  await AsyncStorage.removeItem(LOCAL.USER_INFO);
  await AsyncStorage.removeItem(LOCAL.TOKEN);
};

export default Auth;
