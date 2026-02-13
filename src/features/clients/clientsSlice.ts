import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {clientListRoute, clientProfileRoute} from "./api";
import {type paginationInterface} from "./interfaces/clientInterfaces";
export const clientListApi = createAsyncThunk(
  "clients/fetchList",
  async (payload: paginationInterface) => {
    const res = await clientListRoute(payload);
    return res.data;
  },
);

export const clientDetailsApi = createAsyncThunk(
  "clients/detail",
  async (id: number) => {
    const res = await clientProfileRoute(id);
    return res.data.data;
  },
);

const clientSlice = createSlice({
  name: "client_list",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    /* listing api */
    builder.addCase(clientListApi.pending, (state) => {
      state.data = null;
      state.loading = true;
    });
    builder.addCase(clientListApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(clientListApi.rejected, (state) => {
      state.loading = false;
      state.data = null;
    });

    /* profile detail api */
    builder.addCase(clientDetailsApi.pending, (state) => {
      state.data = null;
      state.loading = true;
    });
    builder.addCase(clientDetailsApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(clientDetailsApi.rejected, (state) => {
      state.loading = false;
      state.data = null;
    });
  },
});

export default clientSlice.reducer;
