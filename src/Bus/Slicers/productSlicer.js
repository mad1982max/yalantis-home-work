import { createSlice } from "@reduxjs/toolkit";

export const singleProduct = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product: {},
    error: null,
    productToEdit: {},
  },
  reducers: {
    error(state, action) {
      state.error = action.payload;
    },

    loading(state, action) {
      state.loading = action.payload;
    },

    setProductToEdit(state, action) {
      state.productToEdit = action.payload;
    },

    getProductById(state, action) {
      state.loading = "idle";
      state.product = action.payload;
    },
  },
});

export default singleProduct.reducer;

export const {
  setProductToEdit,
  getProductById,
  loading,
  error,
} = singleProduct.actions;
