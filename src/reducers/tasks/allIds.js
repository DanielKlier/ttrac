import {CREATE_NEW_CURRENT_TASK} from '../../actions';

function addTaskId(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    return state.concat(taskId);
}

export default function(state = [], action) {
    switch (action.type) {
        case CREATE_NEW_CURRENT_TASK:
            return addTaskId(state, action);
        default:
            return state;
    }
}
