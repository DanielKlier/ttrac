import {DELETE_TIMELOGS, STOP_TASK_PROGRESS} from '../../actions';
import {combineReducers} from 'redux';
import omit from 'lodash/omit';
import omitBy from 'lodash/omitBy';
import mapValues from 'lodash/mapValues';
import difference from 'lodash/difference';

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

function deleteTimeLogs(state, action) {
    const {payload}    = action;
    const {timeLogIds} = payload;

    return omit(state, timeLogIds);
}

function timeLogsById(state = {}, action) {
    switch (action.type) {
        case STOP_TASK_PROGRESS:
            return addTimeLogEntry(state, action);
        case DELETE_TIMELOGS:
            return deleteTimeLogs(state, action);
        default:
            return state;
    }
}

function addTimeLogId(state, action) {
    const {payload}   = action;
    const {timeLogId} = payload;
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

function deleteFromTimeLogsByTaskId(state, action) {
    const {payload}    = action;
    const {timeLogIds} = payload;

    const withIdsRemoved = mapValues(
        state, currentLogIds => difference(currentLogIds, timeLogIds)
    );

    return omitBy(withIdsRemoved, logIds => logIds.length === 0);
}

function timeLogsByTaskId(state = {}, action) {
    switch (action.type) {
        case STOP_TASK_PROGRESS:
            return addTimeLogByTaskId(state, action);
        case DELETE_TIMELOGS:
            return deleteFromTimeLogsByTaskId(state, action);
        default:
            return state;
    }
}

function deleteTimeLogIds(state, action) {
    const {payload}    = action;
    const {timeLogIds} = payload;

    return difference(state, timeLogIds);
}

function allTimeLogs(state = [], action) {
    switch (action.type) {
        case STOP_TASK_PROGRESS:
            return addTimeLogId(state, action);
        case DELETE_TIMELOGS:
            return deleteTimeLogIds(state, action);
        default:
            return state;
    }
}

export default combineReducers({
    byId    : timeLogsById,
    byTaskId: timeLogsByTaskId,
    allIds  : allTimeLogs
});
