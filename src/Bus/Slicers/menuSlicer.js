import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "pageTweaks",
  initialState: {
    menuVisibility: false,
    isFirstLoading: true,
    productsAreLoaded: false,
    productIsLoaded: false,
    originsAreLoaded: false,
  },
  reducers: {
    setVisibility(state, action) {
      return { ...state, menuVisibility: !state.menuVisibility };
    },
    setFirstLoading(state, action) {
      return { ...state, isFirstLoading: false };
    },
    setProductsAreLoaded(state, action) {
      return { ...state, productsAreLoaded: action.payload };
    },
    setProductIsLoaded(state, action) {
      return { ...state, productIsLoaded: action.payload };
    },
    setOriginsAreLoaded(state, action) {
      return { ...state, originsAreLoaded: action.payload };
    },
  },
});

export const {
  setVisibility,
  setFirstLoading,
  setProductsAreLoaded,
  setProductIsLoaded,
  setOriginsAreLoaded,
} = page.actions;

export default page.reducer;
