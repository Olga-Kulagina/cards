import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer';

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>