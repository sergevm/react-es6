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
            <table className='table table-striped table-bordered'>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
                {projectItems}
                </tbody>
            </table>);
    }
}

ProjectList.propTypes = {
    projects: React.PropTypes.array.isRequired
};