import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import tasksReducer from './tasks';
import timeLogsReducer from './timeLogs';
import runningTask from './runningTask';
import projectsReducer from './projects';

export default combineReducers({
    router: routerReducer,
    app: combineReducers({
        tasks: tasksReducer,
        timeLogs: timeLogsReducer,
        runningTask: runningTask,
        projects: projectsReducer
    })
});
