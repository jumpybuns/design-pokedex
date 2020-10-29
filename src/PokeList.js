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
        if (!this.props.type_1) return true;
        if (id.type_1 === this.props.type_1) return true;
        return false;
        })   
        .filter((id) => {
        if (!this.props.attack) return true;
        if ('weak' === this.props.attack) return id.attack <= 45;
        if ('mild' === this.props.attack) return id.attack >= 45 && id.attack <= 60;
        if ('strong' === this.props.attack) return id.attack >= 61;
        return false;
        })
        .filter((id) => {
        if (!this.props.defense) return true;
        if ('flimsy' === this.props.defense) return id.defense <= 50;
        if ('stiff' === this.props.defense) return id.defense >= 50 && id.defense <=65;
        if ('solid' === this.props.defense) return id.defense >= 66;
        return false;
        })
        // .filter((name) => {
        //     if (this.props.name === this.pokeDataProps.pokemon) return true;
        // return false;
        // })  

        return (
        <div className="PokeList">    
                    {
            filtered.map(id => 
            <PokeItem
                image={id.url_image} 
                id={id.id}
                pokemon={id.pokemon} 
                type_1={id.type_1}
                attack={id.attack}
                defense={id.defense} 
                />)
        }

        </div> 

        )
    }
}