
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPublic } from "../../services/ApiCaller";
import Auth from "../../utils/helper/auth.helper";


export const Login = createAsyncThunk('auth/signin', async (body) => {
  try {
    const { data } = await ApiCallerPublic('auth/signin', 'POST', body);
    await Auth.setInfo(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const checkLogged = createAsyncThunk('auth/checkLogged', async () => {
  try {
    const check = await Auth.checkLogged();
    return check;
  } catch (error) {
    throw new Error(error);
  }
});


export const Logout = createAsyncThunk('auth/logout', async () => {
  try {
    await Auth.clearInfo();
    return true;
  } catch (error) {
    throw new Error(error);
  }
});
