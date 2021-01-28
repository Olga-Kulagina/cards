import {Dispatch} from 'redux';
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

type ActionsType = SetCardsType

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {...state, cards: action.cards}

        default:
            return state
    }
}

export const setCards = (cards: Array<any>) => ({type: 'SET_CARDS', cards} as const)


export const getCardsTC = (packId: any) => (dispatch: Dispatch<ActionsType>) => {
    cardsAPI.getCards(packId)
        .then((res) => {
            dispatch(setCards(res.data.cards))
        })
}

