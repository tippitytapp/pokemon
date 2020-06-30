import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchPokemon, fetchIndPokemon} from "../store/action/pokemonActions"
import IndPokemon from "./IndPokemon"



function Pokemon(props){
    useEffect(()=>{
        props.fetchPokemon(props.firstPage)
    },[])

    return (
        <div className="pokemoncontainer">
            {/* <button onClick={()=>{props.fetchPokemon()}}>Fetch Pokemon</button> */}
            {props.isLoading && (<h1>Loading ...</h1>)}
            <IndPokemon/>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.pkr.isLoading,
        pokemon: state.pkr.pokemon,
        error: state.pkr.error,
        firstPage: state.pkr.firstPage

    }
}

export default connect (
    mapStateToProps,
    {fetchPokemon, fetchIndPokemon}
)(Pokemon)