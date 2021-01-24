import { store } from "core";

export const menuVisibility = () => store.getState().menu.menuVisibility;

export const firstLoading = () => store.getState().menu.isFirstLoading;
