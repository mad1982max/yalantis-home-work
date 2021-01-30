import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const singleProduct = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    setSingleProduct(state, action) {
      const { product } = action.payload;
      return product;
    },
  },
});

export const { setSingleProduct } = singleProduct.actions;

export default singleProduct.reducer;
