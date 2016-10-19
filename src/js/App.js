import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './MainView';
import Projects from './Projects/Projects';
import Time from './Time/Time';
import Invoices from './Invoices/Invoices';
import NewProject from './Projects/NewProject';
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
                    <Route path='projects' component={Projects} />
                    <Route path='projects/add' component={NewProject} />
                    <Route path='time' component={Time} />
                    <Route path='invoices' component={Invoices} />
                </Route>
            </Router>
            );
    }

}

ReactDOM.render(<App />, document.getElementById('view'));

