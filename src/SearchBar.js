import React, { Component } from 'react'
// import PokeItem from './PokeItem.js';

export default class SearchBar extends Component {
    // handleSubmit(event) {
    //     event.preventDefault();
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label> Search
                        <input className="searchbar"  
                        onChange={this.props.handleChangeSearch} />
                    </label>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
