import {loginAPI, LoginParamsType} from '../components/Main/Login/api-login';
import {Dispatch} from 'redux';

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

type SetIsLoggedInType = ReturnType<typeof setIsLoggedIn>
type ActionsType = SetIsLoggedInType

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_IS_LOGGED_IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

const setIsLoggedIn = (value: boolean) => ({type: 'SET_IS_LOGGED_IN', value} as const)

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    loginAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedIn(true))
            console.log('login ok')
        })
}

