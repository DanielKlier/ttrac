import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {DELETE_PROJECT} from '../actionTypes';
import deleteProject from '../deleteProject';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

const initialState = {
    app: {
        projects: {
            byId: {
                id: '1',
                title: 'A project',
                code: 'AP',
                color: '#ffaaff',
                timestamp: 12345
            },
            allIds: ['1'],
            deletedIds: []
        }
    }
};

it('returns a DELETE_PROJECT action', () => {
    const store = mockStore(initialState);

    store.dispatch(deleteProject('1'));

    expect(store.getActions()).toEqual([
        {
            type: DELETE_PROJECT,
            payload: {id: '1'}
        }
    ]);
});
