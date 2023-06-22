import { createSlice } from "@reduxjs/toolkit";
import { Login, checkLogged, Logout } from "../action/auth.action";

const initialState = {
  user: null,
  isLogged: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(Login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(Login.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = true;
    });
    builder.addCase(Login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(checkLogged.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(checkLogged.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = action.payload;
    }
    );
    builder.addCase(checkLogged.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(Logout.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(Logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = false;
    });
    builder.addCase(Logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  },
});

export default authSlice.reducer;