import {STOP_TASK_PROGRESS} from './actionTypes';
import uuid from 'uuid';

export default function(taskId, startDate) {
    return {
        type   : STOP_TASK_PROGRESS,
        payload: {
            timeLogId: uuid(),
            taskId,
            startDate,
            stopDate : Date.now()
        }
    };
}
