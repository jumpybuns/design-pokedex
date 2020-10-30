import React, { Component } from 'react'
import fetch from 'superagent'
// import DropDown from './DropDown.js';

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
        await this.setState ({ pokemon: e.target.value })   }

    fetchByDefAsc = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=defence&direction=asc`)
        this.setState({ fetchDefAsc: response.body.results });
    
    }
    fetchByDefDesc = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=defence&direction=desc`)
        this.setState({ fetchDefDesc: response.body.results });
    
    }

    render() {
        return (
            <div className='sort'>
                
                <select onChange={this.props.DropDown}></select>
                    
               
                    { 
                    this.props.pokemon.map(poke => <div key={poke.type_1}>
                    <img src={poke.url_image} alt={poke.type_1}/>
                    <p>{poke.type_1}</p>
                    <p>{poke.pokemon}</p></div>)
                    }
                    
            </div>
                
        )
    }
}
