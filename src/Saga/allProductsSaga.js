import { put, call, takeEvery } from "redux-saga/effects";
import { sagaTypes } from "Saga/sagaTypes";
import { getAll } from "Bus/API/productsAPI";
import { getAllProducts } from "Bus/Slicers/productsSlicer";

export function* fetchAllDataSaga(action) {
  try {
    let result = yield call(getAll, action.payload);
    yield put(getAllProducts(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(sagaTypes.FETCH_ALL_PRODUCTS_SAGA, fetchAllDataSaga);
}
