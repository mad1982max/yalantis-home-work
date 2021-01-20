import { store } from "core";

export const totalSumBasketSelector = () =>
  store
    .getState()
    .reduce((collector, item) => collector + item.price * item.quantity, 0);

export const totalQuantityBasketSelector = () =>
  store.getState().reduce((collector, item) => collector + item.quantity, 0);

export const basket = () => store.getState();

export const basketSelector = () => store.getState();

export const basketLength = () => store.getState().length;
