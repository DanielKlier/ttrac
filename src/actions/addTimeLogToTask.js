import {ADD_TIME_LOG_TO_TASK} from './actionTypes';

export default function(taskId, timeLogId) {
    return {
        type   : ADD_TIME_LOG_TO_TASK,
        payload: {taskId, timeLogId}
    };
}
