import { put, call, takeEvery } from "redux-saga/effects";
import { sagaTypes } from "Saga/sagaTypes";
import { getById } from "Bus/API/productsAPI";
import { getProductById } from "Bus/Slicers/productSlicer";

export function* fetchSingleProductSaga(action) {
  try {
    let result = yield call(getById, action.payload);
    yield put(getProductById(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchFetchSingleProductSaga() {
  yield takeEvery(sagaTypes.FETCH_SINGLE_PRODUCT, fetchSingleProductSaga);
}
