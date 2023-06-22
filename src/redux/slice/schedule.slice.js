import { getScheduleBySpeciality } from "../action/schedule.action";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listSchedule: [],
  error: null,
  specialityID: null,
  doctorID: null,
  appointmentDate: null,
};


export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setSpecialityID: (state, { payload }) => {
      state.specialityID = payload;
    },
    setDoctorID: (state, { payload }) => {
      state.doctorID = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getScheduleBySpeciality.pending, (state) => {
      state.loading = true;
      state.listSchedule = [];
    });
    builder.addCase(getScheduleBySpeciality.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.listSchedule = payload;
    });
    builder.addCase(getScheduleBySpeciality.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.listSchedule = [];
    });
  }
}
);


export const { setSpecialityID, setDoctorID } = scheduleSlice.actions;
export default scheduleSlice.reducer;