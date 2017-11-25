import reducer from '../index';
import {CREATE_NEW_PROJECT, DELETE_PROJECT, SET_PROJECT_TITLE} from '../../../actions/actionTypes';

it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        byId: {},
        allIds: [],
        deletedIds: []
    });
});

it('it allows a project to be created', () => {
    expect(reducer({
        byId: {},
        allIds: [],
        deletedIds: []
    }, {
        type: CREATE_NEW_PROJECT,
        payload: {
            id: '1',
            title: 'New Project 1',
            timestamp: 1000
        }
    })).toEqual({
        byId: {
            '1': {id: '1', title: 'New Project 1', timestamp: 1000}
        },
        allIds: ['1'],
        deletedIds: []
    });
});

it('allows a project to be deleted', () => {
    expect(reducer({
        byId: {
            '1': {id: '1', title: 'New Project 1', timestamp: 1000}
        },
        allIds: ['1'],
        deletedIds: []
    }, {
        type: DELETE_PROJECT,
        payload: {
            id: '1'
        }
    })).toEqual({
        byId: {
            '1': {id: '1', title: 'New Project 1', timestamp: 1000}
        },
        allIds: ['1'],
        deletedIds: ['1']
    });
});

it('allows a project\'s title to be changed', () => {
    expect(reducer({
        byId: {
            '1': {id: '1', title: 'New Project 1', timestamp: 1000}
        },
        allIds: ['1'],
        deletedIds: []
    }, {
        type: SET_PROJECT_TITLE,
        payload: {
            id: '1', title: 'My Foo project'
        }
    })).toEqual({
        byId: {
            '1': {id: '1', title: 'My Foo project', timestamp: 1000}
        },
        allIds: ['1'],
        deletedIds: []
    })
});
