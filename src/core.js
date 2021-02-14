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
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["navigation"],
};

const rootReducer = combineReducers({
  basket,
  singleProduct,
  allProducts,
  allOrigins,
  menu,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
