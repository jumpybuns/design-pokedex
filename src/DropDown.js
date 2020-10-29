import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div>
            <select onChange={this.props.handleChangeType_1}>
            <option value=''>Type</option>
            <option value='grass'>Grass</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='bug'>Bug</option>
            <option value='normal'>Normal</option>
            </select>
            <select onChange={this.props.handleChangeAttack}>
            <option value=''>Strength</option>
            <option value='weak'>Weak</option>
            <option value='mild'>Mild</option>
            <option value='strong'>Strong</option>
            </select>
            <select onChange={this.props.handleChangeDefense}>
            <option value=''>Defense</option>
            <option value='flimsy'>Flimsy</option>
            <option value='stiff'>Stiff</option>
            <option value='solid'>Solid</option>
            </select>
            </div>


        )
    }
}