import React from 'react';


export default class PokeItem extends React.Component {
    render() {
        console.log(this.props.url_image)
        return (
        <div> 
            <img className="PokeItem" src={this.props.image} alt={this.props.pokemon} width="200" ></img>
            <h2 className="pokemon">{this.props.name}</h2>
            <h2 className="type_1">Type:{this.props.description}</h2>
            <h2 className="attack">Attack:{this.props.attack}</h2>
            <h2 className="defense">Defense:{this.props.defense}</h2>


        </div>
        )
    }
}