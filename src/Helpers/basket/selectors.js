import { store } from "Helpers/basket/core";

export const totalSumBasketSelector = () =>
  store
    .getState()
    .reduce((collector, item) => collector + item.price * item.quantity, 0);

export const totalQuantityBasketSelector = () =>
  store.getState().reduce((collector, item) => collector + item.quantity, 0);

export const basketSelector = () => store.getState();
