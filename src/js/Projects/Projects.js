import React from 'react';
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
                <ProjectList projects={this.state.projects}/>
            </div>
        );
    }
}