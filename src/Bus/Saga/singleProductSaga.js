import { put, call, takeEvery, delay } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { getById } from "Bus/API/productsAPI";
import { getProductById, loading, error } from "Bus/Slicers/productSlicer";

export function* fetchSingleProductSaga(action) {
  try {
    yield put(loading(true));
    const result = yield call(getById, action.payload);
    yield put(getProductById(result.data));
    yield delay(500);
    yield put(loading(false));
  } catch (e) {
    yield put(error(e));
  }
}

export function* watchFetchSingleProductSaga() {
  yield takeEvery(sagaTypes.FETCH_SINGLE_PRODUCT, fetchSingleProductSaga);
}
