import {combineReducers} from 'redux';
import {pokemonReducer as pkr} from './PokemonReducer'
import {usersReducer as ur} from "./userReducer"

export default combineReducers({
    ur, pkr
})