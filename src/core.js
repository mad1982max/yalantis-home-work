import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import basket from "Bus/Slicers/basketSlicer";
import singleProduct from "Bus/Slicers/productSlicer";
import allProducts from "Bus/Slicers/productsSlicer";
import allOrigins from "Bus/Slicers/originsSlicer";
import menu from "Bus/Slicers/pageSlicer";
import rootSaga from "sagaTest";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
  reducer: { basket, singleProduct, allProducts, allOrigins, menu },
  middleware,
});

sagaMiddleware.run(rootSaga);

export { store };
