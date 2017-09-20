import {START_TASK_PROGRESS, STOP_TASK_PROGRESS} from '../../actions';

function setRunningTask(action) {
    const {payload}           = action;
    const {taskId, startDate} = payload;

    return {
        taskId,
        startDate
    };
}

function stopRunningTask() {
    return null;
}

export default function(state = null, action) {
    switch (action.type) {
        case START_TASK_PROGRESS:
            return setRunningTask(action);
        case STOP_TASK_PROGRESS:
            return stopRunningTask();
        default:
            return state;
    }
}
