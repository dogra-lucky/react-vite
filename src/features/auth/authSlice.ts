import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {loginApi} from "./api";

export const login = createAsyncThunk("auth/login", async (data: any) => {
  const res = await loginApi(data);
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {user: null, loading: false},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      });
  },
});


export default authSlice.reducer;

