import { sagaTypes } from "Saga/sagaTypes";

export const fetchAllProductsAction = (query) => ({
  type: sagaTypes.FETCH_ALL_PRODUCTS_SAGA,
  payload: query,
});

export const fetchMyProductsAction = (query) => ({
  type: sagaTypes.FETCH_MY_PRODUCTS_SAGA,
  payload: query,
});

export const fetchSingleProductAction = (id) => ({
  type: sagaTypes.FETCH_SINGLE_PRODUCT,
  payload: id,
});

export const fetchUpdateProductAction = (productObj) => ({
  type: sagaTypes.UPDATE_PRODUCT,
  payload: productObj,
});

export const fetchCreateProductAction = (product) => ({
  type: sagaTypes.CREATE_PRODUCT,
  payload: product,
});

export const fetchGetOriginsAction = () => ({
  type: sagaTypes.GET_ORIGINS,
});
