import * as types from '../constants'


// ```````````````````WebSocket - user requests `````````````````````````````````````

export const requestThreads = () => ({
    type: types.THREAD_LIST,
})

export const joinThreads = (id) => ({
    type: types.THREAD_JOIN,
    thread_id: id,
})

export const leaveThreads = (id) => ({
    type: types.THREAD_LEAVE,
    thread_id: id,
})

export const sendMessage = (message, pm=false, thread_id=null, pm_id=null) => ({
    type: pm ? types.C_PM: types.C_SEND,
    message: message,
    thread_id: thread_id,
    pm_id: pm_id,
})


export const requestFriends = () => ({
    type: types.FRIEND,
})


export const addFriend = (pm_id) => ({
    type: types.FRIEND_ADD,
    pm_id: pm_id
})

export const removeFriend = (pm_id) => ({
    type: types.FRIEND_REMOVE,
    pm_id: pm_id
})
