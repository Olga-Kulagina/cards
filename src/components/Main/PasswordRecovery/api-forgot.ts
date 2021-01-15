import axios from 'axios';
import {LoginParamsType} from '../Login/api-login';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export type ForgotParamsType = {

}

export const forgotAPI = {
    forgot(data: ForgotParamsType) {
        return instance.post('auth/forgot', data)
    }
}