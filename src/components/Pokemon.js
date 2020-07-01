import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchPokemon, fetchIndPokemon} from "../store/action/pokemonActions"
import IndPokemon from "./IndPokemon"
import {Button, Spinner} from "reactstrap"


function Pokemon(props){

    return (
        <>
                    <header className="header"><h1> Pokedex</h1></header>

        <div className="pokemoncontainer">
            {/* <button onClick={()=>{props.fetchPokemon()}}>Fetch Pokemon</button> */}

            <IndPokemon/>
            {props.isLoading && (<><Spinner style={{width: '4rem', height: '4rem'}} type="grow"/><br/></>)}
            {props.nextPage && (<><br/><Button className="loadmore" onClick={()=>{props.fetchPokemon(`${props.nextPage}`)}}>Load More</Button></>)}

        </div>
        </>
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