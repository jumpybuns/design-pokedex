import React, { Component } from 'react'
import fetch from 'superagent'
import gif from './giphy.gif';


export default class PokemonDetail extends Component {
    state = {
        pokemon: [],
        loading: ''
}


    componentDidMount = async () => {
        this.fetchPokemon();

    }
    fetchPokemon = async () => {
        this.setState({loading: true});
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)
        this.setState({ pokemon: response.body.results });
        this.setState({loading: false});

}
    render() {
        return (
            <div>
                        { this.state.loading 
                        ? 
                        <img src={gif} className='gif3' alt='gif'/> :
                        <div className="PokeDetails"> { 
                            this.state.pokemon.map(poke => 
                            
                            <div className="PokeItem" key={poke.id}>
                            <p className="name">{poke.pokemon}</p>
                            <img src={poke.url_image} alt={poke.type_1} className="pokeImage"/>
                            <p className="attack">A: {poke.attack}</p>
                            <p className="defense">D: {poke.defense}</p>
                            <p className="type">{poke.type_1}</p>
                            </div>
                            ) 
                        }</div> 
                    }
            </div>
        )
    }
}
