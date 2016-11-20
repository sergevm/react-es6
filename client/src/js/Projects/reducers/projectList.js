export default (state = {projects: [], isFetching: false}, action) => {

    switch(action.type) {
        case 'FETCH_PROJECTS':
            return Object.assign({}, state, {
                isFetching: true});
        case 'RECEIVE_PROJECTS':
            return Object.assign({}, state, {
                isFetching: false,
                projects: action.projects
            });
        default: 
            return state;
    }
};