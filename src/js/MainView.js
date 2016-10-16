import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import constants from './constants';

export default class MainView extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {activeTab: constants.projects};
        this.onTabChange = this.onTabChange.bind(this);
    }

    render() {
        return (
            <div>
                <Header/>
                <Menu activeTab={this.state.activeTab} onTabChange={this.onTabChange}/>
                {this.props.children}
                <Footer/>
            </div>);
    }

        onTabChange(tab) {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
     }
}

MainView.propTypes = {
    children: React.PropTypes.any
};

