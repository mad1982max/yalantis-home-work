import { configureStore } from "@reduxjs/toolkit";
import basketQuantity from "Bus/Slicers/basketSlicer";
import singleProduct from "Bus/Slicers/singleProductSlicer";
import allProducts from "Bus/Slicers/allProductsSlicer";

const store = configureStore({
  reducer: { basket: basketQuantity, singleProduct, allProducts },
});

export { store };
