import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer';
import {loginReducer} from './login-reducer';
import {forgotReducer} from './forgot-reducer';
import {profileReducer} from './profile-reducer';
import registerReduser from "./registration-reduser";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registerReduser,
    forgot: forgotReducer,
    profile: profileReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>