import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render() {
        return (<p>Component rendered from JSX</p>);
    }
}

ReactDOM.render(<App />, document.getElementById('view'));

