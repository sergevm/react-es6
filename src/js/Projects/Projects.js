import React from 'react';
import {Link} from 'react-router';
import ProjectList from './ProjectList';
import ProjectApi from './../Api/ProjectApi';

export default class Projects extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {projects: []};
    }

    componentDidMount() {
        var self = this;
        ProjectApi.getList()
            .then(function(projects) {
                self.setState({projects: projects});
            });
    }

    render() {
        return (
            <div>
                <h2>Projects</h2>
                <div>
                    <Link to='projects/add'>Add</Link>
                    <ProjectList projects={this.state.projects} />
                </div>
            </div>
        );
    }
}

Projects.propTypes = {
    children: React.PropTypes.any
};