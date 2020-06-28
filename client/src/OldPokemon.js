import axios from "axios";
import React, {useState, useEffect} from "react"
// import {getPokemon} from "./functions"


function GetPokemon(){
    const [pokemon, setPokemon] = useState([])
    const [indPokemon, setIndPokemon] = useState({})
    const newPokemon=[]
    const getPokemon=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            console.log("get request" ,res.data.results);
        setPokemon(res.data.results);
        
        })
        .catch(err => {
            console.log(err)
    })
}
const pokemonInfo = () => {
    pokemon.map(item=>{
        setIndPokemon(item)
        axios.get(item.url)
        .then(res => {
            item = {...item, data: res.data}
             newPokemon.push(item)
            console.log('pokemon info', newPokemon)
            setPokemon(newPokemon)
        })
        return newPokemon
    })
    return newPokemon
}


console.log("newPokemon",pokemon)
    return(
        <div className="pokemon">
            <h2>All Pokemon</h2>
            <button onClick={()=>{getPokemon(); pokemonInfo();}}>Get Pokemon</button>
            {pokemon.map(item => {
                return (
                <div key={item.id}>{item.name}</div>
                )
            })}
        </div>
    )
}

export default GetPokemon