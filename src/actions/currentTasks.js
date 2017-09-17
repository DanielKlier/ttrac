import * as actions from '../actionTypes';

export function createNewCurrentTask() {
    return {
        type: actions.CREATE_NEW_CURRENT_TASK
    };
}

export function setTaskTitle(taskId, title) {
    return {
        type: actions.SET_TASK_TITLE,
        taskId, title
    };
}