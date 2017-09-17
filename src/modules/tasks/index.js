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
    }
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case actions.CREATE_NEW_CURRENT_TASK:
            return createNewTaskAndAddToCurrent();
        case actions.SET_TASK_TITLE:
            return setTaskTitle(state, action.taskId, action.title);
        default:
            return state;
    }
}
