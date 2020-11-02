/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import pokepuke from './pokepuke.gif';
import { Link } from 'react-router-dom';

export default class MainPage extends Component {
    render() {
        return (
            <Link to="./sort"><div className='gif'>
                <img src={pokepuke} width="438" 
                height="480" frameBorder="0"  ></img> 
                </div>
               </Link> )
    }
}
