import React, { useEffect } from "react"
import {connect, useDispatch} from "react-redux"
import {getPokemon} from '../actions'


function Pokemon(props){

    const dispatch = useDispatch()
props.users = state.ur.users
    return(
        <>
        <button onClick={()=>{props.getPokemon()}}>Get Pokemon</button>
        <h1>Pokemon in pokemon.jsx</h1>
        {props.error && (<div> Error </div>)}
        </>
    )
}



const mapStateToProps = state => {
    console.log("MSTP", state)
    return{
        error: state.pkr.error,
        users: state.ur.users
    }
}

export default connect(
    mapStateToProps,
    {getPokemon}
)(Pokemon)