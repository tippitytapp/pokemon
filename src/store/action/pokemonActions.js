import axios from "axios";

export const fetchPokemon = (url) => {
    return dispatch => {
        dispatch({type: 'FETCH_POKE_START'})
        axios.get(url)
            .then(res => {
                dispatch({type: 'FETCH_POKE_SUCCESS', payload: res.data})

                // let pokemonall = res.data.results.sort((a, b) => (a.id > b.id) ? 1: -1)
return res.data.results.map(pokemon => {
                    dispatch({type: 'GET_IND_INFO_START'})
                    axios.get(pokemon.url)
                    .then(res => {
                        dispatch({type: 'FETCH_IND_INFO_SUCCESS', payload: res.data})
                    })
                    .catch(err => {
                        dispatch({type: 'FETCH_IND_INFO_FAILURE', payload: err.message})
                    })
                })
            })
            .catch(err=>{
                dispatch({type: 'FETCH_POKE_FAILURE', payload: err.message})
            })
    }
}

export const fetchSearchedPokemon = (url) => {
    return dispatch => {
        dispatch({type: 'SEARCH_START'})
        axios.get(url)
        .then(res => {
            console.log("fetchsearchedpokemon", res)
            dispatch({type: 'SEARCH_SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'SEARCH_FAILURE', payload: err.message})
        })
    }
}