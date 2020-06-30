import React, {useState, useEffect} from "react"
import {connect} from "react-redux"

function IndPokemon(props){
// useEffect(()=>{
//     props.pokemon.map((poke)=>{
//         props.fetchIndPokemon(poke.url)
//     })
// },[])
let pokemon = props.pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1)
console.log("from indpokemon",pokemon)
    return(
    <div className="allpokes">{pokemon.map(poke => {
    return (<div key={poke.name}className="indpoke">
        <p style={{textDecoration:"capitalize"}}>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</p>
        <img src={poke.sprites.front_default} alt={poke.name} />
        </div>)
    })}</div>

    )
}
const mapStateToProps = state => {
    return {
        pokemon: state.pkr.pokemon
    }
}
export default connect(mapStateToProps, {}) (IndPokemon)