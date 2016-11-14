import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

export default class MainView extends React.Component
{
    render() {
        return (
            <div>
                <Header/>
                <Menu pathname={this.props.location.pathname}/>
                {this.props.children}
                <Footer/>
            </div>);
    }
}

MainView.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.shape({pathname: React.PropTypes.string})
};

