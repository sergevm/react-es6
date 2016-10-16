import React from 'react';
import constants from './constants';

export class Menu extends React.Component {

    render() {
        return( 
        <div className="container">
            <ul className="nav nav-tabs">
                <li role="presentation" className={this.props.activeTab === constants.projects ? 'active' : ''} onClick={() => this.props.onTabChange(constants.projects)}><a href="#" >Projects</a></li>
                <li role="presentation" className={this.props.activeTab === constants.time ? 'active' : ''} onClick={() => this.props.onTabChange(constants.time)}><a href="#">Time Registration</a></li>
                <li role="presentation" className={this.props.activeTab === constants.invoices ? 'active' : ''} onClick={() => this.props.onTabChange(constants.invoices)}><a href="#">Invoices</a></li>
            </ul>
        </div>);
    }
}

Menu.propTypes = {
    activeTab: React.PropTypes.string.isRequired,
    onTabChange: React.PropTypes.func.isRequired
};

module.exports = Menu;