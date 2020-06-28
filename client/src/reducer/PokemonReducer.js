export const initialState=[{
    isLoading: false,
    pokemon:{},
    error: ""
}]

export const pokemonReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FETCH_POKEMON_START':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_POKE_SUCCESS':
            return{
                ...state,
                isLoading: false,
                pokemon: action.payload
            }
        case "FETCH_POKE_FAILURE":
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}