import './App.css';
import React from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeData from './Data.js';
import DropDown from './DropDown.js';


export default class App extends React.Component {
  state = {
      image: '',
      name: '',
      description: '',
      attack: '',
      defense: '',
      
  }

  handleChangeType_1 = e => {
      this.setState({
          description: e.target.value,
      });
  }

  handleChangeAttack = e => {
      this.setState({
          attack: e.target.value,
      });
  }
  handleChangeDefense = e => {
      this.setState({
          keydefenseword: e.target.value,
      });
  }
  render() {
      return (
          <div>
              <Header /> 
              <DropDown />

              <PokeList pokeDataProps={pokeData}/>
              
          </div>
      );
  }
  }