import React, { Component } from 'react';
import PokeItem from './PokeItem.js';




export default class PokeList extends Component {
    
    render() {

        return (
        <div className="PokeList">    
                    {
            this.props.pokeData.map(id => 
            <PokeItem
                image={id.url_image} 
                id={id.id}
                pokemon={id.pokemon} 
                type_1={id.type_1}
                attack={id.attack}
                defense={id.defense}
                key={id.id}
                />)
        }

        </div> 

        )
    }
}