import {Dispatch} from 'redux';
import {forgotAPI, ForgotParamsType} from '../components/Main/PasswordRecovery/api-forgot';

type InitialStateType = {
    newPasswordRequest: newPasswordRequestType
    message: string
    error: string
}

export type newPasswordRequestType = 'success' | 'fail' | null

const initialState = {
    newPasswordRequest: null,
    message: '',
    error: ''
}

type NewPasswordRequestSuccessType = ReturnType<typeof newPasswordRequestSuccess>
type NewPasswordRequestFailType = ReturnType<typeof newPasswordRequestFail>
type ActionsType = NewPasswordRequestSuccessType | NewPasswordRequestFailType

export const forgotReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'NEW_PASSWORD_REQUEST_SUCCESS':
            return {...state, newPasswordRequest: action.value, message: action.message}
        case 'NEW_PASSWORD_REQUEST_FAIL':
            return {...state, newPasswordRequest: action.value, error: action.error}
        default:
            return state
    }
}


const newPasswordRequestSuccess = (value: newPasswordRequestType, message: string) =>
    ({type: 'NEW_PASSWORD_REQUEST_SUCCESS', value, message} as const)
const newPasswordRequestFail = (value: newPasswordRequestType, error: string) =>
    ({type: 'NEW_PASSWORD_REQUEST_FAIL', value, error} as const)

export const forgotTC = (data: ForgotParamsType) => (dispatch: Dispatch<ActionsType>) => {
forgotAPI.forgot(data)
    .then((res) => {
        let message = res.data.info
        dispatch(newPasswordRequestSuccess('success', message))
    })
    .catch((err) => {
        dispatch(newPasswordRequestFail('fail', err.response.data.error))
    })
}