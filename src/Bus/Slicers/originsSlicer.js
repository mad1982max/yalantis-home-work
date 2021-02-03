import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrigins } from "Bus/API/product";

export const getOrigins = createAsyncThunk("origins/getAll", async () => {
  const answer = await getAllOrigins();
  console.log(answer.data);
  return answer.data.items;
});

export const allOrigins = createSlice({
  name: "origins",
  initialState: {
    loading: "idle",
    origins: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getOrigins.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getOrigins.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.origins = action.payload;
    },
    [getOrigins.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
  },
});

export default allOrigins.reducer;
