import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {TASK_SET_PROJECT} from '../actionTypes';
import setTaskProject from '../setTaskProject';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

const initialState = {
    app: {}
};

const baseDate = new Date('2017-03-09T18:00:00').valueOf();
Date.now       = jest.fn(() => baseDate);

it('returns a TASK_SET_PROJECT action', () => {
    const store = mockStore(initialState);

    store.dispatch(setTaskProject('1', '2'));

    expect(store.getActions()).toEqual([
        {
            type: TASK_SET_PROJECT,
            payload: {taskId: '1', projectId: '2'}
        }
    ]);
});
