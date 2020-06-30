const initialState = {
    isLoading: false,
    pokemon: [],
    error: "",
    firstPage: "https://pokeapi.co/api/v2/pokemon/",
    nextPage: "",
    prevPage: ""
}

export const pokeReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_POKE_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_POKE_SUCCESS':
            return {
                ...state,
                isLoading: true,
                nextPage: action.payload.next
            }
        case 'FETCH_POKE_FAILURE':
            return {
                ...state,
                isLoading: true,
                error: action.payload
            }
        case 'FETCH_IND_INFO_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_IND_INFO_SUCCESS':
            // let updatedPoke=state.pokemon.find(pokemon => pokemon.name === action.payload.name)
            // if (updatedPoke){updatedPoke.data = action.payload}
            return {
                ...state,
                isLoading: false,
                pokemon: [...state.pokemon, action.payload]
            }
        case 'FETCH_IND_INFO_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}