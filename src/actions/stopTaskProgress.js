import {STOP_TASK_PROGRESS} from './actionTypes';
import uuid from 'uuid';
import addTimeLogToTask from './addTimeLogToTask';

function stopTaskProgress(taskId, startDate, newTimeLogId, stopDate) {
    return {
        type   : STOP_TASK_PROGRESS,
        payload: {
            timeLogId: newTimeLogId,
            taskId,
            startDate,
            stopDate
        }
    };
}

export default function(taskId, startDate, stopDate) {

    return (dispatch) => {
        const newTimeLogId = uuid();
        const stopAction   = stopTaskProgress(taskId, startDate, newTimeLogId, stopDate);

        dispatch(stopAction);
        dispatch(addTimeLogToTask(taskId, newTimeLogId));
    };
}
