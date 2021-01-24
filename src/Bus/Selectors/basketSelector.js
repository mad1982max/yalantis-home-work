import { store } from "core";

export const totalSumBasketSelector = () =>
  store
    .getState()
    .basket.reduce(
      (collector, item) => collector + item.price * item.quantity,
      0
    );

export const totalQuantityBasketSelector = () =>
  store
    .getState()
    .basket.reduce((collector, item) => collector + item.quantity, 0);

export const basket = () => store.getState().basket;
