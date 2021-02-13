import { put, call, takeEvery, all } from "redux-saga/effects";
import { sagaActions } from "sagaActions";
import { getAll, getAllMyGoods } from "Bus/API/product";
import { getAllProducts, getMyProducts } from "Bus/Slicers/productsSlicer";

export function* fetchAllDataSaga(p) {
  try {
    const request = p.payload;
    let result = yield call(async () => await getAll(request));
    yield put(getAllProducts(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

function* watchFetchDataSaga() {
  yield takeEvery(sagaActions.FETCH_ALL_PRODUCTS_SAGA, fetchAllDataSaga);
}

export function* fetchMyDataSaga(p) {
  try {
    const request = p.payload;
    let result = yield call(async () => await getAllMyGoods(request));
    yield put(getMyProducts(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

function* watchFetchMyDataSaga() {
  yield takeEvery(sagaActions.FETCH_MY_PRODUCTS_SAGA, fetchMyDataSaga);
}

export default function* rootSaga() {
  yield all([watchFetchDataSaga(), watchFetchMyDataSaga()]);
}
