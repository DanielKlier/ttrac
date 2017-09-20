import {difference, mapValues, omitBy} from 'lodash';
import {DELETE_TIMELOGS, STOP_TASK_PROGRESS} from '../../actions';

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

export default timeLogsByTaskId;
