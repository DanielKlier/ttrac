import {CREATE_NEW_CURRENT_TASK, DELETE_TASK} from '../../actions';
import {without} from 'lodash';

function addTaskId(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    return state.concat(taskId);
}

function deleteTaskId(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    return without(state, taskId);
}

export default function(state = [], action) {
    switch (action.type) {
        case CREATE_NEW_CURRENT_TASK:
            return addTaskId(state, action);
        case DELETE_TASK:
            return deleteTaskId(state, action);
        default:
            return state;
    }
}
