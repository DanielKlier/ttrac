import {combineReducers} from 'redux';
import without from 'lodash/without';
import omit from 'lodash/omit';
import {
    CREATE_NEW_CURRENT_TASK,
    DELETE_TASK,
    SET_TASK_TITLE
} from '../../actions';

function createNewTask(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    const newTask = {id: taskId};

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

function deleteTaskById(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    return omit(state, taskId);
}

function tasksById(state = {}, action) {
    switch (action.type) {
        case CREATE_NEW_CURRENT_TASK:
            return createNewTask(state, action);
        case DELETE_TASK:
            return deleteTaskById(state, action);
        case SET_TASK_TITLE:
            return setTaskTitle(state, action);
        default:
            return state;
    }
}

function addTaskId(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    return state.concat(taskId);
}

function deleteTaskId(state, action) {
    const {payload} = action;
    const {taskId}  = payload;

    return without(state, taskId);
}

function allIds(state = [], action) {
    switch (action.type) {
        case CREATE_NEW_CURRENT_TASK:
            return addTaskId(state, action);
        case DELETE_TASK:
            return deleteTaskId(state, action);
        default:
            return state;
    }
}

export default combineReducers({
    byId  : tasksById,
    allIds: allIds
});
