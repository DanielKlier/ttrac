import {SET_TASK_TITLE} from '../actions';

export default function(taskId, title) {
    return {
        type   : SET_TASK_TITLE,
        payload: {
            taskId,
            title
        }
    };
}
