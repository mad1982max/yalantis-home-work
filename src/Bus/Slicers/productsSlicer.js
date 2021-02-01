import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "Bus/API/product";

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (query) => await getAll(query)
);

export const allProducts = createSlice({
  name: "products",
  initialState: {
    loading: "idle",
    products: [],
    pageParams: {},
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      console.log("--2--", action.payload);
      state.loading = "idle";
      const { items, page, perPage, totalItems } = action.payload.data;
      state.products = items;
      state.pageParams = { currentPage: page, perPage, totalItems };
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
  },
});

export default allProducts.reducer;
