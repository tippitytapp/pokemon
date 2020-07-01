import React, {useState} from "react"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"

function PokeModal(props){

    const [open, setOpen] = useState(false)
    const [nestedOpen, setNestedOpen] = useState(false)
    const [closeAll, setCloseAll] = useState(false)
    const toggle = () => setOpen(!open)
    const toggleNested = () => {setNestedOpen(!nestedOpen); setCloseAll(false)}
    const toggleAll = () => {setNestedOpen(!nestedOpen); setCloseAll(true)}

    const closeBtn = <button className="close" onClick={props.itoggle}>&times;</button>
    const closeNestedBtn = <button className="close" onClick={toggleNested}>&times;</button>
    return(
        <Modal returnFocusAfterClose isOpen={props.isOpen}>
            <ModalHeader toggle={toggle} close={closeBtn}>{props.poke.name}</ModalHeader>
            <ModalBody>
                <p>Height: {props.poke.height}</p>
                <p>Weight: {props.poke.weight}</p>
                <div>Abilities: {props.poke.abilities.map(item=>{
                    return (<p>{item.name}</p>)
                })}</div>
                <div>Stats: {props.poke.stats.map(item=>{
                    return(<p>Stat: {item.stat.name} {item.base_stat}</p>)
                })}</div>
                <div className="imgfrontback">
                    {props.poke.sprites.front_default && (<img src={props.poke.sprites.back_default}/>)}
                    {props.poke.sprites.front_female && (<img src={props.poke.sprites.back_female}/>)}
                    {props.poke.sprites.back_default && (<img src={props.poke.sprites.back_default}/>)}
                    {props.poke.sprites.back_female && (<img src={props.poke.sprites.back_female}/>)}
                </div>
                <Button color="info" onClick={toggleNested}>View Moves</Button>
                <Modal isOpen={nestedOpen} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                    <ModalHeader toggle={toggleNested} close={closeNestedBtn}>{props.poke.name}'s Moves:</ModalHeader>
                    <ModalBody>
                        {props.poke.moves.map(item=> {
                            return(<div>{item.move.name}</div>)
                        })}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleNested}>Done</Button>
                        <Button color="danger" onClick={props.itoggle}>Close All</Button>
                    </ModalFooter>
                </Modal>

            </ModalBody>
        </Modal>
    )
}

export default PokeModal