import { createSelector } from "reselect";

export const basket = (state) => state.basket;

export const totalSumBasketSelector = createSelector(basket, (items) =>
  items.reduce((collector, item) => collector + item.price * item.quantity, 0)
);

export const totalQuantityBasketSelector = createSelector(basket, (items) =>
  items.reduce((collector, item) => collector + item.quantity, 0)
);
