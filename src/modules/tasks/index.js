import * as actions from '../../actionTypes';
import * as uuid from 'uuid';

const defaultState = {
    byId        : {},
    currentTasks: [],
    runningTask : null
};

function createNewTaskAndAddToCurrent(state) {
    const task = {
        uuid: uuid()
    };

    const byId      = {...state.byId};
    byId[task.uuid] = task;

    return {
        ...state,
        byId        : byId,
        currentTasks: state.currentTasks.concat(task.uuid)
    };
}

function setTaskTitle(state, taskId, title) {
    const task = state.byId[taskId];

    if (!task) {
        return state;
    }

    const newTask = {...task};
    newTask.title = title;

    const byId = {...state.byId};

    byId[taskId] = newTask;

    return {
        ...state,
        byId
    };
}

function startTaskProgress(state, taskId) {

    // Cannot start progress on a non existing task
    const task = state.byId[taskId];

    if (!task) {
        return state;
    }

    // Cannot start progress if the task is already in progress
    if (state.runningTask !== null) {

        if (state.runningTask === task.uuid) {
            return state;
        }
        else {
            // Stop progress on another running task
            state = stopTaskProgress(state, taskId);
        }
    }

    return {
        ...state,
        runningTask  : taskId,
        startedTaskAt: Date.now()
    };
}

function stopTaskProgress(state, taskId) {

    // Do nothing if no running task
    if (!state.runningTask) {
        return state;
    }

    // Do nothing if taskId does not match running task
    if (state.runningTask !== taskId) {
        return state;
    }

    // Do nothing if task does not exist
    const task = state.byId[taskId];

    if (!task) {
        return state;
    }

    // Create a new time log
    const timeLog = {
        uuid     : uuid(),
        startTime: state.startedTaskAt,
        stopTime : Date.now(),
        taskId   : taskId
    };

    const timeLogs = {...state.timeLogs};

    const logsById = {...timeLogs.byId};

    logsById[timeLog.uuid] = timeLog;

    timeLogs.byId = logsById;

    const newTask = {
        ...task,
        timeLogs: (task.timeLogs || []).concat(timeLog.uuid)
    };

    const tasksById = {...state.byId};

    tasksById[newTask.uuid] = newTask;

    return {
        ...state,
        byId: tasksById,
        timeLogs: timeLogs,
        runningTask: null
    };
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case actions.CREATE_NEW_CURRENT_TASK:
            return createNewTaskAndAddToCurrent(state);
        case actions.SET_TASK_TITLE:
            return setTaskTitle(state, action.taskId, action.title);
        case actions.START_TASK_PROGRESS:
            return startTaskProgress(state, action.taskId);
        case actions.STOP_TASK_PROGRRESS:
            return stopTaskProgress(state, action.taskId);
        default:
            return state;
    }
}
