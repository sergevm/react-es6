import React from 'react';
import constants from './constants';

export class Content extends React.Component {
    render() {
        switch(this.props.activeTab) {
            case constants.projects:
                return <div>Projects</div>;
            default:
                return <div>Content</div>;
        }
    }
}

Content.propTypes = {
    activeTab: React.PropTypes.string.isRequired
};

module.exports = Content;