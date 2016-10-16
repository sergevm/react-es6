import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {

    render() {
        return(
        <div className="container">
            <ul className="nav nav-tabs">
                <MenuItem to='/projects'>Projects</MenuItem>
                <MenuItem to='/time'>Time</MenuItem>
                <MenuItem to='/invoices'>Invoices</MenuItem>
             </ul>
        </div>);
    }
}

module.exports = Menu;