
// import React, { Component } from 'react'
// import fetch from 'superagent'
// export default class SearchPage extends Component {
// state = {
//     pokemon: [],
//     type_1: '',
//     url_image: '',
//     searchPokemon: '',
// }

//     componentDidMount = async () => {
//         await this.fetchPokemon();
//     }

//     handleClick = async (e) => {
//         e.preventDefault()
//         await this.fetchPokemon();
//     }

//     handleChange = (e) => {
//         this.setState({ searchPokemon: e.target.value });
//     }

//     fetchPokemon = async () => {
//         // this.setState({loading: true});
//         const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchPokemon}`)
//         this.setState({ pokemon: response.body.results });
//         // this.setState({loading: false});

//     }

//     render() {
//         return (
            
//             <div className='fetch'>
//                 <form onSubmit={this.handleClick}>
//                     <input onChange={this.handleChange} />
//                     <button>Search</button>
//                 </form>

//                                              {
//                         this.state.pokemon.map(poke => <div className="PokeItem" key={poke.id}>
//                         <p className="name">{poke.pokemon}</p>
//                         <img src={poke.url_image} alt={poke.type_1} className="pokeImage"/>
//                         <p className="attack">A: {poke.attack}</p>
//                         <p className="defense">D: {poke.defense}</p>
//                         <p className="type">{poke.type_1}</p> 
//                         </div>) }
//             </div>
            

                                               
//         )
//                                                      }    
// }