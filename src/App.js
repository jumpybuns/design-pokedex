import './App.css';
import React from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
import SearchPage from './SearchPage.js';
import Sort from './Sort';

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
          <>
          <div>
              
              <Header /> 
              
               
              <div>
              <Router>
                    <Switch> 
                        <Route 
                            path="/sort" 
                            exact
                            render={(routerProps) => <Sort {...routerProps} />} 
                        />
                        {/* <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <DropDown {...routerProps} />} 
                        /> */}
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                     
      
      
                    </Switch>
                </Router>
         
                </div>
          </div>
          </>
      )
  }
}