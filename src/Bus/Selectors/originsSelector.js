import { store } from "core";

export const originArr = () =>
  store.getState().allOrigins.map((item) => item.value);
