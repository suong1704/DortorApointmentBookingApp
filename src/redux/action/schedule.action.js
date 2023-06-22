
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPrivate } from "../../services/ApiCaller";



export const getScheduleBySpeciality = createAsyncThunk('schedule/get-schedule-speciality', async (body) => {
  try {
    const { data } = await ApiCallerPrivate('schedule/get-schedule-speciality', 'POST', body);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

