import {Action, Dispatch} from 'redux';
import {packsAPI} from '../components/Main/Packs/api-packs';
import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from './store';

export type PackType = {
    _id: string
    userId: string
    name: string
    cardsCount: number
    updated: string
    url: string
}
type InitialStateType = {
    packs: Array<PackType>
}


const initialState: InitialStateType = {
    packs: [
        {
            _id: '123',
            cardsCount: 5,
            name: 'Some name',
            updated: 'never',
            url: '111111',
            userId: '321'
        },
        {
            _id: '12555',
            cardsCount: 6,
            name: 'Some name',
            updated: 'never',
            url: '111111',
            userId: '321'
        }, {
            _id: '123888',
            cardsCount: 7,
            name: 'Some name',
            updated: 'never',
            url: '111111',
            userId: '321'
        }
    ]
}

type SetPacksType = ReturnType<typeof setPacks>
type AddPackType = ReturnType<typeof addPack>
type DeletePackType = ReturnType<typeof deletePack>
type UpdatePackType = ReturnType<typeof updatePack>
type ActionsType = SetPacksType | AddPackType | DeletePackType | UpdatePackType

export const packsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_PACKS':
            return {...state, packs: action.packs}
        case 'ADD_PACK':
            return {...state}
        case 'DELETE_PACK':
            return {...state}
        case 'UPDATE_PACK':
            return {...state}
        default:
            return state
    }
}

export const setPacks = (packs: Array<PackType>) => ({type: 'SET_PACKS', packs} as const)
export const addPack = () => ({type: 'ADD_PACK'} as const)
export const deletePack = () => ({type: 'DELETE_PACK'} as const)
export const updatePack = () => ({type: 'UPDATE_PACK'} as const)


export const getPacksTC = () => (dispatch: Dispatch<ActionsType>) => {
    packsAPI.getPacks()
        .then((res) => {
            dispatch(setPacks(res.data.cardPacks))
        })
}
export const addPackTC = () => (dispatch: any) => {
    packsAPI.addPack()
        .then((res) => {
            dispatch(addPack())
        })
        .then(() => {
            dispatch(getPacksTC())
        })
}


export const deletePackTC = (id: string) => (dispatch: any) => {
    packsAPI.deletePack(id)
        .then((res) => {
            dispatch(deletePack())
        })
        .then(() => {
            dispatch(getPacksTC())
        })
}
export const updatePackTC = (id: string) => (dispatch: any) => {
    packsAPI.updatePack(id)
        .then((res) => {
            dispatch(updatePack())
        })
        .then(() => {
            dispatch(getPacksTC())
        })
}

