import { createSlice } from "@reduxjs/toolkit";

export const allOrigins = createSlice({
  name: "origins",
  initialState: [],
  reducers: {
    setAllOrigins(state, action) {
      const { origins } = action.payload;
      return origins;
    },
  },
});

export const { setAllOrigins } = allOrigins.actions;

export default allOrigins.reducer;
