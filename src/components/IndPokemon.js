// dependency imports
import React from "react"

// import connect function to connect to the store
import {connect} from "react-redux";

// import routing dependencies
import {Link, Route} from "react-router-dom"

//import card
import PokeCard from "./PokeCard";

// import styling
import {Button} from "reactstrap";

function IndPokemon(props){
    // sort the pokemon by id
    let pokemon = props.pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1)


    return(
        <div className="allpokes">{
            pokemon.map(poke => {
                // console.log("poke", poke)
        return (
            <div>

                    <div key={poke.id}className="indpoke">
                        <p>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</p>
                        <img src={poke.sprites.front_default} alt={poke.name} />
                        <Link key={poke.id} to={`/${poke.id}`}>
                                <Button outline size="sm" color="info">view card</Button>
                        </Link>
                    </div>

            </div>
                )
            })}
        </div>
    )
}

// map your state from the reducer
const mapStateToProps = state => {
    return {
        pokemon: state.pkr.pokemon
    }
}
// export and connect your app
export default connect(mapStateToProps, {}) (IndPokemon)