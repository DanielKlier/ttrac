import * as actions from '../actionTypes';

export function createNewCurrentTask() {
    return {
        type: actions.CREATE_NEW_CURRENT_TASK
    };
}

export function setTaskTitle(taskId, title) {
    return {
        type: actions.SET_TASK_TITLE,
        taskId,
        title
    };
}

export function startTaskProgress(taskId) {
    return {
        type: actions.START_TASK_PROGRESS,
        taskId
    };
}

export function stopTaskProgress(taskId) {
    return {
        type: actions.STOP_TASK_PROGRRESS,
        taskId
    };
}
