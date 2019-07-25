import {put, take} from "redux-saga/effects"
import * as types from "../constants"
import _ from 'lodash'

export default function* wsListener(socketChannel) {
  while (true) {
    const data = yield take(socketChannel)
    const {action:type, pm_id, message, threads, thread_id, friends, user_id, result, time, name_chat, avatar} = data
    const purged_data = _.pickBy(data, v => v !== null && v !== undefined)
    // console.log(data)
    switch (type) {
      case types.SEND:
      case types.PM:
      case types.THREAD_LIST:
      case types.THREAD_LEAVE:
      case types.THREAD_JOIN:
      case types.PRESENCE:
      case types.FRIEND:
      case types.FRIEND_ADD:
      case types.FRIEND_REMOVE:
        yield put({
          type,
          ...purged_data
        })
        break
      // default:
      //     break
    }
  }
}
