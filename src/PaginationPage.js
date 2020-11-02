import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import fetch from 'superagent';
import gif from './giphy.gif';

export default class PaginationPage extends Component {
    state = {
        pokemon: [],
        searchPokemon: '',
        loading: false,
        pageNumber: 1
    }
    
    componentDidMount = async () => {
        await this.fetchPokemon();

    }
    handleSubmit = async (e) => {
        e.preventDefault();

        await this.fetchPokemon();
    }

    handleChange = (e) => {
        this.setState({ searchPokemon: e.target.value })
    }
    handleIncrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1,
        })
        await this.fetchPokemon();

    }
    handleDecrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1,
        })
        await this.fetchPokemon();
    }


    fetchPokemon = async () => {
        this.setState({ loading: true })
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`);
        this.setState({ 
        pokemon: response.body.results,
        loading: false,
        count: response.body.count });

    }

    render() {
        return (
            <div>
                <div className="header">
                    Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
                </div>
                <div className="header">
                    {this.state.count} total pokemon in query
                </div>
                    {
                        <button className="prev" disabled={this.state.pageNumber === 1} onClick={this.handleDecrement}>Prev</button>
                    }
                    {
                        <button className="next" onClick={this.handleIncrement} disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
                            Next
                        </button>
                    }
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
                        
                        {/* { !this.state.loading 
                        ? 
                        <img src={gif} className='gif2' alt='gif'/> : */}
                            { this.state.pokemon.map(poke => 
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
            </div>
        )
    }
        
}

            
