import {Dispatch} from 'redux';
import {profileAPI} from '../components/Main/Profile/api-profile';

const initialState = {
    isAuthorized: false,
    name: '',
    error: ''
}
type InitialStateType = typeof initialState

type SetIsAuthorizedType = ReturnType<typeof setIsAuthorized>
type SetError = ReturnType<typeof setError>
type ActionsType = SetIsAuthorizedType | SetError

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_IS_AUTHORIZED':
            return {...state, isAuthorized: action.value, name: action.name}
        case 'SET_ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

const setIsAuthorized = (value: boolean, name: string) => ({type: 'SET_IS_AUTHORIZED', value, name} as const)
const setError = (error: string) => ({type: 'SET_ERROR', error} as const)


export const profileTC = () => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getProfile()
        .then((res) => {
            dispatch(setIsAuthorized(true, res.data.name))
        })
        .catch((err) => {
            dispatch(setError(err.response.data.error))
        })
}

