import {combineReducers} from "redux"
import threads from "./threads"
import friends from "./friends"
import composing from "./composing"
import {connectRouter} from "connected-react-router"
import active_thread from "./active_thread"
import loading from "./loading"
import timer from "./timer"

export default (history) => combineReducers({
        router: connectRouter(history),
        composing,
        threads,
        friends,
        active_thread,
        loading,
        timer,
    },
)
