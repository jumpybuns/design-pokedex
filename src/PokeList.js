import React, { Component } from 'react';
import PokeItem from './PokeItem.js';




export default class PokeList extends Component {
    
    render() {
        const filtered = this.props.pokeDataProps.filter((id) => {
        if (!this.props.pokemon) return true;
        if (id.pokemon === this.props.pokemon) return true;
        return false;

     })
        .filter((id) => {
        if (!this.props.url_image) return true;
        if (id.url_image === this.props.url_image) return true;
        return false;
        })   
        .filter((id) => {
        if (!this.props.type_1) return true;
        if (id.type_1 === +this.props.type_1) return true;
        return false;
        })   
        .filter((id) => {
        if (!this.props.attack) return true;
        if (id.attack === +this.props.attack) return true;
        return false;
        })
        .filter((id) => {
            if (!this.props.defense) return true;
            if (id.defense === +this.props.defense) return true;
            return false;
            })  
            console.log(this.props.pokeDataProps) 
        return (
        <div className="PokeList">    
                    {
            filtered.map(id => 
            <PokeItem
                image={id.url_image} 
                id={id.id}
                name={id.pokemon} 
                description={id.type_1}
                attack={id.attack}
                defense={id.defense} 
                />)
        }

        </div> 

        )
    }
}