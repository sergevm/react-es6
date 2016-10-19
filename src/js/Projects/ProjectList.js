import React from 'react';
import ProjectListItem from './ProjectListItem';

export default class ProjectList extends React.Component
{
    render() {
        var projectItems = this.props.projects.map(
            (project) => { 
                return <ProjectListItem key={project.name} project={project} />; 
            });

        return (
            <ul>
                {projectItems}
            </ul>);
    }
}

ProjectList.propTypes = {
    projects: React.PropTypes.array.isRequired
};