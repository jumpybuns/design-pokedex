import './App.css';
import React from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeData from './Data.js';
import DropDown from './DropDown.js';
import SearchBar from './SearchBar.js';

export default class App extends React.Component {
  state = {
      image: '',
      pokemon: '',
      type_1: '',
      attack: '',
      defense: '',
      value: '',
      searchPokemon: ''
      
  }
  // sortByNameAsc() {
  //   this.setState(prevState => {
  //     this.state.value.sort((a, b) => (a.pokemon - b.pokemon))
  // });
  // }

  // sortByNameDesc() {
  //   this.setState(prevState => {
  //     this.state.value.sort((a, b) => (b.pokemon - a.pokemon))
  // });
  // }

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
              <Header /> 
              {/* <SearchList handleChangeSearch={this.handleChangeSearch} value={this.state.value}/> */}
              <SearchBar handleChangeSearch={this.handleChangeSearch} value={this.state.value} handleSubmit={this.handleSubmit}/>
              <DropDown handleChangeType_1={this.handleChangeType_1} handleChangeAttack={this.handleChangeAttack} handleChangeDefense={this.handleChangeDefense}/>
              <PokeList pokeDataProps={pokeData} pokemon={this.state.pokemon} type_1={this.state.type_1} attack={this.state.attack} defense={this.state.defense} />

              
          </div>
      )
  }
}