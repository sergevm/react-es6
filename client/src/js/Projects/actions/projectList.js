import ProjectApi from './../../Api/ProjectApi';

const start = () => {
    return {type: 'FETCH_PROJECTS'};
};

const receive = (json) => {
    return {type: 'RECEIVE_PROJECTS', projects: json};
};

export default () =>  {
    return function(dispatch) {
        dispatch(start());
        return ProjectApi.getList()
            .then(response => {
                return response.json();
            })
            .then(json => 
                dispatch(receive(json)
            ));
    };
};