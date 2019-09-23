import React, { Component } from 'react'
import DrawerVentes from './DrawerVentes'
import DrawerReglements from './DrawerReglements'


export default class allDrawers extends Component {
    render() {
        return (
            <div className="drawersContainer">
            <DrawerVentes/>
            <DrawerReglements/>
            </div>
        )
    }
}
