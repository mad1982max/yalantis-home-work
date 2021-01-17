import { createSlice } from "@reduxjs/toolkit";

export const basketQuantuty = createSlice({
  name: "basketQuantuty",
  initialState: [],
  reducers: {
    changeBasketQuantity(state, action) {
      const { product, description } = action.payload;

      if (description === "deleteAll") {
        return state.filter((item) => item.id !== product.id);
      } else {
        let productInBasket = state.find((item) => item.id === product.id);
        const term = description === "decrementOne" ? -1 : 1;
        if (productInBasket) {
          const newQuantity = productInBasket.quantity + term;
          if (newQuantity === 0) {
            return state.filter((item) => item.id !== product.id);
          } else {
            return state.map((item) =>
              item.id === product.id ? { ...item, quantity: newQuantity } : item
            );
          }
        } else {
          const newProduct = { ...product, quantity: 1 };
          return [...state, newProduct];
        }
      }
    },
  },
});

export const { changeBasketQuantity, deleteAll } = basketQuantuty.actions;

export default basketQuantuty.reducer;

// export const basketQuantuty = createSlice({
//   name: "basketQuantuty",
//   initialState: [],
//   reducers: {
//     changeBasketQuantity(state, action) {
//       const { product, description } = action.payload;
//       let productInBasket = state.find((item) => item.id === product.id);
//       if (description === "deleteall") {
//         state = [];
//       } else if (description === "incrementOne") {
//         productInBasket.quantity += 1;
//       } else {
//         productInBasket.quantity -= 1;
//       }
//     },
//   },
// });
