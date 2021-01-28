import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const cardsAPI = {
    getCards(packId: string) {
        return instance.get(`/cards/card?cardsPack_id=${packId}`)
    },
}