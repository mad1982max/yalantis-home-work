import { put, takeEvery, call, delay } from "redux-saga/effects";
import { sagaTypes } from "Bus/Saga/sagaTypes";
import { updateProduct } from "Bus/API/productsAPI";
import { setProductToEdit } from "Bus/Slicers/productSlicer";
import { setPageMessage } from "Bus/Slicers/pageSlicer";
import {
  MSG_TIMER,
  TYPE_MSG,
  ANSWER_MSG,
  ALERT_MSG,
} from "Constants/constants";

export function* fetchUpdateProductSaga(action) {
  const serverMessage = {};
  try {
    const result = yield call(
      updateProduct,
      action.payload.id,
      action.payload.product
    );
    yield put(setProductToEdit(result.data));
    serverMessage.title = ANSWER_MSG.TITLE;
    serverMessage.msg = ANSWER_MSG.MSG_UPD;
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

export function* watchUpdateProductSaga() {
  yield takeEvery(sagaTypes.UPDATE_PRODUCT, fetchUpdateProductSaga);
}
