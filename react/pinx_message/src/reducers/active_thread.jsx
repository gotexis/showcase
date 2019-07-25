import * as types from '../constants'

const default_state = {
    id: null,
    pm_id: null,
    pm: null,
}

const ActiveThreadReducer = (state = default_state, action) => {
    switch (action.type) {
        case types.ACTIVATE_THREAD:
            return {
                id: action.id,
                pm_id: action.pm_id,
                pm: action.pm,  // type: boolean
            }
        default:
            return state
    }
}


export default ActiveThreadReducer
