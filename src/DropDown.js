import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div>
            <select onChange={this.props.handleChangeType_1}>
            <option value=''>Show All Types</option>
            <option value='grass'>Grass</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='bug'>Bug</option>
            <option value='normal'>Normal</option>
            </select>
            <select onChange={this.props.handleChangeAttack}>
            <option value=''>Show All Types</option>
            <option value='49'>Grass</option>
            <option value='62'>Fire</option>
            <option value='water'>Water</option>
            <option value='bug'>Bug</option>
            <option value='normal'>Normal</option>
            </select>
            <select onChange={this.props.handleChangeDefense}>
            <option value=''>Show All Types</option>
            <option value='grass'>Grass</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='bug'>Bug</option>
            <option value='normal'>Normal</option>
            </select>
            </div>


        )
    }
}