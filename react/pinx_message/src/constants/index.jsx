
// Non-websocket actions
export const ACTIVATE_THREAD = "ACTIVATE_THREAD"
export const COMPOSING_SWITCH = "COMPOSING_SWITCH"
export const TIMER_TICK = "TIMER_TICK"


// general WebSocket actions  (listen from server)
export const SEND               = "SEND"
export const PM                 = "PM"
export const THREAD_LIST        = "THREAD_LIST"
export const THREAD_JOIN        = "THREAD_JOIN"
export const THREAD_LEAVE       = "THREAD_LEAVE"
export const PRESENCE           = "PRESENCE"
export const FRIEND             = "FRIEND"
export const FRIEND_ADD         = "FRIEND_ADD"
export const FRIEND_REMOVE      = "FRIEND_REMOVE"

// general WebSocket actions (client)
export const C_SEND               = "C_SEND"
export const C_PM                 = "C_PM"
export const C_THREAD_LIST        = "C_THREAD_LIST"
export const C_THREAD_JOIN        = "C_THREAD_JOIN"
export const C_THREAD_LEAVE       = "C_THREAD_LEAVE"
export const C_PRESENCE           = "C_PRESENCE"
export const C_FRIEND             = "C_FRIEND"
export const C_FRIEND_ADD         = "C_FRIEND_ADD"
export const C_FRIEND_REMOVE      = "C_FRIEND_REMOVE"


// convert local action to online action
export const client_actions_convert = {
  C_SEND:           SEND,
  C_PM:             PM,
  C_THREAD_LIST:    THREAD_LIST,
  C_THREAD_JOIN:    THREAD_JOIN,
  C_THREAD_LEAVE:   THREAD_LEAVE,
  C_PRESENCE:       PRESENCE,
  C_FRIEND:         FRIEND,
  C_FRIEND_ADD:     FRIEND_ADD,
  C_FRIEND_REMOVE:  FRIEND_REMOVE,
}

export const client_actions = Object.keys(client_actions_convert)


// js websocket actions
export const RECEIVE_MESSAGE    = "SEND"
export const WEBSOCKET_START    = "WEBSOCKET_START"
export const WEBSOCKET_STOP     = "WEBSOCKET_STOP"

// action results
export const SUCCESS            = "SUCCESS"
export const FAILURE            = "FAILURE"

// urls
export const BASE_URL = "/landing/"

// window globals
export const trans = window.dictionary
export const myid = window.uid
