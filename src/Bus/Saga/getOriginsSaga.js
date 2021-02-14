import { put, call, takeEvery } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { getAllOrigins } from "Bus/API/productsAPI";
import { getOrigins } from "Bus/Slicers/originsSlicer";

export function* fetchGetoriginsSaga() {
  try {
    let result = yield call(getAllOrigins);
    yield put(getOrigins(result.data.items));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchGetoriginsSaga() {
  yield takeEvery(sagaTypes.GET_ORIGINS, fetchGetoriginsSaga);
}
