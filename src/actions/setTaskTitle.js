import {SET_TASK_TITLE} from './actionTypes';

export default function(taskId, title) {
    return {
        type   : SET_TASK_TITLE,
        payload: {
            taskId,
            title
        }
    };
}
