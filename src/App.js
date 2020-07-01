import React, {useEffect} from 'react';
import './App.css';
import Pokemon from "./components/Pokemon";
import {connect} from "react-redux";
import {fetchPokemon} from "./store/action/pokemonActions"
import {Route} from "react-router-dom"

function App(props) {
  useEffect(()=>{
    props.fetchPokemon(props.firstPage)
},[])
  return (
    <div className="App">           
        <Route exact path="/"><Pokemon /></Route>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    firstPage: state.pkr.firstPage,
    prevPage: state.pkr.prevPage,
    nextPage: state.pkr.nextPage
  }
}
export default connect(mapStateToProps, {fetchPokemon})(App);