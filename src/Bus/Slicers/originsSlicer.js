import { createSlice } from "@reduxjs/toolkit";

export const allOrigins = createSlice({
  name: "allOrigins",
  initialState: {
    loading: "idle",
    origins: [],
    error: null,
  },
  reducers: {
    getOrigins(state, action) {
      state.loading = "idle";
      state.origins = action.payload;
    },
  },
});

export default allOrigins.reducer;
export const { getOrigins } = allOrigins.actions;
