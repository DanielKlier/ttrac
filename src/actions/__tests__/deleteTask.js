import deleteTask from '../deleteTask';
import {
    ADD_TIME_LOG_TO_TASK,
    DELETE_TASK,
    DELETE_TIMELOGS,
    STOP_TASK_PROGRESS
} from '../actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

const stateWithRunningTask = {
    app: {
        runningTask: {
            taskId   : '1',
            startDate: 12345
        },
        tasks      : {
            byId: {
                '1': {
                    id        : '1',
                    timeLogIds: ['2', '3']
                }
            }
        }
    }
};

const stateWithoutRunningTask = {
    app: {
        runningTask: null,
        tasks      : {
            byId: {
                '1': {
                    id        : '1',
                    timeLogIds: ['2', '3']
                }
            }
        }
    }
};

it('dispatches the correct actions', () => {
    const store = mockStore(stateWithoutRunningTask);

    store.dispatch(deleteTask('1'));

    expect(store.getActions()).toEqual([
        {type: DELETE_TIMELOGS, payload: {timeLogIds: ['2', '3']}},
        {type: DELETE_TASK, payload: {taskId: '1'}}
    ]);
});

it('does not dispatch an action for a task that does not exist', () => {
    const store = mockStore(stateWithoutRunningTask);

    store.dispatch(deleteTask('2'));

    expect(store.getActions()).toEqual([]);
});

it('stops a running task before deleting it', () => {

    const _now = Date.now;
    Date.now   = jest.fn(() => 34567);

    try {
        const store = mockStore(stateWithRunningTask);

        store.dispatch(deleteTask('1'));

        expect(store.getActions()).toEqual([
            {
                type   : STOP_TASK_PROGRESS,
                payload: {taskId: '1', startDate: 12345, stopDate: 34567, timeLogId: '1'}
            },
            {
                type   : ADD_TIME_LOG_TO_TASK,
                payload: {taskId: '1', timeLogId: '1'}
            },
            {type: DELETE_TIMELOGS, payload: {timeLogIds: ['2', '3']}},
            {type: DELETE_TASK, payload: {taskId: '1'}}
        ]);
    }
    finally {
        Date.now = _now;
    }
});
