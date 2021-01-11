import {Dispatch} from "redux";
import {RegistrationApi} from "../Api";


export type  initialStateType = {
    email: string
    password: string
    error: string
}
type registrationACType = ReturnType<typeof registrationAC>
type answerRequestACType = ReturnType<typeof answerRequestAC>
type actionType = registrationACType | answerRequestACType
let initialState: initialStateType = {
    email: '',
    password: '',
    error: '',
}
const registerReduser = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'REGISTRATION':
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        case "ERRORHOST":
            return {
                ...state,
                error: action.message
            }
        default:
            return state
    }
}
export const registrationAC = (email: string, password: string) => ({type: 'REGISTRATION', email, password} as const)
export const answerRequestAC = (message: string) => ({type: 'ERRORHOST', message} as const)
export const registrationTC = (email: string, password: string) => (dispatch: Dispatch) => {
        debugger
        dispatch(registrationAC(email, password))
        RegistrationApi.setUser(email, password)
            .then(res => {
                debugger
                // dispatch(registrationAC(email, password))
                console.log(res.data);
            }).catch((err) => {
            let message = err.response ? err.response.data.errorText : err.message
            console.log(err.response ? err.response.data.errorText : err.message);
            dispatch(answerRequestAC(message))
        })


    }


export default registerReduser;