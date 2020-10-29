import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class SearchList extends Component {    
    render() {
        const filtered = this.props.pokeDataProps.filter((pokemon) => {
        if (!this.props.pokemon) return true;
        if (pokemon.pokemon === this.props.pokemon) return pokemon.pokemon;
        return false;
        })

        return (
            <div className="SearchList">    
                        {
                filtered.map(id => 
                <PokeItem

                    pokemon={id.pokemon} 

                    />)
            }
    
            </div>
        )
    }
}
    