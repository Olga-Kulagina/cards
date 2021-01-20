
const initialState = {
    nameSearch: '',
    error: '',
    abcType: 'ABC',
}
type InitialStateType = typeof initialState
type searchByNameACType = ReturnType<typeof searchByNameAC>
type sortByAbcACType = ReturnType<typeof sortByAbcAC>
type SetError = ReturnType<typeof setError>
type ActionsType = searchByNameACType | sortByAbcACType | SetError

export const filterOrSearchReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEARCH_BY_NAME':
            return {...state,
                nameSearch: action.nameSearch
            }
        case 'SORT_A':
            return {...state,
                abcType: action.payload
            }
        case 'SET_ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export const searchByNameAC = ( nameSearch: string) => ({type: 'SEARCH_BY_NAME', nameSearch} as const)
export const sortByAbcAC = ( payload: string) => ({type: 'SORT_A', payload} as const)
const setError = (error: string) => ({type: 'SET_ERROR', error} as const)



