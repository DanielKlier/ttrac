import {STOP_TASK_PROGRESS} from './actionTypes';
import uuid from 'uuid';
import addTimeLogToTask from './addTimeLogToTask';

function stopTaskProgress(taskId, startDate, newTimeLogId) {
    return {
        type   : STOP_TASK_PROGRESS,
        payload: {
            timeLogId: newTimeLogId,
            taskId,
            startDate,
            stopDate : Date.now()
        }
    };
}

export default function(taskId, startDate) {

    return (dispatch) => {
        const newTimeLogId = uuid();
        const stopAction   = stopTaskProgress(taskId, startDate, newTimeLogId);

        dispatch(stopAction);
        dispatch(addTimeLogToTask(taskId, newTimeLogId));
    };
}
