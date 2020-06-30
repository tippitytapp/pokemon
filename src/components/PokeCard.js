import React from "react";
import {connect} from "react-redux";


function PokeCard(props){
    console.log('pokecard', props)
    return(
        <div className="indpokemoncard">
            <p>{props.pokemon.name}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pkr.pokemon
    }
}
export default connect(mapStateToProps, {})(PokeCard);