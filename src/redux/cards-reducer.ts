import {Action, Dispatch} from 'redux';
import {packsAPI} from '../components/Main/Packs/api-packs';
import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from './store';
import {cardsAPI} from '../components/Main/Cards/api-cards';

export type CardType = {
    answer: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    question: string
    questionImg: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
}
type InitialStateType = {
    cards: Array<CardType>
}

const initialState: InitialStateType = {
    cards: [{
        answer: 'moloko',
        cardsPack_id: '5',
        comments: '',
        created: '656',
        grade: 3,
        question: 'milk',
        questionImg: ';;;',
        rating: 2,
        shots: 1,
        type: 'card',
        updated: '555',
        user_id: '888'
    }]
}

type SetCardsType = ReturnType<typeof setCards>
// type AddPackType = ReturnType<typeof addPack>
// type DeletePackType = ReturnType<typeof deletePack>
// type UpdatePackType = ReturnType<typeof updatePack>
type ActionsType = SetCardsType

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {...state, cards: action.cards}
//         case 'ADD_PACK':
//             return {...state}
//         case 'DELETE_PACK':
//             return {...state}
//         case 'UPDATE_PACK':
//             return {...state}
        default:
            return state
    }
}

export const setCards = (cards: Array<any>) => ({type: 'SET_CARDS', cards} as const)
// export const addPack = () => ({type: 'ADD_PACK'} as const)
// export const deletePack = () => ({type: 'DELETE_PACK'} as const)
// export const updatePack = () => ({type: 'UPDATE_PACK'} as const)
//
//
export const getCardsTC = (packId: any) => (dispatch: Dispatch<ActionsType>) => {
    cardsAPI.getCards(packId)
        .then((res) => {
            dispatch(setCards(res.data.cards))
        })
}
// export const addPackTC = () => (dispatch: any) => {
//     packsAPI.addPack()
//         .then((res) => {
//             dispatch(addPack())
//         })
//         .then(dispatch(getPacksTC()))
//     // packsAPI.getPacks()
//     //     .then((res) => {
//     //         dispatch(setPacks(res.data.cardPacks))
//     //     })
// }
//
// // ThunkAction<void, RootState, unknown, Action<string>>
//
// export const deletePackTC = (id: string) => (dispatch: any) => {
//     packsAPI.deletePack(id)
//         .then((res) => {
//             dispatch(deletePack())
//         })
//         .then(dispatch(getPacksTC()))
//     // packsAPI.getPacks()
//     //     .then((res) => {
//     //         dispatch(setPacks(res.data.cardPacks))
//     //     })
// }
// export const updatePackTC = (id: string) => (dispatch: any) => {
//     packsAPI.updatePack(id)
//         .then((res) => {
//             dispatch(updatePack())
//         })
//         .then(dispatch(getPacksTC()))
//     // packsAPI.getPacks()
//     //     .then((res) => {
//     //         dispatch(setPacks(res.data.cardPacks))
//     //     })
// }
//
