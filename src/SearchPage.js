
import React, { Component } from 'react'
import fetch from 'superagent'
export default class SearchPage extends Component {
state = {
    pokemon: [],
    type_1: '',
    url_image: '',
    searchPokemon: '',
}

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleClick = async (e) => {
        e.preventDefault()
        await this.fetchPokemon();
    }

    handleChange = (e) => {
        this.setState({ searchPokemon: e.target.value });
    }

    fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}`)
        this.setState({ pokemon: response.body.results });
    
    }

    render() {
        console.log(this.state.pokemon)
        return (
            <div className='fetch'>
                <form onSubmit={this.handleClick}>
                    <input onChange={this.handleChange} />
                    <button>Search By Pokemon</button>
                </form>
                    { 
                    this.state.pokemon.map(poke => <div key={poke.id}>
                    <img src={poke.url_image} alt={poke.type_1}/>
                    <p>{poke.type_1}</p>
                    <p>{poke.pokemon}</p></div>)
                    }
                    
            </div>
        )
    }
}