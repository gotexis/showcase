import * as types from '../constants'
import {activateThread, messageReceived, populateUsersList} from '../actions'
import Sockette from 'sockette'


const socket_url = window.websocket_str


const setupSocket = (dispatch) => {

    const socket = new Sockette(socket_url, {
        timeout: 5e3,
        maxAttempts: 10,
        onopen: e => {
            console.log("Connection to Pinx network established!")
        },
        onmessage: e => {

            socket.send(JSON.stringify({
                type: types.SEND,
            }))
            const data = JSON.parse(e.data)
            switch (data.type) {
                case types.SEND:
                    dispatch(messageReceived(data.message, data.author))
                    break
                case types.FRIEND_ADD:
                    dispatch(addUser(data.name))
                    break
                case types.FRIEND_REMOVE:
                    dispatch(populateUsersList(data.users))
                    break
                default:
                    break
            }
            console.log('Received:', e)
        },
        onreconnect: e => console.log('Reconnecting...', e),
        onmaximum: e => console.log('Stop Attempting!', e),
        onclose: e => console.log('Closed!', e),
        onerror: e => console.log('Error:', e)
    });
    return socket
}

export default setupSocket
