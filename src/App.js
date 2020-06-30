import React from 'react';
import './App.css';
import Pokemon from "./components/Pokemon";
import {connect} from "react-redux";
import {fetchPokemon} from "./store/action/pokemonActions"


function App(props) {
  return (
    <div className="App">
        <header className="header">
            <h1>Pokemon Redux</h1>
          {/* {props.prevPage && (<button onClick={()=>{props.fetchPokemon(`${props.prevPage}`)}}>Previous Page</button>)} */}


        </header>            
        <Pokemon />
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