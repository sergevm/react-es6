import React from 'react';
import {Link} from 'react-router';
import ProjectList from './ProjectList';
import projectList from './actions/projectList';
import {connect} from 'react-redux';

class Projects extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {projects: []};
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        return (
            <div>
                <h2>Projects</h2>
                <div>
                    <Link to='projects/add' className='btn btn-default btn-primary'>Add</Link>
                    <ProjectList projects={this.props.projects} />
                </div>
            </div>
        );
    }
}

Projects.contextTypes = {
    store: React.PropTypes.object
};

Projects.propTypes = {
    getList: React.PropTypes.func.isRequired,
    projects: React.PropTypes.arrayOf(React.PropTypes.any)
};

// Map state to props
const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects || [], 
        isFetching: state.isFetching || false
    };
};

// Mapping of actions to props ...
const mapDispatchToProps = (dispatch) =>
    {
        return {
            getList: () => dispatch(projectList())
        };
    };

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Projects);