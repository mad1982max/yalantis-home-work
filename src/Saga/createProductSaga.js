import { put, call, takeEvery } from "redux-saga/effects";
import { sagaTypes } from "Saga/sagaTypes";
import { createProduct } from "Bus/API/productsAPI";
import { getAllProducts } from "Bus/Slicers/productsSlicer";

export function* fetchCreateProductSaga(action) {
  try {
    let result = yield call(createProduct, action.payload);
    yield put(getAllProducts(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchCreateProductSaga() {
  yield takeEvery(sagaTypes.CREATE_PRODUCT, fetchCreateProductSaga);
}
