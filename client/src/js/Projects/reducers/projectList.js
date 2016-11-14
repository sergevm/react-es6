export default (state = {projects: [], isFetching: false}, action) => {

    switch(action.type) {
        case 'FETCH_PROJECTS':
            var newState1 = Object.assign({}, state, {
                isFetching: true});
                return newState1;
        case 'RECEIVE_PROJECTS':
            var newState = Object.assign({}, state, {
                isFetching: false,
                projects: action.projects
            });
            return newState;
        default: 
            return state;
    }
};