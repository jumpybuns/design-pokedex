import React, { Component } from 'react'

export default class DropDown extends Component {
    state = {
        image: '',
        pokemon: '',
        type_1: '',
        attack: '',
        defense: '',
        value: '',
        searchPokemon: ''
        
    }
  
    handleChangeType_1 = e => {
        this.setState({
            type_1: e.target.value,
        });
    }
  
    handleChangeAttack = e => {
        this.setState({
            attack: e.target.value,
        });
    }
    handleChangeDefense = e => {
        this.setState({
            defense: e.target.value,
        });
    }
    handleChangeSearch = e => {
      this.setState({
          value: e.target.value,
      });
  }
    handleSubmit = e => {
    e.preventDefault();
    this.setState({
      searchPokemon: this.state.value,
    })
  }
    render() {
        return (
            <div>
            <select onChange={this.props.handleChangeType_1}>
            <option value=''>Type</option>
            <option value='grass'>Grass</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='bug'>Bug</option>
            <option value='normal'>Normal</option>
            </select>
            <select onChange={this.props.handleChangeAttack}>
            <option value=''>Strength</option>
            <option value='weak'>Weak</option>
            <option value='mild'>Mild</option>
            <option value='strong'>Strong</option>
            </select>
            <select onChange={this.props.handleChangeDefense}>
            <option value=''>Defense</option>
            <option value='flimsy'>Flimsy</option>
            <option value='stiff'>Stiff</option>
            <option value='solid'>Solid</option>
            </select>
            </div>


        )
    }
}