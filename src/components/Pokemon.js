import React, {useState} from "react";
import {connect} from "react-redux";
import {fetchPokemon, fetchSearchedPokemon} from "../store/action/pokemonActions"
import IndPokemon from "./IndPokemon"
import {Button, Spinner} from "reactstrap"
import PokeModal from "./Modal"


function Pokemon(props){
    const [search, setSearch] = useState("")

    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    const [modal, setModal] = useState(false)
    const toggle=()=>setModal(!modal)
    return (
        <>
                    <header className="header">
                        <h1> Pokedex</h1>
                        <form onSubmit={(e)=>{e.preventDefault();toggle();props.fetchSearchedPokemon(` https://pokeapi.co/api/v2/pokemon/${search}`)}}>
                            <label htmlFor="search">Search: </label>
                            <input
                            type="text"
                            id="search"
                            name="search"
                            value={search}
                            onChange={(e)=>handleChange(e)}
                            placeholder="Search"
                            />
                            <Button>Go!</Button>
                        </form>
                    </header>

        <div className="pokemoncontainer">
            {/* <button onClick={()=>{props.fetchPokemon()}}>Fetch Pokemon</button> */}
            <IndPokemon/>
            {props.isLoading && (<><Spinner style={{width: '4rem', height: '4rem'}} type="grow"/><br/></>)}
            {props.nextPage && (<><br/><Button className="loadmore" onClick={()=>{props.fetchPokemon(`${props.nextPage}`)}}>Load More</Button></>)}

        </div>
        <PokeModal key={props.searchedPoke.id }poke={props.searchedPoke} isOpen={modal} itoggle={toggle}/>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.pkr.isLoading,
        pokemon: state.pkr.pokemon,
        error: state.pkr.error,
        firstPage: state.pkr.firstPage,
        nextPage: state.pkr.nextPage,
        isSearching: state.pkr.isSearching,
        searchedPoke: state.pkr.searchedPoke

    }
}

export default connect (
    mapStateToProps,
    {fetchPokemon, fetchSearchedPokemon}
)(Pokemon)