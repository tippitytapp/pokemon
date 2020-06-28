import axios from "axios"

export const getPokemon = () => {
    return dispatch =>  {
        dispatch({type: "FETCH_POKEMON_START"})
        axios
            .get('https://pokeapi.co/api/v2/pokemon/1')
            .then(res => {
                console.log('getPokemon Axios', res.data)
                 dispatch({type: "FETCH_POKE_SUCCESS", payload: res.data.results})
            })
            .catch(err =>{
                console.log(err)
                dispatch({type: "FETCH_POKE_FAILURE", payload: err.message})
            })
    }
}
