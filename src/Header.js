import React from 'react';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>You Have To Catch Them All</h1>
                <li>
                    <Link to="./">Home</Link>
                    <Link to="./Sort.js">PokeDex</Link>

                </li>
            </header>
        )
    }
}