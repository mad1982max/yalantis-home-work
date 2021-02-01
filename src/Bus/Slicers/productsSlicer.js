import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "Bus/API/product";

export const getAllProducts = createAsyncThunk(
  "products/gettAll",
  async (query) => {
    let answer = await getAll(query);
    return answer.data;
  }
);

export const allProducts = createSlice({
  name: "products",
  initialState: {
    loading: "idle",
    products: [],
    pageParams: {},
    filters: {},
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilter(state, action) {
      state.filters = {};
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getAllProducts.fulfilled]: (state, action) => {
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

export const { setFilter, clearFilter } = allProducts.actions;

export default allProducts.reducer;
