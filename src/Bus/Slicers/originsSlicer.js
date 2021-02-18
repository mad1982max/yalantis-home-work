import { createSlice } from "@reduxjs/toolkit";

export const allOrigins = createSlice({
  name: "allOrigins",
  initialState: {
    origins: [],
    error: null,
    loading: false,
  },
  reducers: {
    getOrigins(state, action) {
      state.origins = action.payload;
    },
    error(state, action) {
      state.error = action.payload;
    },

    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export default allOrigins.reducer;
export const { getOrigins, loading, error } = allOrigins.actions;
