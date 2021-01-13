import {Dispatch} from "redux";
import {RegistrationApi} from "../Api";


export type  initialStateType = {
    email: string
    password: string
    error: string
    message: string
    registeredStatus: boolean | null
}
type registrationACType = ReturnType<typeof registrationAC>
type answerRequestACType = ReturnType<typeof answerRequestAC>
type succesRequestACType = ReturnType<typeof succesRequestAC>
type actionType = registrationACType | answerRequestACType | succesRequestACType
let initialState: initialStateType = {
    email: '',
    password: '',
    error: '',
    message: '',
    registeredStatus: null
}
const registerReduser = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'REGISTRATION':
            return {
                ...state,
                email: action.email,
                password: action.password,
            }
        case "SUCCESHOST":
            return {
                ...state,
                message: action.message,
                registeredStatus: true
            }
        case "ERRORHOST":
            return {
                ...state,
                error: action.errorText,
                registeredStatus: false
            }
        default:
            return state
    }
}
export const registrationAC = (email: string, password: string) => ({type: 'REGISTRATION', email, password} as const)
export const answerRequestAC = (errorText: string) => ({type: 'ERRORHOST', errorText} as const)
export const succesRequestAC = (message:string) => ({type: 'SUCCESHOST',message} as const)
export const registrationTC = (email: string, password: string) => (dispatch: Dispatch) => {
        RegistrationApi.setUser(email, password)
            .then(res => {
                debugger
                console.log(res.data);
                console.log(res.statusText);
                let message = res.statusText
                dispatch(registrationAC(email, password))
                dispatch(succesRequestAC(message))
            }).catch((err) => {
                debugger
            // let errorText =  err.toString();
            dispatch(answerRequestAC(err.response.data.error));
            // console.log(errorText);
        })
    }
export const deleteAccTC = () => (dispatch: Dispatch) =>{
    debugger
    RegistrationApi.deleteUser()
        .then(res=>{
            debugger
            console.log(res);
            // dispatch(succesRequestAC(message))
        }).catch(err=>{
            alert(err)
    })
}

export default registerReduser;