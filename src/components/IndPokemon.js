// dependency imports
import React, {useState} from "react"

// import connect function to connect to the store
import {connect} from "react-redux";

// import styling
import {Button, Card, CardImg, CardBody, CardTitle} from "reactstrap";
import PokeModal from "./Modal"

function IndPokemon(props){
    // sort the pokemon by id
    let pokemon = props.pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1)
const consoleTarget = e => {
    console.log("targetid",e.target.id)
}
    const [modal, setModal] = useState(false)
    const toggle=()=>setModal(!modal)
    const [poketopass, setPoketopass] = useState([])
    const findPoke=(e)=>{
        pokemon.find(item=>{
                if(item.id == e.target.id){
                    setPoketopass(item)
                }
        })
    }
    return(
        <div className="allpokes">{
            pokemon.map(poke => {
                // console.log("poke", poke)
        return (
            <div>
                    <div key={poke.id}className="indpoke">
                        <Card key={poke.id} style={{width:"300px", backgroundColor:"rgba(255, 255, 255, 0.4)"}} onClick={(e)=>{consoleTarget(e)}}>
                            <CardImg top width="100%" src={poke.sprites.front_default} alt={poke.name} />
                            <CardBody id={poke.id}>
                                <CardTitle className="pokename" id={poke.id}>{poke.name.charAt(0).toUpperCase()+ poke.name.slice(1)}</CardTitle>
                                <Button outline size="sm" color="info" id={poke.id} onClick={(e)=>{toggle(); findPoke(e) }}>details</Button>
                            </CardBody>
                        </Card>
                    </div>
            </div>
                )
            })}
            {console.log("poketopass", poketopass)}
            {!props.searchError && (<PokeModal key={poketopass.id }poke={poketopass} isOpen={modal} itoggle={toggle}/>)}
        </div>
    )
}

// map your state from the reducer
const mapStateToProps = state => {
    return {
        pokemon: state.pkr.pokemon,
        searchError: state.pkr.searchError
    }
}
// export and connect your app
export default connect(mapStateToProps, {}) (IndPokemon)