import { createSlice } from "@reduxjs/toolkit";

export const basket = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    increment(state, action) {
      const { product } = action.payload;
      let productInBasket = state.find((item) => item.id === product.id);
      if (productInBasket) {
        const newQuantity = productInBasket.quantity + 1;
        return state.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        const newProduct = { ...product, quantity: 1 };
        return [...state, newProduct];
      }
    },

    decrement(state, action) {
      const { product } = action.payload;
      let productInBasket = state.find((item) => item.id === product.id);
      if (productInBasket) {
        const newQuantity = productInBasket.quantity - 1;
        if (newQuantity === 0) {
          return state.filter((item) => item.id !== product.id);
        } else {
          return state.map((item) =>
            item.id === product.id ? { ...item, quantity: newQuantity } : item
          );
        }
      } else {
        console.log("quantity can'\t be less then 0");
        return state;
      }
    },

    deleteProduct(state, action) {
      const { product } = action.payload;
      return state.filter((item) => item.id !== product.id);
    },
  },
});

export const { increment, decrement, deleteProduct } = basket.actions;

export default basket.reducer;
