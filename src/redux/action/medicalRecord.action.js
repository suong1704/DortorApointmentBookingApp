import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPrivate } from "../../services/ApiCaller";

export const getAllMedicalRecord = createAsyncThunk('medical-record/get', async (body) => {
  try {
    const { data } = await ApiCallerPrivate('medical-record/get-by-id-patient', 'POST', body);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

