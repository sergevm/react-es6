import React from 'react';
import dateformat from 'dateformat';

export default class ProjectListItem extends React.Component{
    render() {
        return <tr>
                    <td>{this.props.project.name}</td>
                    <td>{dateformat(this.props.project.startDate, 'yyyy-mm-dd')}</td>
                    <td>{this.props.project.description}</td>
                    <td>{this.props.project.category}</td>
                </tr>;
    }
}

ProjectListItem.propTypes =  {
    project: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        startDate: React.PropTypes.any, 
        description: React.PropTypes.string.isRequired,
        category: React.PropTypes.string
    })
};