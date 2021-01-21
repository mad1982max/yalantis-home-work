import { createSlice } from "@reduxjs/toolkit";

export const allProducts = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    setAllProduct(state, action) {
      const { goods } = action.payload;
      return goods;
    },
  },
});

export const { setAllProduct } = allProducts.actions;

export default allProducts.reducer;
