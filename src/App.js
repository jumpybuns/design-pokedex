import './App.css';
import React from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Header.js';
import Sort from './Sort';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import PokemonDetail from './PokemonDetail.js';
import PaginationPage from './PaginationPage.js';


export default class App extends React.Component {

  render() {
      return (
          <>
          <div>
              
              <Header /> 
               
            
               <div>
              <Router>  
                <ul >
                    <Link className="link" to="./MainPage">Home</Link>
                    <Link className="link2" to="./sort">PokeDex</Link>
                    <Link className="link3" to="./pagination">Pagination</Link>


                </ul>
                    <Switch> 
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <MainPage {...routerProps} />} 
                        />
                        <Route 
                            path="/sort" 
                            exact
                            render={(routerProps) => <Sort {...routerProps} />} 
                        />
                        <Route 
                            path="/details/:pokemon" 
                            exact
                            render={(routerProps) => <PokemonDetail {...routerProps} />} 
                        />
                        <Route 
                            path="/pagination" 
                            exact
                            render={(routerProps) => <PaginationPage {...routerProps} />} 
                    />
                     
      
      
                    </Switch>
                </Router>
         
                </div>
          </div>
          </>
      )
  }
}