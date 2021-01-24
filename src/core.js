import { configureStore } from "@reduxjs/toolkit";
import basket from "Bus/Slicers/basketSlicer";
import singleProduct from "Bus/Slicers/productSlicer";
import allProducts from "Bus/Slicers/productsSlicer";
import allOrigins from "Bus/Slicers/originsSlicer";
import allFilters from "Bus/Slicers/filtersSlicer";
import menu from "Bus/Slicers/menuSlicer";

const store = configureStore({
  reducer: { basket, singleProduct, allProducts, allOrigins, allFilters, menu },
});

export { store };
