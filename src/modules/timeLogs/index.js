import {STOP_TASK_PROGRESS} from '../../actions';
import {combineReducers} from 'redux';

function addTimeLogEntry(state, action) {
    const {payload}                                = action;
    const {timeLogId, taskId, startDate, stopDate} = payload;

    const timeLog = {
        id: timeLogId,
        startDate,
        stopDate,
        taskId
    };

    return {
        ...state,
        [timeLogId]: timeLog
    };
}

function timeLogsById(state = {}, action) {
    switch (action.type) {
        case STOP_TASK_PROGRESS:
            return addTimeLogEntry(state, action);
        default:
            return state;
    }
}

function addTimeLogId(state, action) {
    const {payload} = action;
    const {timeLogId}  = payload;
    return state.concat(timeLogId);
}

function addTimeLogByTaskId(state, action) {
    const {payload}           = action;
    const {taskId, timeLogId} = payload;
    return {
        ...state,
        [taskId]: (state[taskId] || []).concat(timeLogId)
    };
}

function timeLogsByTaskId(state = {}, action) {
    switch (action.type) {
        case STOP_TASK_PROGRESS:
            return addTimeLogByTaskId(state, action);
        default:
            return state;
    }
}

function allTimeLogs(state = [], action) {
    switch (action.type) {
        case STOP_TASK_PROGRESS:
            return addTimeLogId(state, action);
        default:
            return state;
    }
}

export default combineReducers({
    byId    : timeLogsById,
    byTaskId: timeLogsByTaskId,
    allIds  : allTimeLogs
});
