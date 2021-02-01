import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "Bus/API/product";

const p = "products/gettAll";

export const getAllProducts = createAsyncThunk(p, async (query) => {
  let answer = await getAll(query);
  return answer.data;
});

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
      console.log("--2--", action);
      state.loading = "idle";
      const { items, page, perPage, totalItems } = action.payload;
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
