import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getAllMyGoods } from "Bus/API/product";

export const getAllProducts = createAsyncThunk(
  "products/gettAll",
  async (query) => {
    const answer = await getAll(query);
    return answer.data;
  }
);

export const getAllMyProducts = createAsyncThunk(
  "products/getAllMyProducts",
  async (query) => {
    const answer = await getAllMyGoods(query);
    return answer.data;
  }
);

export const allProducts = createSlice({
  name: "products",
  initialState: {
    loading: "idle",
    products: [],
    myProducts: [],
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
      state.pageParams = { page, perPage, totalItems };
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },

    [getAllMyProducts.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getAllMyProducts.fulfilled]: (state, action) => {
      state.loading = "idle";
      const { items, page, perPage, totalItems } = action.payload;
      state.myProducts = items;
      state.pageParams = { page, perPage, totalItems };
    },
    [getAllMyProducts.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
  },
});

export const { setFilter, clearFilter } = allProducts.actions;

export default allProducts.reducer;
