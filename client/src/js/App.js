import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './MainView';
import Projects from './Projects/Projects';
import Time from './Time/Time';
import Invoices from './Invoices/Invoices';
import NewProject from './Projects/NewProject';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends React.Component {

    constructor(props) {
        super(props);
     }

    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={MainView}>
                        <IndexRoute component={Projects} />
                        <Route path='projects' component={Projects} />
                        <Route path='projects/add' component={NewProject} />
                        <Route path='time' component={Time} />
                        <Route path='invoices' component={Invoices} />
                    </Route>
                </Router>
                </Provider>
            );
    }

}

ReactDOM.render(<App />, document.getElementById('view'));

