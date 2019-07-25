import * as types from '../constants'

const default_state = false

const LoadingReducer = (state = default_state, action) => {
    switch (action.type) {
        case types.THREAD_LIST:
            // end thread redraw
            return false
        case types.C_THREAD_LIST:
            // user requested redraw threads
            return true
        default:
            return state
    }
}


export default LoadingReducer
