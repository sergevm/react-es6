import React from 'react';
import {Link} from 'react-router';

export default class NewProject extends React.Component{
    render() {
        return  <div>
                    <h2>Create new project</h2>
                    <Link to='projects'>Done</Link>
                </div>;
    }
}