import { createSlice } from "@reduxjs/toolkit";

export const allFilters = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    setFilter(state, action) {
      return { ...state, ...action.payload };
    },
    clearFilter(state, action) {
      return {};
    },
  },
});

export const { setFilter, clearFilter } = allFilters.actions;

export default allFilters.reducer;
