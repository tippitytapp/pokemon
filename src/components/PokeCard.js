import React from "react";
import {connect} from "react-redux";


function PokeCard({pokemon}){
    console.log('pokecard', pokemon)
    return(
        <div className="indpokemoncard">
            <p>{pokemon.name}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pkr.pokemon
    }
}
export default connect(mapStateToProps, {})(PokeCard);