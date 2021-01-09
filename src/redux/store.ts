import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer';
import {loginReducer} from './login-reducer'

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>