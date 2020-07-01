// dependency imports
import React, {useState} from "react"

// import connect function to connect to the store
import {connect} from "react-redux";

// import routing dependencies
import {Link, Route} from "react-router-dom"

//import card
import PokeCard from "./PokeCard";

// import styling
import {Button, Card, CardImg, CardBody, CardTitle} from "reactstrap";
import PokeModal from "./Modal"

function IndPokemon(props){
    // sort the pokemon by id
    let pokemon = props.pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1)

    const [modal, setModal] = useState(false)
    const toggle=()=>setModal(!modal)
    return(
        <div className="allpokes">{
            pokemon.map(poke => {
                // console.log("poke", poke)
        return (
            <div>

                    <div key={poke.id}className="indpoke">
                        <Card style={{width:"150px"}}>
                            <CardImg top width="100%" src={poke.sprites.front_default} alt={poke.name} />
                            <CardBody>
                                <CardTitle>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</CardTitle>
                                <Button outline size="sm" color="info" onClick={()=>toggle()}>details</Button>
                                <PokeModal poke={poke} isOpen={modal} itoggle={toggle}/>
                            </CardBody>
                        </Card>

                        <p></p>

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