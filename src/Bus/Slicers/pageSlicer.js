import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "pageTweaks",
  initialState: {
    modalCreateVisibility: false,
    isFirstLoading: true,
    pageMessage: {},
    // originsAreLoaded: false,
  },
  reducers: {
    setCreateModalVisibility(state, action) {
      return { ...state, modalCreateVisibility: !state.modalCreateVisibility };
    },
    closeCreateModalVisibility(state, action) {
      return { ...state, modalCreateVisibility: false };
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
  setCreateModalVisibility,
  closeCreateModalVisibility,
  setFirstLoading,
  setOriginsAreLoaded,
  setPageMessage,
} = page.actions;

export default page.reducer;
