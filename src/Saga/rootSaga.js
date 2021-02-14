import { all } from "redux-saga/effects";
import { watchFetchDataSaga } from "Saga/allProductsSaga";
import { watchFetchMyDataSaga } from "Saga/myProductsSaga";
import { watchFetchSingleProductSaga } from "Saga/singleProductSaga";
import { watchUpdateProductSaga } from "Saga/updateProductSaga";
import { watchCreateProductSaga } from "Saga/createProductSaga";

export default function* rootSaga() {
  yield all([
    watchFetchDataSaga(),
    watchFetchMyDataSaga(),
    watchFetchSingleProductSaga(),
    watchUpdateProductSaga(),
    watchCreateProductSaga(),
  ]);
}
