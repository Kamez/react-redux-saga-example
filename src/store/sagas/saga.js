import { takeLatest, put, delay } from "redux-saga/effects";
import { AGE_UP, AGE_UP_ASYNC } from "../action/types";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: AGE_UP_ASYNC, payload: 1 }); // ເອີ້ນໃຊ້ action ໃໝ່ທີ່ເຮັດໜ້າທີ່ຄືກັບ AGE_UP (put ເຮັດໜ້າທີ່ຄ້າຍ dispatch)
}

// ເມື່ອມີ dispatch action AGE_UP ເກີດຂຶ້ນມັນຈະມາຜ່ານ watcher (watchAgeUp())
export function* watchAgeUp() {
  // ເອີ້ນໃຊ້ ageUpAsync
  yield takeLatest(AGE_UP, ageUpAsync);
}
