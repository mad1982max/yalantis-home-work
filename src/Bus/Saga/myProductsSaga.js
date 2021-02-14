import { put, call, debounce } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { getAllMyGoods } from "Bus/API/productsAPI";
import { getMyProducts } from "Bus/Slicers/productsSlicer";
import { DEBOUNCE_TIME } from "Constants/constants";

export function* fetchMyDataSaga(action) {
  try {
    let result = yield call(getAllMyGoods, action.payload);
    yield put(getMyProducts(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchFetchMyDataSaga() {
  yield debounce(
    DEBOUNCE_TIME,
    sagaTypes.FETCH_MY_PRODUCTS_SAGA,
    fetchMyDataSaga
  );
}
