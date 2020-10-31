import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import './App.css';
import { Link } from 'react-router-dom';



export default class PokeList extends Component {
    
    render() {

        return (
        <div className="PokeList">    
                    {
            this.props.pokeData.map(id => 
            <Link to={`/details/${id.pokemon}`}>
            <PokeItem
                image={id.url_image} 
                id={id.id}
                pokemon={id.pokemon} 
                type_1={id.type_1}
                attack={id.attack}
                defense={id.defense}
                key={id.id}
                /></Link>)
            }
        

        </div> 

        )
    }
}