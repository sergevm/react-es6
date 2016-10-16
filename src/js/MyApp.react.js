import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Footer from './Footer.react';
import Content from './Content.react';
import Menu from './Menu.react';
import Constants from './constants';

export default class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {activeTab: Constants.invoices};
        this.onTabChange = this.onTabChange.bind(this);
    }

    render() {
        return (<div>
                    <Header/>
                    <Menu activeTab={this.state.activeTab} onTabChange={this.onTabChange}/>
                    <Content activeTab={this.state.activeTab}/>
                    <Footer/>
                </div>);
    }

    onTabChange(tab) {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
     }
}

ReactDOM.render(<App />, document.getElementById('view'));

