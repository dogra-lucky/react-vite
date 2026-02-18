import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productGetById, productsListRoute } from "./api";
import type { ProductInterface } from "./productInterfaces";
export const productListApi = createAsyncThunk("products/list", async () => {
    const res = await productsListRoute();
    return res;
});

export const getProductApi = createAsyncThunk("products/id", async (id: number) => {
    const res = await productGetById(id);
    return res;
});

interface ProductState {
    data: ProductInterface[] | null;
    loading: boolean;
}

const productSlice = createSlice({
    name: "product",
    initialState: { data:null, loading: false }as ProductState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productListApi.pending, (state) => {
            state.loading = true
        });
        builder.addCase(productListApi.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(getProductApi.pending,(state)=>{
            state.loading = true
        });
        builder.addCase(getProductApi.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(getProductApi.rejected, (state) => {
            state.loading = false
            state.data = null
        });
    }
});
export default productSlice.reducer;