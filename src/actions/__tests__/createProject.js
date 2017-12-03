import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import createProject from '../createProject';
import {CREATE_NEW_PROJECT} from '../actionTypes';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

const initialState = {
    app: {
        projects: {
            byId: {},
            allIds: [],
            deletedIds: []
        }
    }
};

const baseDate = new Date('2017-03-09T18:00:00').valueOf();
Date.now       = jest.fn(() => baseDate);

it('returns a CREATE_NEW_PROJECT action', () => {
    const store = mockStore(initialState);

    store.dispatch(createProject({
        title: 'A project', code: 'AP', color: '#ffaaff'
    }));

    expect(store.getActions()).toEqual([
        {
            type: CREATE_NEW_PROJECT,
            payload: {
                id: '1', title: 'A project', code: 'AP', color: '#ffaaff', timestamp: Date.now()
            }
        }
    ]);
});
