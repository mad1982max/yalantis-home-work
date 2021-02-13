import { createSlice } from "@reduxjs/toolkit";

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

    getAllProducts(state, action) {
      const { items, page, perPage, totalItems } = action.payload;
      state.products = items;
      state.pageParams = { page, perPage, totalItems };
    },

    getMyProducts(state, action) {
      const { items, page, perPage, totalItems } = action.payload;
      state.myProducts = items;
      state.pageParams = { page, perPage, totalItems };
    },
  },
});

export const {
  setFilter,
  clearFilter,
  getMyProducts,
  getAllProducts,
} = allProducts.actions;

export default allProducts.reducer;
