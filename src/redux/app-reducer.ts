const initialState = {
    isInitialized: false
}
type InitialStateType = typeof initialState



export const appReducer = (state: InitialStateType, action: ActionsType) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return state
        default:
            return state
    }
}

type ActionsType = any