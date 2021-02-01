import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getById } from "Bus/API/product";

export const getProductById = createAsyncThunk(
  "product/getById",

  async (id) => {
    const answer = await getById(id);
    return answer.data;
  }
);

export const singleProduct = createSlice({
  name: "product",
  initialState: {
    loading: "idle",
    product: "",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProductById.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getProductById.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.product = action.payload;
    },
    [getProductById.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error;
    },
  },
});

export default singleProduct.reducer;
