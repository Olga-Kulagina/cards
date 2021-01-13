import axios from "axios";

const instans = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})
// baseURL: 'https://neko-back.herokuapp.com/2.0/',
export type RegistrationParamsType = {
    email: string
    password: string
}

export const RegistrationApi = {
    setUser(email: string, password: string){
        return instans.post('auth/register',{email,password})
    },
    deleteUser(){
        debugger
        return instans.delete('auth/me')
    }
}