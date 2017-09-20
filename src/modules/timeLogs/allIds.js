import {DELETE_TIMELOGS, STOP_TASK_PROGRESS} from '../../actions';
import {difference} from 'lodash';

function addTimeLogId(state, action) {
    const {payload}   = action;
    const {timeLogId} = payload;
    return state.concat(timeLogId);
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

export default allTimeLogs;
