import { put, call, debounce } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { getAllMyGoods } from "Bus/API/productsAPI";
import { getMyProducts, loading, error } from "Bus/Slicers/productsSlicer";
import { DEBOUNCE_TIME } from "Constants/constants";

export function* fetchMyDataSaga(action) {
  try {
    yield put(loading(true));
    let result = yield call(getAllMyGoods, action.payload);
    yield put(getMyProducts(result.data));
    yield put(loading(false));
  } catch (e) {
    yield put(error(e));
  }
}

export function* watchFetchMyDataSaga() {
  yield debounce(
    DEBOUNCE_TIME,
    sagaTypes.FETCH_MY_PRODUCTS_SAGA,
    fetchMyDataSaga
  );
}
