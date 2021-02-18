import { put, call, debounce, delay } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { getAll } from "Bus/API/productsAPI";
import { getAllProducts, loading, error } from "Bus/Slicers/productsSlicer";
import { DEBOUNCE_TIME } from "Constants/constants";

export function* fetchAllDataSaga(action) {
  try {
    yield put(loading(true));
    const result = yield call(getAll, action.payload);
    yield put(getAllProducts(result.data));
    yield delay(500);
    yield put(loading(false));
  } catch (e) {
    yield put(error(e));
  }
}

export function* watchFetchDataSaga() {
  yield debounce(
    DEBOUNCE_TIME,
    sagaTypes.FETCH_ALL_PRODUCTS_SAGA,
    fetchAllDataSaga
  );
}
