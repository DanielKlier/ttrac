import {DELETE_TIMELOGS, STOP_TASK_PROGRESS} from '../../actions';
import {omit} from 'lodash';

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

export default function(state = {}, action) {
    switch (action.type) {
        case STOP_TASK_PROGRESS:
            return addTimeLogEntry(state, action);
        case DELETE_TIMELOGS:
            return deleteTimeLogs(state, action);
        default:
            return state;
    }
}
