import { createSlice } from "@reduxjs/toolkit";

export const singleProduct = createSlice({
  name: "product",
  initialState: {
    loading: "idle",
    product: {},
    error: null,
    productToEdit: {},
  },
  reducers: {
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

export const { setProductToEdit, getProductById } = singleProduct.actions;
