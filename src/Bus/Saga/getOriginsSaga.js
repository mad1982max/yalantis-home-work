import { put, call, takeEvery } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { getAllOrigins } from "Bus/API/productsAPI";
import { getOrigins, loading, error } from "Bus/Slicers/originsSlicer";

export function* fetchGetoriginsSaga() {
  try {
    yield put(loading(true));
    const result = yield call(getAllOrigins);
    yield put(getOrigins(result.data.items));
    yield put(loading(false));
  } catch (e) {
    console.log("ERROR: ", e.message);
    yield put(error(e));
  }
}

export function* watchGetoriginsSaga() {
  yield takeEvery(sagaTypes.GET_ORIGINS, fetchGetoriginsSaga);
}
