import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {

    render() {
        return(
        <div className="container">
            <ul className="nav nav-tabs">
                <MenuItem to='/projects' pathname={this.props.pathname}>Projects</MenuItem>
                <MenuItem to='/time' pathname={this.props.pathname}>Time</MenuItem>
                <MenuItem to='/invoices' pathname={this.props.pathname}>Invoices</MenuItem>
             </ul>
        </div>);
    }
}

Menu.propTypes = {
    pathname: React.PropTypes.string
};