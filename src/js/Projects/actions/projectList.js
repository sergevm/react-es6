import ProjectApi from './../../Api/ProjectApi';

const start = () => {
    return {type: 'FETCH_PROJECTS'};
};

const receive = (json) => {
    return {type: 'RECEIVE_PROJECTS', projects: json};
};

// Thunk - handling async stuff ...
export default () =>  {
    return function(dispatch) {
        dispatch(start());
        return ProjectApi.getList()
            .then(json => dispatch(receive(json)));
    };
};