import { put, call, takeEvery } from "redux-saga/effects";
import { sagaTypes } from "Saga/sagaTypes";
import { getAllMyGoods } from "Bus/API/productsAPI";
import { getMyProducts } from "Bus/Slicers/productsSlicer";

export function* fetchMyDataSaga(action) {
  try {
    let result = yield call(getAllMyGoods, action.payload);
    yield put(getMyProducts(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchFetchMyDataSaga() {
  yield takeEvery(sagaTypes.FETCH_MY_PRODUCTS_SAGA, fetchMyDataSaga);
}
