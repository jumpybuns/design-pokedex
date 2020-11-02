import React from 'react';


export default class PokeItem extends React.Component {
    render() {
        console.log(this.props.url_image)
        return (
        <div className="PokeItem"> 
            <img className="pokeImage" src={this.props.image} alt={this.props.pokemon} ></img>
            <h2 className="pokemon">{this.props.pokemon}</h2>
            <h2 className="type_1">Type:{this.props.type_1}</h2>
            <h2 className="attack">Attack:{this.props.attack}</h2>
            <h2 className="defense">Defense:{this.props.defense}</h2>


        </div>
        )
    }
}