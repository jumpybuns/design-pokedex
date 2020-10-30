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

                </ul>
                    <Switch> 
                        <Route 
                            path="/mainpage" 
                            exact
                            render={(routerProps) => <MainPage {...routerProps} />} 
                        />
                        <Route 
                            path="/sort" 
                            exact
                            render={(routerProps) => <Sort {...routerProps} />} 
                        />
                     
      
      
                    </Switch>
                </Router>
         
                </div>
          </div>
          </>
      )
  }
}