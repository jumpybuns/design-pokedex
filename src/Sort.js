import React, { Component } from 'react'
import fetch from 'superagent'
import { Link } from 'react-router-dom';


export default class Sort extends Component {
    state = {
        pokemon: [],
        searchPokemon: '',
        direction: '',
        type: '',
        loading: ''
}

    componentDidMount = async () => {
        const items = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        this.setState({ pokemon: items.body.results });

    }
    handleChange = (e) => {
        this.setState({ searchPokemon: e.target.value })
    }
    handleClick = async (e) => {
        e.preventDefault()
        await this.fetchPokemon();
    }
    handleDirectionChange = async (e) => {
        this.setState({ direction: e.target.value }) }
    
    handleTypeChange = async (e) => {
        this.setState({ type: e.target.value })
    }
    fetchPokemon = async () => {
            this.setState({loading: true});
            const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}&sort=${this.state.type}&direction=${this.state.direction}`)
            this.setState({ pokemon: response.body.results });
            this.setState({loading: false});
    
    }

    render() {        

        return (
            
            <div className='sort'>
                <form onSubmit={this.handleClick}>
                    <input onChange={this.handleChange} />
                    <button>Search</button>
                </form>
                    <div className="dropdown">
                    <select onChange={this.handleDirectionChange}>
                    <option value=''>Show All</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option> 
                    </select>
                    <select onChange={this.handleTypeChange}>
                    <option value='type_1'>Type</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                    <option value='hp'>HP</option>   
                    <option value='speed'>Speed</option>   
                    </select>
                    </div>
                    { !this.state.pokemon.length ? "loading" :
                        this.state.pokemon.map(poke => 
                        <Link to={`/details/${poke.pokemon}`}>
                        <div className="PokeItem" key={poke.id}>
                        <p className="name">{poke.pokemon}</p>
                        <img src={poke.url_image} alt={poke.type_1} className="pokeImage"/>
                        <p className="attack">A: {poke.attack}</p>
                        <p className="defense">D: {poke.defense}</p>
                        <p className="type">{poke.type_1}</p>
                        </div>
                        </Link>) 
                    }
                    
            </div>
        )
                }
    }

