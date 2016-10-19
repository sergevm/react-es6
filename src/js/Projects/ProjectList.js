import React from 'react';
import ProjectApi from './../Api/ProjectApi';
import dateformat from 'dateformat';

export default class ProjectList extends React.Component
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
        var projects = this.state.projects;
        var projectItems = projects.map(
            (project) => { 
                return <li key={project.name}>{project.name} - {dateformat(project.startDate, 'yyyy-mm-dd') }</li>; 
            });

        return (
            <ul>
                {projectItems}
            </ul>);
    }
}