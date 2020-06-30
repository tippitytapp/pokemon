import React from 'react';
import './App.css';
import Pokemon from "./components/Pokemon";
import {connect} from "react-redux";
import {fetchPokemon} from "./store/action/pokemonActions"
import {Route} from "react-router-dom"

function App(props) {
  return (
    <div className="App">
        <header className="header">
            <h1>Pokedex</h1>
          {/* {props.prevPage && (<button onClick={()=>{props.fetchPokemon(`${props.prevPage}`)}}>Previous Page</button>)} */}


        </header>            
        <Route exact path="/"><Pokemon /></Route>
        {props.nextPage && (<button onClick={()=>{props.fetchPokemon(`${props.nextPage}`)}}>Load More</button>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    prevPage: state.pkr.prevPage,
    nextPage: state.pkr.nextPage
  }
}
export default connect(mapStateToProps, {fetchPokemon})(App);