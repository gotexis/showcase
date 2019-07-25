import rootReducer from "../reducers";
import createSagaMiddleware from 'redux-saga'
import RootSaga from '../sagas'
import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'


const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()


const store = createStore(
    rootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            sagaMiddleware
        ),
    ),
)

sagaMiddleware.run(RootSaga)

export default store
