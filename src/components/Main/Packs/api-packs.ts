import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const packsAPI = {
    getPacks() {
        return instance.get('/cards/pack?pageCount=8')
    },
    addPack() {
        let cardsPack = {cardsPack: {name: 'NewPack'}}
        return instance.post('cards/pack', cardsPack)
    },
    deletePack(id: string) {
        return instance.delete(`cards/pack?id=${id}`)
    },
    updatePack(id: string) {
        return instance.put('cards/pack', {cardsPack: {_id: id}})
    }
}