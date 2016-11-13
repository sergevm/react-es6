import {combineReducers} from 'redux';
import projectList from './Projects/reducers/projectList';

export default combineReducers(
    {
        // "projects" part of the state is reduced with projectList reducer
        // name of the field should map to the name of the subtree in state that 
        // is managed with the reducer.
        projects: projectList,
    });