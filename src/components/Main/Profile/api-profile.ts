import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export type ProfileParamsType = {}

export const profileAPI = {
    getProfile() {
        return instance.post('auth/me', {})
    }
}