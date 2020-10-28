import './App.css';
import React from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeData from './Data.js';
import DropDown from './DropDown.js';


export default class App extends React.Component {
  state = {
      image: '',
      pokemon: '',
      type_1: '',
      attack: '',
      defense: '',
      
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
  render() {
      return (
          <div>
              <Header /> 
              <DropDown handleChangeType_1={this.handleChangeType_1} handleChangeAttack={this.handleChangeAttack} handleChangeDefense={this.handleChangeDefense}/>
              <PokeList pokeDataProps={pokeData} type_1={this.state.type_1} attack={this.state.attack} defense={this.state.defense} />

              
          </div>
      )
  }
}