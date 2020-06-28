import axios from "axios"
import React, {useState} from "react"


export const getPokemon=()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
        console.log("get request" ,res.data.results);
        setPokemon( res.data.results)
    })
    .catch(err => {
        console.log(err)
})
}

console.log("pokemon",pokemon)