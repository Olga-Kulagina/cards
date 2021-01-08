const initialState = {

}
type InitialStateType = typeof initialState



export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'LOGIN':
            return state
        default:
            return state
    }
}

type ActionsType = any