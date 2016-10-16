import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './MainView';
import Projects from './Projects';
import Time from './Time';
import Invoices from './Invoices';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

export default class App extends React.Component {

    constructor(props) {

        super(props);
     }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={MainView}>
                    <IndexRoute component={Projects} />
                    <Route path='projects' component={Projects}/>
                    <Route path='time' component={Time} />
                    <Route path='invoices' component={Invoices} />
                </Route>
            </Router>
            );
    }

}

ReactDOM.render(<App />, document.getElementById('view'));

