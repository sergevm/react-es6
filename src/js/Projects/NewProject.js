import React from 'react';
import {Link} from 'react-router';

export default class NewProject extends React.Component{
    componentDidMount() {
        document.title = 'New Project';
    }

    render() {
        return  <div>
                    <h2>Create new project</h2>
                    <Link to='projects' className='btn btn-default btn-primary'>Done</Link>
                </div>;
    }
}