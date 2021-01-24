import { createSlice } from "@reduxjs/toolkit";

export const page = createSlice({
  name: "pageTweaks",
  initialState: {
    menuVisibility: false,
    isFirstLoading: true,
  },
  reducers: {
    setVisibility(state, action) {
      return { ...state, menuVisibility: !state.menuVisibility };
    },
    setFirstLoading(state, action) {
      return { ...state, isFirstLoading: false };
    },
  },
});

export const { setVisibility, setFirstLoading } = page.actions;

export default page.reducer;
