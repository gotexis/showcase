import * as types from '../constants'
import {all, call, put, take, select, race, fork, actionChannel} from "redux-saga/effects"
import { eventChannel, END } from 'redux-saga'


const timer = () => eventChannel((emit) => {
  const interval = setInterval(() => {
      emit(types.TIMER_TICK)
  }, 5000)

  return () => {
    clearInterval(interval)
  }
})


export default function* timerSaga() {
  const channel = yield call(timer)
  while (true) {
    yield take(channel)
    yield put({ type: types.TIMER_TICK })
  }
}
