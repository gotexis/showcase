import {all, call, take} from "redux-saga/effects"
import * as types from "../constants"

/*  User Created Message (e.g. dispatch({ type: 'EXE_TASK', taskid: 5 })) sent to ws server  */
function* allListener(socket) {
  while (true) {
    const data = yield take(types.client_actions)
    const action = types.client_actions_convert[data.type]
    delete data.type
    socket.send(JSON.stringify({
      action: action,
      ...data
    }))
  }
}

export default function* userListener(socket) {
  yield all([
    call(allListener, socket),
  ])
}

