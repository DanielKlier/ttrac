import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import currentTasksReducer from './currentTasks';

export default combineReducers({
    router: routerReducer,
    currentTasks: currentTasksReducer
});
