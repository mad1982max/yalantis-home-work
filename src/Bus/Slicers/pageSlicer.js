import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "pageTweaks",
  initialState: {
    modalCreateVisibility: false,
    modalEditVisibility: false,
    isFirstLoading: true,
    pageMessage: {},
  },
  reducers: {
    setCreateModalVisibility(state, action) {
      return { ...state, modalCreateVisibility: !state.modalCreateVisibility };
    },
    closeCreateModalVisibility(state, action) {
      return { ...state, modalCreateVisibility: false };
    },
    setEditModalVisibility(state, action) {
      return { ...state, modalEditVisibility: !state.modalEditVisibility };
    },
    closeEditModalVisibility(state, action) {
      return { ...state, modalEditVisibility: false };
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
  setEditModalVisibility,
  closeEditModalVisibility,
} = page.actions;

export default page.reducer;
