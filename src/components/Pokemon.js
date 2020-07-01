import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchPokemon, fetchIndPokemon} from "../store/action/pokemonActions"
import IndPokemon from "./IndPokemon"



function Pokemon(props){

    return (
        <div className="pokemoncontainer">
            {/* <button onClick={()=>{props.fetchPokemon()}}>Fetch Pokemon</button> */}
            <header className="header"><h1> Pokedex</h1></header>
            {props.isLoading && (<h1>Loading ...</h1>)}
            <IndPokemon/>
            {props.nextPage && (<button onClick={()=>{props.fetchPokemon(`${props.nextPage}`)}}>Load More</button>)}

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.pkr.isLoading,
        pokemon: state.pkr.pokemon,
        error: state.pkr.error,
        firstPage: state.pkr.firstPage,
        nextPage: state.pkr.nextPage

    }
}

export default connect (
    mapStateToProps,
    {fetchPokemon, fetchIndPokemon}
)(Pokemon)