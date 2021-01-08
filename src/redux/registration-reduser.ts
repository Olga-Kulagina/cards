import {Dispatch} from "redux";


export type  initialStateType = {
    email: string
    password:string
}
type registrationType = ReturnType<typeof registrationAC>
type actionType = registrationType
let initialState: initialStateType = {
   email: '',
   password: '',
}
const registerReduser = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'REGISTRATION':
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        default:
            return state
    }
}
export const registrationAC = (email:string,password:string)=> ({type: 'REGISTRATION',email,password} as const)



export default registerReduser;