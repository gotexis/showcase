import * as types from '../constants'
import {myid} from '../constants'
import {updateItemInArray, updateObject} from "../helpers"

const DEFAULT_THREADS = [
  {
    id: 1,
    name: "a",
    message: [
      {
        id: 1,
        message: "asdfsadf"
      }
    ]
  }
]

const ThreadReducer = (state = DEFAULT_THREADS, action) => {

  function appendMessage() {
    const msgs_in_thread = state.filter(thread => thread.id === action.thread_id)[0].message
    const new_msgs_in_thread = [...msgs_in_thread, {
      message: action.message,
      id: Math.random(),
      sender: {
        id: action.user_id,
        name_chat: action.name_chat,
        avatar: action.avatar,
      },
      sent: new Date(),
    }]
    // all threads have thread_id, even pm threads
    let newState = updateItemInArray(state, action.thread_id, thread =>
      updateObject(thread, {message: new_msgs_in_thread})
    )
    return newState
  }

  let {threads, message, pm_id, direction, thread_id, user_id, name_chat, avatar} = action
  try {
    threads = JSON.parse(threads)
  } catch (e) {
  }
  switch (action.type) {
    case types.THREAD_LIST:
      // console.log(threads)
      return threads

    case types.THREAD_JOIN:
      return threads

    case types.THREAD_LEAVE:
      return threads

    case types.SEND: {
      return appendMessage()
    }

    case types.PM: {
      if (threads) {
        //  if thread is passed, just redraw threads (first message to pm partner)
        return [...state, ...threads]
      }
      // if no thread is passed, then thread is already here, just append the message
      return appendMessage()
    }
    default:
      return state
  }
}


export default ThreadReducer
