import axios from "axios";

export const fetchPokemon = () => {
    return dispatch => {
        dispatch({type: 'FETCH_POKE_START'})
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                dispatch({type: 'FETCH_POKE_SUCCESS', payload: res.data})
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

export const fetchIndPokemon = (url) => {
    return dispatch => {
        // dispatch({type: 'GET_IND_INFO_START'})
        // axios.get(url)
        // .then(res => {
        //     dispatch({type: 'FETCH_IND_INFO_SUCCESS', payload: res.data})
        // })
        // .catch(err => {
        //     dispatch({type: 'FETCH_IND_INFO_FAILURE', payload: err.message})
        // })
    }
}