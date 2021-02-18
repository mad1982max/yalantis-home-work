import { put, call, takeEvery, delay } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { createProduct } from "Bus/API/productsAPI";
import { setPageMessage } from "Bus/Slicers/pageSlicer";
import {
  MSG_TIMER,
  TYPE_MSG,
  ANSWER_MSG,
  ALERT_MSG,
} from "Constants/constants";

export function* fetchCreateProductSaga(action) {
  const serverMessage = {};
  try {
    yield call(createProduct, action.payload);
    serverMessage.title = ANSWER_MSG.TITLE;
    serverMessage.msg = ANSWER_MSG.MSG_CREATE;
    serverMessage.type = TYPE_MSG.INFO;
  } catch (e) {
    const errorMsg = e.response.data.error.message || e.message;
    serverMessage.title = ALERT_MSG.TITLE;
    serverMessage.msg = errorMsg;
    serverMessage.type = TYPE_MSG.ALERT;
  }
  yield put(setPageMessage(serverMessage));
  yield delay(MSG_TIMER);
  yield put(setPageMessage({}));
}

export function* watchCreateProductSaga() {
  yield takeEvery(sagaTypes.CREATE_PRODUCT, fetchCreateProductSaga);
}
