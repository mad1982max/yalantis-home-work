import { put, call, debounce } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { getAll } from "Bus/API/productsAPI";
import { getAllProducts } from "Bus/Slicers/productsSlicer";
import { DEBOUNCE_TIME } from "Constants/constants";

export function* fetchAllDataSaga(action) {
  try {
    let result = yield call(getAll, action.payload);
    yield put(getAllProducts(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchFetchDataSaga() {
  yield debounce(
    DEBOUNCE_TIME,
    sagaTypes.FETCH_ALL_PRODUCTS_SAGA,
    fetchAllDataSaga
  );
}
