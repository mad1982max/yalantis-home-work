import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "pageTweaks",
  initialState: {
    modalCreateVisibility: false,
    modalEditVisibility: false,
    isConfirmed: true,
    pageMessage: {},
  },
  reducers: {
    setIsConfirmed(state, action) {
      state.isConfirmed = action.payload;
    },
    setCreateModalVisibility(state, action) {
      state.modalCreateVisibility = !state.modalCreateVisibility;
    },
    closeCreateModalVisibility(state, action) {
      state.modalCreateVisibility = false;
    },
    setEditModalVisibility(state, action) {
      state.modalEditVisibility = !state.modalEditVisibility;
    },
    closeEditModalVisibility(state, action) {
      state.modalEditVisibility = false;
    },
    setOriginsAreLoaded(state, action) {
      state.originsAreLoaded = action.payload;
    },
    setPageMessage(state, action) {
      state.pageMessage = action.payload;
    },
  },
});

export const {
  setCreateModalVisibility,
  closeCreateModalVisibility,
  setOriginsAreLoaded,
  setIsConfirmed,
  setPageMessage,
  setEditModalVisibility,
  closeEditModalVisibility,
} = page.actions;

export default page.reducer;
