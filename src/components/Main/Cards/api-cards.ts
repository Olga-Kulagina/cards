import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const cardsAPI = {
    getCards(packId: string) {
        return instance.get(`/cards/card?cardsPack_id=${packId}`)
    },
    // addCard() {
    //     let cardsPack = {cardsPack: {name: 'NewPack'}}
    //     return instance.post('cards/pack', cardsPack)
    // },
    // deleteCard(id: string) {
    //     return instance.delete(`cards/pack?id=${id}`)
    // },
    // updateCard(id: string) {
    //     return instance.put('cards/pack', {cardsPack: {_id: id}})
    // }
}