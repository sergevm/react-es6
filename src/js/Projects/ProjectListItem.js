import React from 'react';
import dateformat from 'dateformat';

export default class ProjectListItem extends React.Component{
    render() {
        return <li>{this.props.project.name} - {dateformat(this.props.project.startDate, 'yyyy-mm-dd')}</li>;
    }
}

ProjectListItem.propTypes =  {
    project: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        startDate: React.PropTypes.any
    })
};