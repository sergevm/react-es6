import React from 'react';
import ProjectList from './ProjectList';

export default class Projects extends React.Component
{
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <ProjectList />
            </div>
        );
    }
}