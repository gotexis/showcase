import establishWSConSaga from './message'
import timerSaga from './timer'
import {all} from "redux-saga/effects"

export default function* rootSaga() {
  yield all([
      establishWSConSaga(),
      timerSaga(),
  ])
}
