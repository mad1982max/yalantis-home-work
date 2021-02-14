import { put, takeEvery, call } from "redux-saga/effects";
import { sagaTypes } from "Saga/sagaTypes";
import { updateProduct } from "Bus/API/productsAPI";
import { setProductToEdit } from "Bus/Slicers/productSlicer";

export function* fetchUpdateProductSaga(action) {
  try {
    let result = yield call(
      updateProduct,
      action.payload.id,
      action.payload.product
    );
    yield put(setProductToEdit(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* watchUpdateProductSaga() {
  yield takeEvery(sagaTypes.UPDATE_PRODUCT, fetchUpdateProductSaga);
}
