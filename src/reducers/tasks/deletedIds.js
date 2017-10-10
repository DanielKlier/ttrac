import {DELETE_TASK} from '../../actions';
import {uniq} from 'lodash';

function deleteTask(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    return uniq(state.concat(taskId));
}

export default function(state = [], action) {
    switch (action.type) {
        case DELETE_TASK:
            return deleteTask(state, action);
        default:
            return state;
    }
}
