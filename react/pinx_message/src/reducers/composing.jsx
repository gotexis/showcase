import * as types from '../constants'

const ComposingReducer = (state = false, action) => { // return an object of "Threads"
    switch (action.type) {
        case types.COMPOSING_SWITCH:
            return action.composing
        default:
            return state
    }
}

export default ComposingReducer
