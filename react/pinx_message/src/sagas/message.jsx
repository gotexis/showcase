import {eventChannel} from "redux-saga"
import {all, call, put, take, select, race, fork, actionChannel} from "redux-saga/effects"
import * as types from "../constants"
import ReconnectingWebSocket from 'reconnecting-websocket'
import userListener from './local_listeners'
import wsListener from './ws_listeners'

const socket_url = 'ws://localhost:4000'

function watchMessages(socket) {
  return eventChannel(emit => {

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data)
      return emit(data)
    }

    return () => {
      // The subscriber must return an unsubscribe function
      socket.close()
      // .then(() => console.log('closing socket... logout'))
    }
  })
}


export default function* establishWSConSaga() {
  while (true) {
    // yield take(types.WEBSOCKET_START)   // establish socket on demand
    const socket = new ReconnectingWebSocket(socket_url) // your websocket server

    socket.onopen = () => {
      console.log('Websocket connected') // debug

      socket.send(JSON.stringify({
        action: types.THREAD_LIST
      }))
      socket.send(JSON.stringify({
        action: types.FRIEND
      }))
    }

    socket.onclose = () => {
      console.log('Websocket closed') // debug
    }

    // window.socket = socket     // expose socket to window object (DEBUG)

    const socketChannel = yield call(watchMessages, socket)

    const {listenUntilCancel} = yield race({
      task: all([
        call(wsListener, socketChannel),
        call(userListener, socket)
      ]),
      cancel: take(types.WEBSOCKET_STOP)
    })

    if (listenUntilCancel) {
      // console.log('channel cancelled')
      socketChannel.close()
    }
  }
}
