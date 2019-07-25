import * as types from '../constants'
import moment from 'moment'

const get_time = () => moment().unix()

const TimerReducer = (state = get_time(), action) => {
    switch (action.type) {
        case types.TIMER_TICK:
        default:
            // console.log(action)
            return get_time()
    }
}


export default TimerReducer
