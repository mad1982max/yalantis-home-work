import { configureStore } from "@reduxjs/toolkit";
import basket from "Bus/Slicers/basketSlicer";
import singleProduct from "Bus/Slicers/productSlicer";
import allProducts from "Bus/Slicers/productsSlicer";
import allOrigins from "Bus/Slicers/originsSlicer";
import menu from "Bus/Slicers/menuSlicer";

const store = configureStore({
  reducer: { basket, singleProduct, allProducts, allOrigins, menu },
});

export { store };
