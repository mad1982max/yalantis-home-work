import { configureStore } from "@reduxjs/toolkit";
import basketQuantity from "Bus/Slicers/basketSlicer";
import singleProduct from "Bus/Slicers/singleProductSlicer";

const store = configureStore({
  reducer: { basket: basketQuantity, singleProduct },
});

export { store };
