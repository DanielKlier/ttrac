import {stopTaskProgress} from './index';
import {DELETE_TASK} from './actionTypes';
import deleteTimelogs from './deleteTimelogs';

function deleteTask(taskId) {
    return {
        type   : DELETE_TASK,
        payload: {
            taskId
        }
    };
}

export default function(taskId) {
    return (dispatch, getState) => {
        // If the task we want to delete is running, stop it, first
        const {app} = getState();
        if (app.runningTask && app.runningTask.taskId === taskId) {
            dispatch(stopTaskProgress(taskId, app.runningTask.startDate));
        }

        // Delete time logs for this task, first
        const timeLogIds = app.timeLogs.byTaskId[taskId];
        dispatch(deleteTimelogs(timeLogIds));

        return dispatch(deleteTask(taskId));
    };
}
