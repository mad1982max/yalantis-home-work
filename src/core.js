import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import basket from "Bus/Slicers/basketSlicer";
import singleProduct from "Bus/Slicers/productSlicer";
import allProducts from "Bus/Slicers/productsSlicer";
import allOrigins from "Bus/Slicers/originsSlicer";
import menu from "Bus/Slicers/pageSlicer";
import rootSaga from "Bus/Saga/rootSaga";

const rootReducer = combineReducers({
  basket,
  singleProduct,
  allProducts,
  allOrigins,
  menu,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
