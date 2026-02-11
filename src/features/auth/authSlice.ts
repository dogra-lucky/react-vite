import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {loginRoute, logoutRoute} from "./api";

export const loginApi = createAsyncThunk("auth/login", async (data: any) => {
  const res = await loginRoute(data);
  return res.data;
});

export const logoutApi = createAsyncThunk("auth/logout", async () => {
  const res = await logoutRoute();
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {user: null, loading: false},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      });
    builder.addCase(logoutApi.pending,(state)=>{
        state.loading = true
    });
    builder.addCase(logoutApi.fulfilled,(state)=>{
        state.loading = false;
        state.user = null
    })
  },
});

export default authSlice.reducer;
