import { all } from "redux-saga/effects";
import { watchFetchDataSaga } from "Bus/Saga/allProductsSaga";
import { watchFetchMyDataSaga } from "Bus/Saga/myProductsSaga";
import { watchFetchSingleProductSaga } from "Bus/Saga/singleProductSaga";
import { watchUpdateProductSaga } from "Bus/Saga/updateProductSaga";
import { watchCreateProductSaga } from "Bus/Saga/createProductSaga";
import { watchGetoriginsSaga } from "Bus/Saga/getOriginsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchDataSaga(),
    watchFetchMyDataSaga(),
    watchFetchSingleProductSaga(),
    watchUpdateProductSaga(),
    watchCreateProductSaga(),
    watchGetoriginsSaga(),
  ]);
}
