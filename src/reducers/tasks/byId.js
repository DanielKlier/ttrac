import {
    ADD_TIME_LOG_TO_TASK,
    CREATE_NEW_CURRENT_TASK,
    SET_TASK_TITLE
} from '../../actions';
import {TASK_SET_PROJECT} from '../../actions/actionTypes';

function createNewTask(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    const newTask = {
        id: taskId
    };

    return {
        ...state,
        [taskId]: newTask
    };
}

function setTaskTitle(state, action) {
    const {payload}       = action;
    const {taskId, title} = payload;

    const task = state[taskId];

    if (task) {
        return {
            ...state,
            [taskId]: {...task, title}
        };
    }
    else {
        return state;
    }
}

function addTimeLogToTask(state, action) {
    const {payload} = action;
    const {taskId, timeLogId} = payload;

    const task = state[taskId];

    if (task) {
        const currentLogs = task.timeLogIds || [];
        return {
            ...state,
            [taskId]: {...task, timeLogIds: currentLogs.concat(timeLogId)}
        }
    } else {
        return state;
    }
}

function setProjectId(state, action) {
    const {payload} = action;
    const {taskId, projectId} = payload;

    const task = state[taskId];

    if (task) {
        return {
            ...state,
            [taskId]: {...task, projectId}
        }
    }
    else {
        return state;
    }
}

export default function(state = {}, action) {
    switch (action.type) {
        case CREATE_NEW_CURRENT_TASK:
            return createNewTask(state, action);
        case SET_TASK_TITLE:
            return setTaskTitle(state, action);
        case ADD_TIME_LOG_TO_TASK:
            return addTimeLogToTask(state, action);
        case TASK_SET_PROJECT:
            return setProjectId(state, action);
        default:
            return state;
    }
}
