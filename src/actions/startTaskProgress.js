import {START_TASK_PROGRESS} from '../actions';

export default function(taskId) {
    return {
        type   : START_TASK_PROGRESS,
        payload: {
            taskId,
            startDate: Date.now()
        }
    };
}
