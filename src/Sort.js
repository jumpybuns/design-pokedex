import React, { Component } from 'react'
import fetch from 'superagent'

export default class Sort extends Component {
    state = {
        pokemon: [],
        fetchDefAsc: '',
        fetchDefDesc: ''
    }

    componentDidMount = async () => {
        const items = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        this.setState({ pokemon: items.body.results });

    }
    handleSubmit = async (e) => {
        e.preventDefault();
    this.setState({
      searchPokemon: this.state.value,
    }) }
        // await this.setState ({ pokemon: e.target.value })   }

    fetchByDefAsc = async () => {
        const responseUp = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=defence&direction=asc`)
        this.setState({ fetchDefAsc: responseUp.body.results });
    }
    fetchByDefDesc = async () => {
        const responseDown = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=defence&direction=desc`)
        this.setState({ fetchDefDesc: responseDown.body.results });
    
    }

    render() {        

        return (
            <>
            <div className='sort'>
                    <select onChange={this.state.fetchByDefAsc}>
                    <option value=''>Show All</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>   
                    </select>
                    <select onChange={this.state.fetchByDefDesc}>
                    <option value=''>Show All</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>   
                    </select>
               
                    { 
                        this.state.pokemon.map(poke => <div className="PokeItem" key={poke.id}>
                        <p className="name">{poke.pokemon}</p>
                        <img src={poke.url_image} alt={poke.type_1} className="pokeImage"/>
                        <p className="attack">A: {poke.attack}</p>
                        <p className="defense">D: {poke.defense}</p>
                        <p className="type">{poke.type_1}</p>
                        </div>)
                    }
                    
            </div>
            </> 
        )
    }
}
