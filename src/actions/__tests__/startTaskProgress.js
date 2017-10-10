import startTaskProgress from '../startTaskProgress';
import {ADD_TIME_LOG_TO_TASK, START_TASK_PROGRESS, STOP_TASK_PROGRESS} from '../actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

const stateWithRunningTask = {
    app: {
        runningTask: {
            taskId   : '1',
            startDate: 12345
        }
    }
};

const stateWithoutRunningTask = {
    app: {
        runningTask: null
    }
};

it('dispatches the correct actions without running task', () => {
    const store = mockStore(stateWithoutRunningTask);
    store.dispatch(startTaskProgress('1', 12345));

    expect(store.getActions()).toEqual([
        {
            type   : START_TASK_PROGRESS,
            payload: {taskId: '1', startDate: 12345}
        }]);
});

it('dispatches the correct actions with running task', () => {
    const store = mockStore(stateWithRunningTask);

    store.dispatch(startTaskProgress('2', 23456));

    expect(store.getActions()).toEqual([
        {type      : STOP_TASK_PROGRESS,
            payload: {taskId: '1', startDate: 12345, stopDate: 23456, timeLogId: '1'}
        },
        {type      : ADD_TIME_LOG_TO_TASK,
            payload: {taskId: '1', timeLogId: '1'}
        },
        {type      : START_TASK_PROGRESS,
            payload: {taskId: '2', startDate: 23456}
        }
    ]);
});
