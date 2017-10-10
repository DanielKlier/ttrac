import {START_TASK_PROGRESS} from './actionTypes';
import {stopTaskProgress} from './index';

export default function(taskId, startDate) {
    return (dispatch, getState) => {
        const runningTask = getState().app.runningTask;
        if (runningTask) {
            dispatch(
                stopTaskProgress(runningTask.taskId, runningTask.startDate, startDate)
            );
        }
        dispatch({
            type   : START_TASK_PROGRESS,
            payload: {
                taskId,
                startDate
            }
        });
    };
}
