import {TASK_SET_PROJECT} from './actionTypes';

export default (taskId, projectId) => ({
    type: TASK_SET_PROJECT,
    payload: {taskId, projectId}
});
