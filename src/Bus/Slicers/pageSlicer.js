import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "pageTweaks",
  initialState: {
    menuVisibility: false,
    isFirstLoading: true,
    pageMessage: {},
    // originsAreLoaded: false,
  },
  reducers: {
    setVisibility(state, action) {
      return { ...state, menuVisibility: !state.menuVisibility };
    },
    setFirstLoading(state, action) {
      return { ...state, isFirstLoading: false };
    },
    setOriginsAreLoaded(state, action) {
      return { ...state, originsAreLoaded: action.payload };
    },
    setPageMessage(state, action) {
      state.pageMessage = action.payload;
    },
  },
});

export const {
  setVisibility,
  setFirstLoading,
  setOriginsAreLoaded,
  setPageMessage,
} = page.actions;

export default page.reducer;
