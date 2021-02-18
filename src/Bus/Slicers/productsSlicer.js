import { createSlice } from "@reduxjs/toolkit";

export const allProducts = createSlice({
  name: "products",
  initialState: {
    loading: false,
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

    error(state, action) {
      state.error = action.payload;
    },

    loading(state, action) {
      state.loading = action.payload;
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
  error,
  loading,
} = allProducts.actions;

export default allProducts.reducer;
